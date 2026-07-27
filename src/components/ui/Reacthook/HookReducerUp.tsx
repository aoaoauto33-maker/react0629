// -11.Reducerを複数のAction型に対応する-
import { useReducer } from "react";

type HookReducerUpProps = {
    init: number;
}

export default function HookReducerUp({ init }: HookReducerUpProps) {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'update':
                    return { count: state.count + action.step };
                case 'reset':
                    return { count: action.init };
                default:
                    return state;
            }
        },
        {
            count: init,
        }
    );

    const handleUp = () => dispatch({ type: 'update', step: 1 });
    const handleDown = () => dispatch({ type: 'update', step: -1 });
    const handleReset = () => dispatch({ type: 'reset', init: 0 });

    return (
        <>
            <button onClick={handleUp}>カウントアップ</button>
            <button onClick={handleDown}>カウントダウン</button>
            <button onClick={handleReset}>リセット</button>
            <p>{state.count}回クリックされました</p>
        </>
    );
}