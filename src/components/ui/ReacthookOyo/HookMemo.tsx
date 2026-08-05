// 1. メモ化のためのサンプル
// 2. 関数の結果をメモ化する(useMemo)
import { useCallback, useMemo, useState } from "react";
import { MyButton, MyCounter } from "./HookMemoChild";

// 引数(delay)だけ処理を休止するコード
const sleep = (delay: number) => {
    const start = Date.now();
    while (Date.now() - start < delay);
};

export default function HookMemo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    // MyButtonに渡すハンドラー
    const increment = useCallback(() => setCount1(c => c + 1), []);
    const decrement = useCallback(() => setCount2(c => c - 1), []);
    // count1に100を加えた値を算出するコード(ダミーの重い処理)
    const heavyProcess = useMemo(() => {
        sleep(1000);
        return count1 + 100;
    }, [count1]);

    return (
        <>
            {/* 値を1ずつインクリメントするカウンター */}
            <div>
                <MyButton id="btn1" handleClick={increment}>カウントアップ</MyButton>
                <MyCounter id="c1" value={count1} />
                <p>#{heavyProcess}#</p>
            </div>
            {/* 値を1ずつデクリメントするカウンター */}
            <div>
                <MyButton id="btn2" handleClick={decrement}>カウントダウン</MyButton>
                <MyCounter id="c2" value={count2} />
            </div>
        </>
    );
}