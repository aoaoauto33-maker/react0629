import { useState } from "react";
import StateCounter from "./StateCounter";

export default function StateParent(){
    const [count, setCount] = useState(0);
    const update = (step: number) => setCount(c => c + step); // 2
    // cは、元のstateを表している(名前はなんでもいい)
    // count = cだけど、名前は変えないといけない
    return(
        <>
        <p>総カウント: {count}</p>
        <StateCounter step={1} onUpdate={update} />
        <StateCounter step={5} onUpdate={update} />
        <StateCounter step={-1} onUpdate={update} />
        {/* StateCounterには、stepの値と関数(update)を渡さないといけない */}
        </>
    );
}