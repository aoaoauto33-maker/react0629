import { useState } from "react";
import { questions as initialQuestions } from "./datas/questions";
import type { Question } from "./types";
import Panel from "./components/Panel";
import QuizAuthoring from "./components/QuizAuthoring";
import QuizRunner from "./components/QuizRunner";

export default function AppQ() {
  const [mode, setMode] = useState<"authoring" | "playing">("authoring");
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);

  return (
    <>
      <button onClick={() => setMode("authoring")}>作問モード</button>
      <button onClick={() => setMode("playing")}>プレイモード</button>

      {mode === "authoring" ? (
        <Panel title="問題を作る 🖊">
          <QuizAuthoring
            questions={questions}
            setQuestions={setQuestions}
          />
        </Panel>
      ) : (
        <Panel title="プレイ">
          <QuizRunner questions={questions} />
        </Panel>
      )}
    </>
  );
}