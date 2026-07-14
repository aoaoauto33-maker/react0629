// -1- Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { useId } from "react";
import { useForm, type FieldErrors, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form";
import * as yup from 'yup';

type FormValues = {
    name: string;
    email: string;
    gender: "male" | "female";
    memo: string;
};

// 検証ルールを準備
// 型で決めたキーの数だけルールを決める(今回は4つ)
const schema = yup.object({
   name: yup
        .string() 
        .label('名前')
        .required('${label}は必須入力です。')
        .max(20, '${label}は${max}文字以内で入力してください。'),
    gender: yup
        .string()
        .label('性別')
        // oneOf を使って、許可する値を指定する
        .oneOf(['male', 'female'] as const, '${label}は正しく選択してください')
        // as constのおかげで、決まった値の配列になる
        .required('${label}は必須入力です。'),
    email: yup
        .string()
        .label('メールアドレス')
        .required('${label}は必須入力です。')
        .email('${label}の形式が不正です。'),
        // emailで正規表現を使う必要がない
    memo: yup
        .string()
        .label('備考')
        .required('${label}は必須入力です。')
        .min(10, '${label}は${min}文字以上で入力してください')        
});

export default function FormYup() {
    // デフォルト値
    const defaultValue: FormValues = {
        name: 'Bob',
        email: 'bob@example.com',
        gender: 'male',
        memo: '',
    };

    // フォーム初期化
    const { register, handleSubmit, formState: {errors} } = useForm<FormValues>({ 
        defaultValues: defaultValue,
        resolver: yupResolver(schema),
        // Yupへ(schema)、データの検証をやってね
    });

     // サブミット時の処理
     const onsubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        console.log(data)
    };
     const onerror: SubmitErrorHandler<FormValues> = (err: FieldErrors<FormValues>) => {
        console.log(err);
    };

    const id = useId();

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor={`${id}-name`}>名前:</label><br />
                <input id={`${id}-name`} type="text"
                    {...register('name')}
                />
                <div className="error">{errors.name?.message}</div>
            </div>
            <div>
                <label>性別:</label><br />
                <label>
                    <input id="male" type="radio" value="male"
                        {...register('gender')}
                    />男性
                </label>
                <label>
                    <input id="female" type="radio" value="female"
                        {...register('gender')}
                    />女性
                </label>
                <div className="error">{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor={`${id}-email`}>メールアドレス:</label><br />
                <input id={`${id}-email`} type="email"
                    {...register('email')}
                />
                <div className="error">{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor={`${id}-memo`}>備考:</label><br />
                <textarea id={`${id}-memo`}
                    {...register('memo')}
                />
                <div className="error">{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">送信</button>
            </div>
        </form>
    );
}