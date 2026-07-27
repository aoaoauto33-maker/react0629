// // 1.状態を管理する「Atom」
// import { atom } from 'jotai';

// export const counterAtom = atom(0);



// // カウンターにリセット機能を追加
// import { atomWithReset } from "jotai/utils";

// export const counterAtom = atomWithReset(0);




//  既存のAtomの演算/加工結果を返す
// 1. TODO 1件あたりの型を定義
export type Todo = {
    id: number;
    title: string;
    isDone: boolean;
};

// 2. atom<型名> の形式で定義する
export const todosAtom = atom<Todo[]>([
    {
        id: 1,
        title: 'My TODO',
        isDone: false,
    },
    {
        id: 2,
        title: 'Sample',
        isDone: true,
    },
]);

// 読み取り専用の Atom は自動で型がつくのでそのままでもOK
export const todoLastIdAtom = atom(get => {
    // TODOリスト最後のTODO
    const todos = get(todosAtom);
    // 型定義のおかげで、ここで「id」があることが保証される
    return todos.at(-1)?.id ?? 0;
});