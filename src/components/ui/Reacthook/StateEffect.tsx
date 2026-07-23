import { useEffect, useState } from "react";

type StateEffectProps = {
    init: number
}

export default function StateEffect({init}: StateEffectProps){
    const [count, setCount] = useState(init);
    const [dummy, setDummy] = useState(0);

    // useEffect(() => {
    //     console.log(`count is ${count}`);
    // }, [count]);
    // [count]じゃなく[]だった場合、最初の一回以降実行されなくなる

    // useEffectなしでも作れるか？
    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
        console.log(`count is ${newCount}`);
    };
    // useEffectなしでも作れるならいらないんじゃね？ => タイマーの時必要
    
    const handleDummyClick = () => setDummy(dummy + 1);

    return(
        <>
        <button onClick={handleDummyClick}>Dummy</button>
        <button onClick={handleClick}>カウント</button>
        <p>{dummy}回クリックされました(dummy)</p>
        <p>{count}回クリックされました</p>
        </>
    )
}