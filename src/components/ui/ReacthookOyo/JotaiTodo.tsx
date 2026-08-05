// // 1.3 既存のAtomの演算/加工結果を返す(派生Atom)
// import { useAtom, useAtomValue } from "jotai";
// import { useState } from "react";
// import { todosAtom, todoLastIdAtom } from '../../../store/atom';
// import '../Reactkihon/StateTodo.css';

// export default function JotaiTodo() {
//     const [title, setTitle] = useState('');
//     // TodoリストをJotaiから取得
//     const [todo, setTodo] = useAtom(todosAtom);
//     // 最大id値をJotaiから取得
//     const maxId = useAtomValue(todoLastIdAtom);
//     // const [maxId] = useAtom(todoLastIdAtom);でもいけるが、このコンポーネント
//     // からtodoLastIdAtomの値を書き換えないのでuseAtomValueで十分
//     // todoLastIdAtomは計算結果であって、自分で値を持っているわけではないため更新不可

//     const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setTitle(e.target.value);
//     };

//     // [追加]ボタンでTodo項目を追加
//     const handleTodoAdd = () => {
//         setTodo([
//             ...todo,
//             // 配列の中のスプレッド演算子 = コピーして元の値を弄らずに新しい配列を作る
//             {
//                 id: maxId + 1,
//                 title,
//                 // このtitleはuseStateで管理している入力欄の文字列
//                 isDone: false,
//             }
//         ]);
//     }

//     // [済]ボタンでTodo項目を作業済みとしてマーク
//     const handleDone = (id: number) => {
//         setTodo(todo.map(item => 
//             item.id === id ? { ...item, isDone: !item.isDone } : item
//             // オブジェクトの中でのスプレッド演算子 = // オブジェクトの中身をコピーして、
//             // 一部のプロパティだけ変更する
//         ));
//     };

//     // [削除]ボタンでTodo項目を削除
//     const handleRemove = (id: number) => {
//         setTodo(todo.filter(item =>
//             item.id !== id
//         ));
//     };

//     return (
//         <div>
//             <label>
//                 やること:
//                 <input type="text" name="todo" value={title} onChange={handleChangeTitle} />
//             </label>
//             <button type="button" onClick={handleTodoAdd}>追加</button>
//             <hr />
//             <ul>
//                 {todo.map(item => (
//                     <li key={item.id} className={item.isDone ? 'done' : ''}>
//                         {item.title}
//                         <button type="button" onClick={() => handleDone(item.id)}>
//                             {item.isDone ? "未" : "済"}</button>
//                         <button type="button" onClick={() => handleRemove(item.id)}>削除</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }






// 1.4 既存のAtomへの更新コードを定義する
// 2. Todoリストをストレージに保存する
import { useSetAtom, useAtomValue } from "jotai";
import React, { useState } from "react";
import {
    todoAtAtom,
    todoDoneAtom,
    todoRemoveAtom,
    todosAtom
} from "../../../store/atom";
import '../Reactkihon/StateTodo.css';

export default function JotaiTodoUp(){
    const [title, setTitle ] = useState("");
    const todo = useAtomValue(todosAtom);
    const todoAt = useSetAtom(todoAtAtom);
    const todoDone = useSetAtom(todoDoneAtom);
    const todoRemove = useSetAtom(todoRemoveAtom);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleAt = () => todoAt(title);

    const handleDone = ( id: number ) => todoDone(id);

    const handleRemove = (id: number ) => todoRemove(id);

    return (
        <div>
            <label>やること
                <input type="text" name="todo" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleAt}>追加</button>
            <hr />
            <ul>
                {todo.map(item => (
                    <li key={item.id} className={item.isDone? "done" : "" }>{item.title}
                    <button type= "button" onClick={() => handleDone(item.id)}>
                        {item.isDone ?"未" :"済"}</button>
                    <button type= "button" onClick={() => handleRemove(item.id)}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}