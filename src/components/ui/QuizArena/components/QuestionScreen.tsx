// 1問分の問題を表示し、ユーザーの回答を受け付ける画面
import type { Question } from "../types";
import Timer from "./Timer";

type Props = {
  question: Question;
  status: "playing" | "answered";
  isCorrect?: boolean;
  onSelect: (choiceId: string) => void;
  onTimeout: () => void;
  onNext: () => void;
};

export default function QuestionScreen({
  question,
  status,
  isCorrect,
  onSelect,
  onTimeout,
  onNext,
}: Props) {
  return (
    <div>
      {/* 出題中だけタイマーを表示 */}
      {status === "playing" && (
        <Timer
          seconds={question.timeLimitSec}
          onTimeout={onTimeout}
        />
      )}

      <h2>{question.text}</h2>
      <p>カテゴリ：{question.category}</p>
      <div>
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onSelect(choice.id)}
            disabled={status === "answered"}
            // disabled = 回答後は押せない
          >
            {choice.label}
          </button>
        ))}
      </div>

      {status === "answered" && (
        <>
          <hr />

          <h3>{isCorrect ? "⭕ 正解！" : "❌ 不正解"}</h3>
          <p>{question.explanation}</p>

          <button onClick={onNext}>
            次へ
          </button>
        </>
      )}
    </div>
  );
}