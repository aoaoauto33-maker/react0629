// 4.1優先順位の低いState更新を区別する(useTransition)
import { books } from "./books";
// booksの実際に値が入ったデータを持ってきている
import type { Comment } from './comment';
// commentは型だけ？

// delayミリ秒だけ処理を遅延するコード
const sleep = (delay: number) => {
    const start = Date.now();
    while (Date.now() - start < delay);
};

// isbnだけのpropsの型
type BookDetailsProps = {
    isbn: string;
}

// <hr />より上の本一覧を表示する関数
export function BookDetails({ isbn }: BookDetailsProps) {
    const book = books.find(b => b.isbn === isbn);
    // importしたbooksの中から一致したisbnを見つけて、それを変数bookに入れる
    // find()は条件に合う最初の要素を一つ返すメソッド  配列.find(条件)
    return (
        <ul>
            <li>ISBN: {book?.isbn}</li>
            <li>書名: {book?.title}</li>
            <li>価格: {book?.price}</li>
            <li>概要: {book?.summary}</li>
            <li>配布サンプル: {(book?.download) ? 'あり' :'なし'}</li>
        </ul>
    );
}

type CommentListProps = {
    src: Comment[];
    // srcにComment型を配列にして入れる
    isPending: boolean;
    // pending = 未解決
}

// コメント一覧表示の変数
// memoを使っているので、propsが変わらなければ親が再レンダリングされても子は再レンダリングされない
export const CommentList = ({ src, isPending }: CommentListProps) => {
    if (isPending) return <p>Now Loading...</p>
    // 受け取ったコメント情報をリスト表示
    // 1回の関数呼び出しで返る値は必ず1つだけなので、isPendingがtrueだと下のreturnは返さない
    return (
        <ol>
            {src.map(c => <CommentItem key={c.id} src={c}/>)}
            {/* CommentItemにkeyとsrcを一個ずつ取り出して渡す */}
        </ol>
    );
};


type CommentItemProps = {
    src: Comment;
    // 一個ずつ取り出して受け取ったものなので今度は[]じゃない
}

// 受け取ったコメント一つをどう表示するかを書いた関数
// CommentItemはCommentListの子コンポーネント
function CommentItem({src}: CommentItemProps) {
    sleep(300);
    // 一個ずつのコメントにかかる秒数なので、コメント数が多いほど表示に時間がかかる
    // mapはバーっと一気に処理を行うのでまとめて待たなきゃいけない、sleepは同期処理だし
    return <li>{src.body} ({src.rank})</li>
}

// CommentItemにmemoが必要なパターンって？
// srcの一つだけをユーザーが変更できる仕様だった場合、必要