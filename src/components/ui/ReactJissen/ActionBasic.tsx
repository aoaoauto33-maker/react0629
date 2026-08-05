// 1.useActionState関数によるデータ更新
import { useActionState, useState } from "react";
import { updateForm, type UpdateFormProps } from "./action";

export default function ActionBasic(){
    const [books, setBooks] = useState<UpdateFormProps[]>([]);
    const [error, submitAction, isPending]  = useActionState<string[] | null, FormData>(
        // error = 現在の状態(型はstring[] | null,)、nullは成功でstring[]は失敗
        // submitActionはボタン送信後の処理、submitActionはasync関数を実行するための関数
        // isPending = trueなら送信中
        // FormData = グローバルな環境で使えるやつ(importいらない)

        // 以下はsubmitActionが押された時の処理
        async(prevState, formData) => {
            // tring[] | nullはerror、FormDataはformDataの型
            console.log(prevState);
            // prevStateはerror、前回のState値が入る
            // console.logしてるのが関数の最初で、今回のStateを更新する前なので前回のが出力される
            // FormDataはHTMLで<form>タグで囲っている入力値
            const {result, errors} = await updateForm({
                // バリデーション(updateForm)が終わるまで待以下の処理は待たせる
                id: crypto.randomUUID(),
                title: (formData.get("title") as string) || "",
                price: Number(formData.get("price")) || 0,
                published: (formData.get("published") as string) || ""
                // name属性からどれを受け取るか指定
            });
            if(!errors && result){
                setBooks(prevBooks => [...prevBooks, result]);
                return null;
            }
            return errors;
        },
        null
    );
    // ここまで全てerrorの初期値にnullを入れるための処理
    return(
        <form noValidate action={submitAction}>
            <ul>
                {error?.map(msg => <li key={msg}>{msg}</li>)}
            </ul>
            <div>
                <label htmlFor="title">書名</label><br />
                <input id="title" name="title" type="text" size={20}/>
            </div>
            <div>
                <label htmlFor="price">価格</label><br />
                <input id="price" name="price" type="number" />
            </div>
            <div>
                <label htmlFor="published">刊行日</label><br />
                <input id="published" name="published" type="date" size={20} />
            </div>
            <div>
                <button type="submit" disabled={isPending}>登録</button>
            </div>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} - {book.price}円 - {book.published}
                    </li>
                ))}
            </ul>
        </form>
    );
}