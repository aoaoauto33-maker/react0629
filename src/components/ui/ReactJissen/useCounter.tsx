// 4.自作フック
import { useReducer } from "react";

type UseCounterProps = {
    init: number;
    step: number;
};

export default function useCounter({ init, step }: UseCounterProps){
    const [state, dispatch] = useReducer(
        // dispatchから受け取ったactionをもとに以下を処理する
        (state, action) =>{
            switch(action.type){
                case 'update':
                    return{ count: state.count + action.step };
                case 'reset':
                    return{ count: action.init }
                default:
                    return state;
            }
            // reducer関数(stateをどう更新するか)
        },
        {
            count: init
            // 初期値設定
        }
    );
    const handleUp = () => dispatch({ type: 'update', step});
    const handleDown = () => dispatch({ type: 'update', step: -step});
    const handleReset = () => dispatch({ type: 'reset', init});

    return [state, handleUp, handleDown, handleReset] as const;
    // as constで型推論を正確にしている
    // 順番を固定したい
}