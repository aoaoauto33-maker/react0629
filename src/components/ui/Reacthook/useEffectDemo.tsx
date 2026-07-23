import { useEffect, useState } from "react";

export default function useEffectDemo(){
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timerId = setInterval(() => {
        // setInterval=一定時間ごとに同じ処理を繰り返す
        setCount((c) => c - 1);
    },1000);

    return () => {
        clearInterval(timerId);
        // このコンポーネントが画面からなくなるときにタイマーを修了させる
        // が、このコードだと終了する場面がこない
    };
},[]);
// countが変わるたびに実行 => [count]
// 最初の1回だけやりたい処理 => []
// 再レンダリングのたびに実行 => なにも書かない

  return <div>{count}</div>;
}