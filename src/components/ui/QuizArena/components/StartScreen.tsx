// 開始前の画面を管理するコンポーネント、データを加工して親に渡す役割
import { useState } from "react";
import type { Question } from "../types";

type Props = {
  questions: Question[];
  onStart: (q: Question[]) => void;
};

export default function StartScreen({ questions, onStart }: Props) {
  const [category, setCategory] = useState("all");
  const [shuffle, setShuffle] = useState(false);

  const start = () => {
    // result = 出題する問題を決める変数
    let result = category === "all"
      ? questions
      : questions.filter((q) => q.category === category);
    // filterは条件に合ったものを配列にして返すので、Reactを選ぶとresult = [React1,React2,React3];になる

    if (shuffle) {
      result = [...result].sort(() => Math.random() - 0.5);
     // [...result] 元の配列を変えないようにスプレッド構文
     // .sort()で順番を変える
     // sortは比較した結果が負ならそのまま、正なら入れ替えるというルールがある
     // 0以上1未満の数がランダムで出て、そこから0.5を引いて正か負かを2つずつ比較していく
    }

    onStart(result);
    // onStart = handleStart
  };

  return (
    <div>
      <h2>開始設定</h2>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">すべて</option>
        <option value="JavaScript">JavaScript</option>
        <option value="TypeScript">TypeScript</option>
        <option value="React">React</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={shuffle}
          onChange={(e) => setShuffle(e.target.checked)}
        />
        シャッフル
      </label>

      <button onClick={start}>START</button>
    </div>
  );
}