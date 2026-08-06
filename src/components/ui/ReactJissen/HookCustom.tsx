// 4.自作フック
import useCounter from "./useCounter";

export default function HookCustom(){
    const [state, handleUp, handleDown, handleReset] = useCounter({init: 0, step: 1});

    return(
        <>
        <button onClick={handleUp}>カウントアップ</button>
        <button onClick={handleDown}>カウントダウン</button>
        <button onClick={handleReset}>リセット</button>
        <p>{state.count}回クリックされました</p>
        </>
    );
}