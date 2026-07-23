import { useEffect, useState } from "react";
import './HookTimer.css';

type HookTimerProps = {
    init: number
}

export default function HookTimer({init}: HookTimerProps) {
    const [count, setCount] = useState<number>(init);

    useEffect(() => {
        // タイマーを準備
        const t = setInterval(() => {
            setCount(c => {
                if(c <= 0){
                    clearInterval(t);
                    // 引数のtは止めたいタイマーを入れてる
                    return 0;
                }
                return c - 1;
            });
        }, 1000);
        // コンポーネント破棄時にタイマーも破棄
        return (() => {
            
        });
    }, []);

    return (
        <div className={count < 0 ? 'warn' : ''}>
            現在のカウント: {count}
        </div>
    );
}