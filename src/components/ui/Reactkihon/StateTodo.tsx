// // -6.1- 配列の更新 -配列への追加-
// import React, { useState } from "react";

// type TodoType = {
//     id: number,
//     title: string,
//     created: Date,
//     isDone: boolean,
// }

// export default function StateTodo() {
//     const [maxId, setMaxId] = useState(1);
//     const [title, setTitle] = useState('');
//     const [todo, setTodo] = useState<TodoType[]>([]);

//     const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setTitle(e.currentTarget.value);
//     };

//     const handleClick = () => {
//         setTodo([
//             ...todo,
//             {
//                 id: maxId,
//                 title,
//                 created: new Date(),
//                 isDone: false,
//             }
//             // コピーした配列
//             // 前のオブジェクトをコピーして、新しいオブジェクトを作っているから[前オブ,新オブ]と追加される形になる
//             // もし...todoをつけなかったら、前のオブジェクトは書き換えられてしまう
//         ]);
//         setMaxId(id => id + 1);
//     };

//     return (
//         <div>
//             <label >
//                 やること:
//                 <input type="text"
//                     name="title"
//                     value={title}
//                     onChange={handleChangeTitle} />
//             </label>
//             <button type="button" onClick={handleClick}>追加</button>
//             <hr />
//             <ul>
//                 {todo.map(item => (
//                     <li key={item.id}>{item.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }













// // -6.2- 配列の更新 -配列の更新-
// import React, { useState } from "react";
// import '../StateTodo.css';

// type TodoType = {
//     id: number,
//     title: string,
//     created: Date,
//     isDone: boolean,
// }

// export default function StateTodo() {
//     const [maxId, setMaxId] = useState(1);
//     const [title, setTitle] = useState('');
//     const [todo, setTodo] = useState<TodoType[]>([]);

//     const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setTitle(e.currentTarget.value);
//     };

//     const handleClick = () => {
//         setTodo([
//             ...todo,
//             {
//                 id: maxId,
//                 title,
//                 created: new Date(),
//                 isDone: false,
//             }
//         ]);
//         setMaxId(id => id + 1);
//     };

//     const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
//         // TODOの配列を走査してidが同じものを検索
//         setTodo(todo.map(item => {
//             if (item.id === Number(e.currentTarget.dataset.id)) {
//                 return {
//                     ...item,
//                     isDone: !item.isDone,
//                 };
//             } else {
//                 return item;
//             }
//         }));
//     }

//     return (
//         <div>
//             <label >
//                 やること:
//                 <input type="text"
//                     name="title"
//                     value={title}
//                     onChange={handleChangeTitle} />
//             </label>
//             <button type="button" onClick={handleClick}>追加</button>
//             <hr />
//             <ul>
//                 {todo.map(item => (
//                     <li key={item.id}
//                         className={item.isDone ? 'done' : ''}>
//                         {item.title}
//                         <button type="button" onClick={handleDone} data-id={item.id}>済</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }













// // -6.3- 配列の更新 -配列の削除-
// import React, { useState } from "react";
// import './StateTodo.css';

// type TodoType = {
//     id: number,
//     title: string,
//     created: Date,
//     isDone: boolean,
// }

// export default function StateTodo() {
//     const [maxId, setMaxId] = useState(1);
//     const [title, setTitle] = useState('');
//     const [todo, setTodo] = useState<TodoType[]>([]);

//     const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setTitle(e.currentTarget.value);
//     };

//     const handleClick = () => {
//         setTodo([
//             ...todo,
//             {
//                 id: maxId,
//                 title,
//                 created: new Date(),
//                 isDone: false,
//             }
//         ]);
//         setMaxId(id => id + 1);
//     };


//     const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
//         // TODOの配列を走査してidが同じものを検索
//         setTodo(todo.map(item => {
//             if (item.id === Number(e.currentTarget.dataset.id)) {
//                 return {
//                     ...item,
//                     isDone: !item.isDone,
//                 };
//             } else {
//                 return item;
//             }
//         }));
//     }


//     const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
//         setTodo(todo.filter(item => {
//             // filterは、条件に合う要素だけを残して、新しい配列を作る
//             // 配列.filter(要素 => 条件)
//             return item.id !== Number(e.currentTarget.dataset.id);
//             // Number(e.currentTarget.dataset.id);が２だった場合、2じゃないものだけ残す
//         }));
//     };


//     return (
//         <div>
//             <label >
//                 やること:
//                 <input type="text"
//                     name="title"
//                     value={title}
//                     onChange={handleChangeTitle} />
//             </label>
//             <button type="button" onClick={handleClick}>追加</button>
//             <hr />
//             <ul>
//                 {todo.map(item => (
//                     <li key={item.id}
//                         className={item.isDone ? 'done' : ''}>
//                         {item.title}
//                         <button type="button" onClick={handleDone} data-id={item.id}>済</button>
//                         <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }










// -6.4- 配列の更新 -配列の並び替え-？？？？？？？？？？
import React, { useState } from "react";
import './StateTodo.css';

type TodoType = {
    id: number,
    title: string,
    created: Date,
    isDone: boolean,
}

export default function StateTodo() {
    const [maxId, setMaxId] = useState(1);
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState<TodoType[]>([]);
    const [desc, setDesc] = useState(true);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const handleClick = () => {
        setTodo([
            ...todo,
            {
                id: maxId,
                title,
                created: new Date(),
                isDone: false,
            }
        ]);
        setMaxId(id => id + 1);
    };

    const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
        // TODOの配列を走査してidが同じものを検索
        setTodo(todo.map(item => {
            // mapは一つずつ取り出して、新しい配列を返す
            if (item.id === Number(e.currentTarget.dataset.id)) {
                // idが一致したものだけisDoneを逆にする処理をする
                return {
                    ...item,
                    isDone: !item.isDone,
                };
            } else {
                return item;
            }
        }));
    };


    const handleSort = () => {
        // 既存のToDoリストを複製してソート
        const sorted = [...todo];
        sorted.sort((m, n) => {
            // sortは、配列の順番を自由に決められるメソッド
            // mとnは配列の要素を２つずつ渡している
            // sort()は、負の値=> mを前で、正の値=>nを前
            if (desc) {
                // descは降順(デスクは下、アスクは上)
                return n.created.getTime() - m.created.getTime();
                // 新しい日付=>古い日付の順番になる
            } else {
                return m.created.getTime() - n.created.getTime();
            }
        });
        setDesc(d => !d);
        // 昇順降順の切り替え
        setTodo(sorted);
    };

    return (
        <div>
            <label >
                やること:
                <input type="text"
                    name="title"
                    value={title}
                    onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleClick}>追加</button>
            <button type="button" onClick={handleSort}>ソート({desc ? '↑' : '↓'})</button>
            <hr />
            <ul>
                {todo.map(item => (
                    <li key={item.id}
                        className={item.isDone ? 'done' : ''}>
                        {item.title}
                        <button type="button" onClick={handleDone} data-id={item.id}>済</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}