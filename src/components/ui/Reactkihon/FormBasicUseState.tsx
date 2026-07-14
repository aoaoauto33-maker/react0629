// -7- RHF -これは従来のReact-
import { useId, useState } from "react";
import './FormBasic.css';

type FormValues = {
    name: string;
    email: string;
    gender: "male" | "female" | "";
    memo: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    gender?: string;
    memo?: string;
};

export default function FormBasicUseState() {
    // 既定値を準備
    const defaultValues: FormValues = {
        name: 'Bob',
        email: 'bob@example.com',
        gender: 'male',
        memo: '',
    };

    // フォームの値を1つのstateでまとめて管理
    const [values, setValues] = useState<FormValues>(defaultValues);
    // エラーメッセージ用のstate
    const [errors, setErrors] = useState<FormErrors>({});

    const id = useId();



    // 入力値の変更をまとめて処理する共通ハンドラー
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        // ボタンを押して得た要素か、入力して得た要素を持ってくるかのどちらか(性別ボタン、他入力)
    ) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    // バリデーションを自前で実装
    const validate = (data: FormValues): FormErrors => {
        // : FormErrorsは戻り値の型
        const newErrors: FormErrors = {};

        // 名前のバリデーション
        if (!data.name) {
            newErrors.name = '名前は必須入力です';
        } else if (data.name.length > 20) {
            newErrors.name = '名前は20文字以内にしてください';
        }

        // 性別のバリデーション
        if (!data.gender) {
            newErrors.gender = '性別は必須です';
        }

        // メールアドレスのバリデーション
        const emailPattern = /^[a-z\-\d._%+]+@[a-z\-\d]+(?:\.[a-z\-\d]+)*\.[a-z]{2,}$/i;
        if (!data.email) {
            newErrors.email = 'メールアドレスは必須入力です';
        } else if (!emailPattern.test(data.email)) {
            // testはbooleanを返す
            newErrors.email = 'メールアドレスの形式が不正です';
        }

        // 備考のバリデーション
        if (!data.memo) {
            newErrors.memo = '備考は必須入力です';
        } else if (data.memo.length < 10) {
            newErrors.memo = '備考は10文字以上にしてください';
        }

        return newErrors;
    };



    // サブミット時の処理
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ブラウザの基本的な動作をやめさせる
        // ページ遷移やページが再読み込みされるのを防ぐ
        // validateがokだったら実行してok

        const validationErrors = validate(values);
        setErrors(validationErrors);

        // エラーが1つもなければ送信処理へ
        if (Object.keys(validationErrors).length === 0) {
            // エラー配列の長さが0だったら送信できる
            console.log(values);
        } else {
            console.log(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            {/* 自分たちで決めたvalidateだけ機能させたい時に使う */}
            <div>
                <label htmlFor={`${id}-name`}></label>
                <input
                    id={`${id}-name`}
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                />
                <div className="error">{errors.name}</div>
            </div>
            <div>
                <label>性別:</label><br />
                <label>
                    <input
                        id="male"
                        name="gender"
                        type="radio"
                        value="male"
                        checked={values.gender === 'male'}
                        onChange={handleChange}
                    />男性
                </label>
                <label>
                    <input
                        id="female"
                        name="gender"
                        type="radio"
                        value="female"
                        checked={values.gender === 'female'}
                        onChange={handleChange}
                    />女性
                </label>
                <div className="error">{errors.gender}</div>
            </div>
            <div>
                <label htmlFor={`${id}-email`}></label>
                <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <div className="error">{errors.email}</div>
            </div>
            <div>
                <label htmlFor={`${id}-memo`}>備考:</label><br />
                <textarea
                    id={`${id}-memo`}
                    name="memo"
                    value={values.memo}
                    onChange={handleChange}
                />
                <div className="error">{errors.memo}</div>
            </div>
            <div>
                <button type="submit">送信</button>
            </div>
        </form>
    );
}