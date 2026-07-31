// アプリ全体を管理する親コンポーネント
// 作問画面(authoring)とクイズ画面(playing)を切り替えたり、問題一覧を管理する画面
import { useState } from "react";
import { questions as initialQuestions } from "./datas/questions";
import type { Question } from "./types";
import Panel from "./components/Panel";
import QuizAuthoring from "./components/QuizAuthoring";
import QuizRunner from "./components/QuizRunner";

export default function AppQ() {
  const [mode, setMode] = useState<"authoring" | "playing">("authoring");
  // 作問画面かクイズ画面かを保存しておくState(初期値は作問画面)
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  // 問題を保存しておくState(初期値はquestions)

  return (
    <>
      <button onClick={() => setMode("authoring")}>作問モード</button>
      <button onClick={() => setMode("playing")}>プレイモード</button>

      {mode === "authoring" 
      ? (
        <Panel title="問題を作る 🖊">
          <QuizAuthoring questions={questions} setQuestions={setQuestions}/>
        </Panel>
      ) 
      : (
        <Panel title="プレイ">
          <QuizRunner questions={questions} />
        </Panel>
      )}
    </>
  );
}