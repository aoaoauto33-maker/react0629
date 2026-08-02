// 制限時間を1秒ごとに減らし、0になったら親へ知らせる
// Timer => QuestionScreen => QuizRunnerと渡す
import { useEffect, useState } from "react";

type Props = {
  seconds: number;
  onTimeout: () => void;
};

export default function Timer({ seconds, onTimeout }: Props) {
  const [time, setTime] = useState(seconds);

  // タイマーをスタート
  useEffect(() => {
    setTime(seconds);
    // 問題ごとの初期値を入れる必要がある

    const id = setInterval(() => {
     // setInterval = 第二引数の秒数ごとに第一引数を実行する関数
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          // タイマーであるidを止める
          onTimeout();
          // 親に時間切れであることを伝える
          return 0;
        }

        return prev - 1;
      });
    }, 1000);


    // このEffectが終わるときに必ず実行するもの
    return () => {
      clearInterval(id);
      // クリーンアップ関数(次の問題のタイマーと被らないように)
      // ユーザーが答えた後にタイマーを止める処理
      // ifの中のclearInterval(id)は時間切れになった時しか実行されない

    };
  }, [seconds, onTimeout]);
  // Timerはansweredになったら消え、playingになったら新しく作られるため今回の設計上はあまり関係ない
  // 依存配列は２つ作ることができて、どちらかが変わったら実行される仕組み
  
  return <p>⏱ 残り {time}秒</p>;
}