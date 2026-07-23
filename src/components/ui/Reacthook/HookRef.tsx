// import { useRef, useState } from "react";

// export default function HookRef() {
//     const id = useRef<number>(null);
//     const [count, setCount] = useState(0);

//     const handleStart = () => {
//         if (id.current === null) {
//             // まだタイマーが動いてなかったらsetIntervalを開始するよ
//             // もし動いている状態だったらもう動かない、タイマーは一つだけ
//             id.current = setInterval(() => setCount(c => c + 1), 1000);
//         }
//     };

//     const handleEnd = () => {
//         if (id.current !== null) {
//             clearInterval(id.current);
//             id.current = null;
//         }
//     };

//     return (
//         <>
//             <button onClick={handleStart}>開始</button>
//             <button onClick={handleEnd}>終了</button>
//             <p>{count}秒経過</p>
//         </>
//     );
// }




import { useRef, useState } from "react";

export default function HookRef() {
    // const id = useRef<number>(null);
    const [id, setId] = useState<ReturnType<typeof setInterval> | null>(null);
    const [count, setCount] = useState(0);

    const handleStart = () => {
        if (id === null) {
            setId((setInterval(() => setCount(c => c + 1), 1000)));
        }
    };

    const handleEnd = () => {
        if (id !== null) {
            clearInterval(id);
            setId(null);
        }
    };

    return (
        <>
            <button onClick={handleStart}>開始</button>
            <button onClick={handleEnd}>終了</button>
            <p>{count}秒経過</p>
        </>
    );
}