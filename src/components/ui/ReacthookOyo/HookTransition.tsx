// 4.1優先順位の低いState更新を区別する(useTransition)
import { useState, useTransition } from "react";
import { books } from "./books";
import { comments } from "./comments";
import { BookDetails, CommentList} from "./HookTransitionChild";
// 本とコメントの一覧表示のimport
import type { Comment } from './comment';
// こっちでも型をimport

// 関数名HookTransitionの一番最初のHが大文字で始まってる = Reactコンポーネントだ！
export default function HookTransition() {
    // 選択された書籍(isbn)と対応するコメント(comments)
    const [isbn, setIsbn] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [commentList, setCommentList] = useState<Array<Comment>>([]);
    // 選択ボックスの変更に応じてStateを反映
    const [isPending, startTransition] = useTransition();

    // optionを選択すると画面が変化するイベントハンドラー
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newisbn = e.target.value;
        setIsbn(newisbn);
        // e.target.value は value={b.isbn}、取得したvalueが入る
        // setComments(comments.filter(c => c.isbn === isbn));
        // // 一致したisbnだけ残して新しい配列を作る

        startTransition(() => {
            setCommentList(comments.filter(c => c.isbn === newisbn ));
        });
    };


    return (
        <div style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
            <button onClick={() => setDarkMode(prev => !prev)}>
                ダークモード切替(現在: {darkMode ? 'ON' : 'OFF'})
            </button>
            <hr />
            <select onChange={handleChange}>
                <option value="">選択してください</option>
                {books.map(b => (
                    <option key={b.isbn} value={b.isbn}>{b.title}</option>
                ))}
            </select>
            <BookDetails isbn={isbn} />
            <hr />
            <CommentList src={commentList} isPending={isPending} />
        </div>
    );
}


// 本を選択した状態でダークモードを押すとsleepがかかってしまう(なんで？)
// memoを外したので、ダークモードを切り替えるたびにCommentListも再レンダリング
// されるようになっている

// まとめ
// memoがないと、親が再レンダリングするたびに子も再レンダリングするから、ダークモード
// という親のStateだけが変わっただけなのに、子も再レンダリングされる。子に渡している
// propsは変わっていないが、CommentItemが再実行されるため、sleepも毎回実行される。