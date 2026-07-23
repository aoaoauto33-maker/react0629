// // パターン1: DOM要素そのものに直接アクセスしたいとき
// // ボタンを押すと入力欄が青くなる(フォーカスされる)
// import { useRef } from "react";

// export default function FocusInput(){
//     const inputRef = useRef<HTMLInputElement>(null);
//     const handleClick = () => {
//         inputRef.current?.focus();
//         // inputRef.current? = <input>
//     }; 
//     return(
//         <>
//         <input ref={inputRef} type="text"/>
//         <button onClick={handleClick}>入力欄にフォーカス</button>
//         </>
//     );
// }



// パターン2: 「再描画を起こしたくない値」を保持したいとき
import { useState, useRef } from "react";

export default function ClickCounter() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  const handleStateClick = () => {
    setStateCount(stateCount + 1); // 再描画が起きる
  };

  const handleRefClick = () => {
    refCount.current = refCount.current + 1; // 再描画は起きない
    console.log("refCountの現在値:", refCount.current); // コンソールで確認する
  };

  console.log("コンポーネントが描画されました");

  return (
    <div>
      <p>useState(画面に表示される): {stateCount}</p>
      <p>useRef(画面には反映されない): {refCount.current}</p>
      <button onClick={handleStateClick}>useStateを増やす</button>
      <button onClick={handleRefClick}>useRefを増やす</button>
    </div>
  );
}