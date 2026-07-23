// useRefを利用しない例
import { useState } from "react";

export default function HookRefNg(){
    let id: number | null = null;
    const [count, setCount] = useState(0);

    const handleStart = () => {
        if(id === null ){
            id = setInterval(() => setCount(c => c + 1), 1000);
        }
    };

    // 再描画のたびにid = null になってしまい開始した時のidが消えてしまう
    const handleEnd = () => {
        if(id !== null ){
            clearInterval(id);
        }
    };

    return(
        <>
        <button onClick={handleStart}>開始</button>
        <button onClick={handleEnd}>終了</button>
        <p>{count}秒経過</p>
        </>
    );
}