// -10.useReducerフックの基本-
import { useReducer } from "react";

type HookReducerProps = {
    init: number;
}

export default function HookReducer({init}: HookReducerProps) {
    // State & Reducerの準備
    const [state, dispatch] = useReducer(
        // dispatch = 何をしたいか伝える、状態を変更するときに使う関数
        (state, action) => {
            // ↑これがReducer
            // state=現在の状況、action=どんな命令か( = dispatch?)
            switch (action.type) {
                // action.typeがupdateだったら
                case 'update':
                    return { count: state.count + 1};
                default:
                    // 知らない値が入ってたら
                    return  state;
            }
        },
        // Stateの初期値
        {
            count: init,
        }
        // 第二引数でstateの中に何が入っているかを決めている
    );

    // Reducer経由でStateを更新
    const handleClick = () => {
        dispatch({ type: 'update' });
    };

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{state.count}回クリックされました</p>
        </>
    );
}