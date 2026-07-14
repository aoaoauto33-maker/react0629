// -7- RHF -React Hook Formの基本-
import { useId } from "react";
import { useForm, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form";
// RHFから機能を持ってきている
import './FormBasic.css';

type FormValues = {
    name: string;
    email: string;
    gender: "male" | "female";
    memo: string;
};

export default function FormBasic(){
    const defaultValues: FormValues = {
        name: "Bob",
        email: "bob@example.coom",
        gender: "male",
        memo: "",
    };

    // RHFがフォーム全体を管理するためのオブジェクト
    // RHFがフォーム全体を管理するためのオブジェクトが作られて、その中にはたくさんの機能がある
    // 今回はその中から３つ取り出している
    const { register, handleSubmit, formState: {errors}} = useForm<FormValues>({
        // registerは入力欄とフォーム管理を接続する
        // handleSubmitは送信時に検証の成功/失敗を振り分けてくれる引数に(成功,失敗)
        // formStateはformState.errorをerrorsという名前を変えたよ
        defaultValues,
    });
    // Stateの代わりにRHFが管理してくれる？

    // submit時の処理
    // 成功(バリデーションが処理できた時だけ実行される)
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // リアルタイムではなく、送信されて初めてバリデーションするのがonSubmit
        // submitHandlerは、送信時専用の型情報
        // <FormValues>があることで、data.nameがstringだとわかる
        console.log(data);
        // dataのFormValuesの値、バリデーションを通過した後の処理
    }

    // 失敗
    const onerror: SubmitErrorHandler<FormValues> = (err) => {
        console.log(err);
    }

    const id = useId();

    return(
        <form onSubmit={handleSubmit(onSubmit, onerror)} noValidate>
            <div>
                <label htmlFor={`${id}-name`}></label>
                <input 
                id={`${id}-name`}
                type="text"
                {...register(`name`,{
                // コピーしているわけじゃなくて、inputにまとめて渡すために書いている
                    required:'名前は必須入力です',
                    // requiredは、入力が必須かどうかを設定
                    maxLength:{
                        value:20,
                        message:'名前は20文字以内にしてください'
                    },
                    // 第一引数に名前、第二引数にバリデーションの設定を書いてる
                })}></input>
                <div className="error">{errors.name?.message}</div>
            </div>


            <div>
                <label>性別：</label><br />
                <label>
                <input 
                id="male"
                type="radio"
                value="male"
                {...register(`gender`,{
                    required:'性別は必須です',
                })} />男性
                </label>

                <label>：
                <input 
                id="female"
                type="radio"
                value="female"
                {...register(`gender`,{
                    required:'性別は必須です',
                })} />女性
                </label>
                <div className="error">{errors.gender?.message}</div>
            </div>






            <div>
                <label htmlFor={`${id}-email`}></label>
                <input 
                id={`${id}-email`}
                type="email"
                {...register(`email`,{
                    required:'メールアドレスは必須入力です',
                    pattern:{
                        value:/^[a-z\-\d._%+]+@[a-z\-\d]+(?:\.[a-z\-\d]+)*\.[a-z]{2,}$/i,
                        message:'メールアドレスの形式が不正です'
                    },
                })} />
                <div className="error">{errors.email?.message}</div>
            </div>





            <div>
                <label htmlFor={`${id}-memo`}>備考：</label><br />
                <textarea
                id={`${id}-memo`}
                {...register(`memo`,{
                    required:'備考は必須入力です',
                    minLength:{
                        value:10,
                        message:'備考は10文字以上にしてください'
                    },
                })} />
                <div className="error">{errors.memo?.message}</div>
            </div>

            <div>
                <button type="submit">送信</button>
            </div>




        </form>
    )
}