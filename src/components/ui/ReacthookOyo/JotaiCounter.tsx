// 1.状態を管理する「Atom」
// カウンターにリセット機能を追加
import { useAtom } from "jotai";
import { counterAtom } from "../../../store/atom";
import { useResetAtom } from "jotai/utils";

export default function JotaiCounter(){
    const [counter, setCounter ] = useAtom(counterAtom);
    const resetCounter = useResetAtom(counterAtom);

    const handleClick = () => {
        setCounter(c => c + 1);
    };

    return(
        <>
        <button onClick={handleClick}>カウント</button>
        <button onClick={resetCounter}>リセット</button>
        <p>{counter}回クリックされました</p>
        </>
    );
}