import { useEffect, useLayoutEffect, useState } from "react";

type HookEffectProps = {
    init: number
}

// 遅らせる関数
const sleep = (delay: number) => {
    const start = Date.now();
    while(true){
        if(Date.now() - start > delay){break;}
    }
};

export default function HookEffect({init}: HookEffectProps){
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        sleep(2000);
        setCount(init);
    }, []);

    return(
        <>
        <p>カウント：{count}</p>
        </>
    );
}