// クイズ終了後の結果を表示するコンポーネント
import type { Question } from "../types";

type Props = {
  score: number;
  total: number;
  elapsedTime: number;
  wrongQuestions: Question[];
  onRestart: () => void;
};

export default function ResultScreen({ score, total, elapsedTime, wrongQuestions, onRestart }: Props) {
  const accuracy = total === 0 ? 0 : Math.round((score / total) * 100);
  // Math.round() = 四捨五入する関数

  return (
    <div>
      <h2>結果</h2>
      <p>正答数：{score} / {total}</p>
      <p>正答率：{accuracy}%</p>
      <p>所要時間：{(elapsedTime / 1000).toFixed(1)}秒</p>
      {/* ミリ秒で保存されている時間を、秒に変換して小数1桁で表示する */}
      {/* 1秒 = 1000ミリ秒なので1000で割る */}
      {/* toFixed()は小数点第何位まで表示するか決められる toFixed(1) = 小数点第1位まで表示 */}
      <hr />

      <h3>復習リスト</h3>
      {wrongQuestions.length === 0 ? (
        <p>全問正解です！</p>
      ) : (
        <ul>
          {wrongQuestions.map((question) => (
            <li key={question.id}>
              <strong>{question.text}</strong>
              {/* <strong> = 太字 */}
              <p>{question.explanation}</p>
            </li>
          ))}
        </ul>
      )}

      <button onClick={onRestart}>もう一度</button>
    </div>
  );
}