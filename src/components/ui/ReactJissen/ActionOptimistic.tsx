// 2. 楽観的更新を実装する(useOptimistic)
import { useActionState, useOptimistic, useState } from "react";
import { updateForm, type UpdateFormProps } from "./action";

export default function ActionOptimistic() {
    // 1. サーバーで確定したデータの管理（真実のソース）
    const [books, setBooks] = useState<UpdateFormProps[]>([]);

    // 2. useOptimisticの定義
    // 確定したbooksをベースに、一時的な状態「optimisticBooks」を作成
    const [optimisticBooks, setOptimisticBooks] = useOptimistic(
        books,
        // 第一引数に正しいデータはこれだよ、と教えている
        (state: UpdateFormProps[], newBook: UpdateFormProps) => {
            // state = optimisticBooks、newBook = 今登録してるデータ1件
            // 楽観的更新データとして、updating: true の状態のデータがリストに加わる
            return [...state, { ...newBook}];
        }
        // 第二引数は「仮データを追加するとき、どういう形にする？」を決めている
        // 第二引数はsetOptimisticBooksが呼ばれたときにやる関数
        // booksを元にして、登録中のデータを一時的に合成した状態を作っている
        // ここでidを再び上書きしていたのは、楽観的状態に追加するデータ用のidを別で確保したいから
        // idを上書きする必要は別にないらしい
    );

    const [error, submitAction, isPending] = useActionState<string[] | null, FormData>(
        // 第1引数
        async (prevState, formData) => {
            // 楽観的表示用のデータを作成 (updating: true)
            const newBook: UpdateFormProps = {
                id: crypto.randomUUID(),
                title: (formData.get('title') as string) || '',
                price: Number(formData.get('price')) || 0,
                published: (formData.get('published') as string) || '',
                updating: true,
            };

            // 3. サーバー通信前に「楽観的更新」を実行！ (即座にUIを更新)
            // これにより、通信を待たずに optimisticBooks が更新される
            setOptimisticBooks(newBook);

            // サーバー通信を実行
            const { result, errors } = await updateForm(newBook);
            console.log(prevState);
            // エラーがなかったらStateを更新
            if (!errors && result) {
                // 4. サーバーで成功したら、正式に真実のソース(books)を更新
                // この瞬間に optimisticBooks は最新の books と同期されます
                setBooks(prevBooks => [...prevBooks, { ...result, updating: false }]);
                return null; // エラーなしとしてnullを返す
            }
            // エラーがある場合はerrors配列を返し、それが次の `error` 変数になる
            return errors;
        },
        // 第2引数
        null
    );

    return (
        <form noValidate action={submitAction}>
            {/* エラーメッセージをリスト表示 */}
            <ul>
                {error?.map(msg => <li key={msg}>{msg}</li>)}
            </ul>
            <div>
                <label htmlFor="title">書名:</label><br /> 
                <input id="title" name="title" type="text" size={20} />
            </div>
            <div>
                <label htmlFor="price">価格:</label><br /> 
                <input id="price" name="price" type="number" />
            </div>
            <div>
                <label htmlFor="published">刊行日:</label><br /> 
                <input id="published" name="published" type="date" size={20} />
            </div>
            <div>
                <button type="submit" disabled={isPending}>登録</button>
            </div>
            {/* 登録済みの書籍情報をリスト表示 */}
            <ul>
                {/* 5. 表示には確定データ(books)ではなく optimisticBooks を使う */}
                {optimisticBooks.map(book => (
                // booksは今回表示していなくて、表示させているのはoptimistic
                    <li key={book.id} style={{ opacity: book.updating ? 0.5 : 1 }}>
                        {book.title} - {book.price}円 - {book.published}
                        {book.updating && " (保存中...)"}
                    </li>
                ))}
            </ul>
        </form>
    );
}
// optimisticBooksを一歩先の理解へ
// この画面では基本的にoptimisticBooksを表示し続けるが、「ずっと間違った一時データを表示している」わけではなく、
// 成功したら自動的に本物のデータに置き換わる仕組みになっている。
// booksが土台になっているので画面に表示されているのは「一時的なデータ」ではなく、「本物のデータ + 一時的な変更を合成したデータ