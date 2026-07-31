// src/components/ui/QuizArena/components/StartScreen.tsx

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
    let result = category === "all"
      ? questions
      : questions.filter((q) => q.category === category);

    if (shuffle) {
      result = [...result].sort(() => Math.random() - 0.5);
    }

    onStart(result);
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