// 1. メモ化のためのサンプル
// 2. 関数の結果をメモ化する(useMemo)
import type React from "react";
import { memo } from "react";

type MyButtonProps = {
    id: string;
    handleClick: () => void;
    children: React.ReactNode;
}

export const MyButton = memo(({id, handleClick, children}: MyButtonProps) => {
    console.log(`mybutton is called: ${id}`);
    return(
        <button onClick={handleClick}>{children}</button>
        // children = タグに挟まれたテキスト
        // handleClickが変わっているのでpropsも変化している
    );
});

type MyCounterProps = {
    id: string;
    value: number;
}

export const MyCounter = memo(({id, value}: MyCounterProps) => {
    console.log(`mybutton is called: ${id}`);
    return(
        <p>現在地： {value}</p>
    );
});

