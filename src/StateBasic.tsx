// // -1-
// // reactのuseStateというState(状態)を管理するためのフックを読み込む
// // useStateをimportしてから初めてstateが使える
// // useState関数は、二つの定数を入れることができる
// import { useState } from "react";

// // propsの型を定義
// type props = {
//     init: number
// }

// export default function StateBasic({ init }: props) {
//     // {init}は分割代入(props.initではなくinitだけで使えるようになる)

//     const [count, setCount] = useState(init);
//     // const [状態,状態を更新する関数] = useState(初期値);

//     const handleClick = () => setCount(count +1);

//     return (
//         <>
//         <button onClick = {handleClick}>カウント</button>
//          {/* クリックされたらhandleClickを呼ぶ */}
//         <p>{count}回クリックされました</p>
//         </>
//     )
// }



// ・Props (init)
// 親コンポーネント（App）から子コンポーネント（StateBasic）へ渡す値。
// 子コンポーネントでは基本的に変更しない
// この例では、Stateの初期値を決めるために使っている

// ・State (count)
// StateBasicの中だけで管理される値。
// setCountを使って更新できる
// 更新されると、Reactが自動で再描画して画面の表示も変わる








// -11- State値更新のための２つの構文
import { useState } from "react";


export default function StateBasic() {
    // {init}は分割代入(props.initではなくinitだけで使えるようになる)

    const [count, setCount] = useState(0);
    // const [状態,状態を更新する関数] = useState(初期値);

    const handleClick = () => setCount(count => count + 1);

    const handleClick2 = () => setCount(count => count + 1);

    return (
        <>
        <button onClick = {handleClick}>カウント</button>
        <button onClick={handleClick2}>カウント2</button>
         {/* クリックされたらhandleClickを呼ぶ */}
        <p>{count}回クリックされました</p>
        </>
    )
}
