// 1.状態を管理する「Atom」
//  1.2 カウンターにリセット機能を追加
// import { atom } from 'jotai';

// export const counterAtom = atom(0);



// // カウンターにリセット機能を追加
// import { atomWithReset } from "jotai/utils";

// export const counterAtom = atomWithReset(0);






// // 1.3 既存のAtomの演算/加工結果を返す(派生Atom)
// import { atom } from 'jotai';

// // 1. TODO 1件あたりの型を定義
// export type Todo = {
//     id: number;
//     title: string;
//     isDone: boolean;
// };

// // 2. atom<型名> の形式で定義する
// export const todosAtom = atom<Todo[]>([
//     {
//         id: 1,
//         title: 'My TODO',
//         isDone: false,
//     },
//     {
//         id: 2,
//         title: 'Sample',
//         isDone: true,
//     },
// ]);

// // 読み取り専用の Atom は自動で型がつくのでそのままでもOK(派生Atom)
// // １つ目のget = Jotaiが自動で渡してくれるget関数
// export const todoLastIdAtom = atom(get => {
//     // 他のAtomの現在の値を取得する関数

//     // TODOリスト最後のTODO
//     // 2つ目のget = さっき受け取ったget関数を使っているだけ
//     const todos = get(todosAtom);
//     // 型定義のおかげで、ここで「id」があることが保証される
//     return todos.at(-1)?.id ?? 0;
// });







// 1.4 既存のAtomへの更新コードを定義する
// import { atom } from "jotai";
// import { atomWithReset } from "jotai/utils";

// export const counterAtom = atomWithReset(0);

// export type Todo = {
//     id: number;
//     title: string;
//     isDone: boolean;
// };

// export const todosAtom = atom<Todo[]>([
//     {
//         id: 1,
//         title: "MyTodo",
//         isDone: false,
//     },
//     {
//         id: 2,
//         title: "Sample",
//         isDone: true,
//     }
// ]);

// export const todoLastIdAtom = atom(get => {
//     const todos = get(todosAtom);
//     return todos.at(-1)?.id ??0;
// });

// export const todoAtAtom = atom(null,
//     // nullは自分自身は値を持たない、更新だけ担当
//     (get, set, title: string) => {
//         set(todosAtom, [
//             ...get(todosAtom),
//             {
//                 id: get(todoLastIdAtom) + 1,
//                 title,
//                 isDone: false
//         }
//         ]);
//     }
// );

// export const todoDoneAtom = atom(null,
//     (get, set, id: number) => {
//         set(todosAtom, 
//             get(todosAtom).map(item => {
//                 if(item.id === id){
//                     return {...item,
//                         isDone: !item.isDone
//                     };
//                 }else{
//                     return item;
//                 }
//             })
//         );
//     }
// );

// export const todoRemoveAtom = atom(null,
//     (get, set, id: number) => {
//         set(todosAtom,
//             get(todosAtom).filter(item =>  item.id !== id )
//         )
//     }
// );








// 1.補足 Todoリストをストレージに保存する
// 2.Atomの値の有効範囲を制限す/Storeで複数のAtom値を束ねる（Store/Provider）
import { atom } from "jotai";
import { atomWithReset, atomWithStorage } from "jotai/utils";

export const counterAtom = atomWithReset(0);

export type Todo = {
    id: number;
    title: string;
    isDone: boolean;
};

export const todosAtom = atomWithStorage<Todo[]>("todos",[
    {
        id: 1,
        title: "MyTodo",
        isDone: false,
    },
    {
        id: 2,
        title: "Sample",
        isDone: true,
    }
]);

export const todoLastIdAtom = atom(get => {
    const todos = get(todosAtom);
    return todos.at(-1)?.id ??0;
});

export const todoAtAtom = atom(null,
    // nullは自分自身は値を持たない、更新だけ担当
    (get, set, title: string) => {
        set(todosAtom, [
            ...get(todosAtom),
            {
                id: get(todoLastIdAtom) + 1,
                title,
                isDone: false
        }
        ]);
    }
);

export const todoDoneAtom = atom(null,
    (get, set, id: number) => {
        set(todosAtom, 
            get(todosAtom).map(item => {
                if(item.id === id){
                    return {...item,
                        isDone: !item.isDone
                    };
                }else{
                    return item;
                }
            })
        );
    }
);

export const todoRemoveAtom = atom(null,
    (get, set, id: number) => {
        set(todosAtom,
            get(todosAtom).filter(item =>  item.id !== id )
        )
    }
);

