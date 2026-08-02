// クイズ画面の中で今どの画面を表示するべきかをコントロールするコンポーネント
import { useReducer } from "react";
import type { Question } from "../types";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";

// 画面遷移を管理する型(開始前、回答中、回答結果、最終結果)
type Status = "idle" | "playing" | "answered" | "finished";

// 画面やクイズの状態を一括管理するstateの型
type State = {
  status: Status;
  questions: Question[];
  currentIndex: number;
  score: number;
  selectedChoiceId?: string;
  isCorrect?: boolean;
  wrongQuestions: Question[];
  startTime: number;
  elapsedTime: number;
};

// reducerに渡すactionの型
type Action =
  | { type: "START"; payload: Question[] }
  | { type: "SELECT"; payload: string }
  | { type: "TIMEOUT" }
  | { type: "NEXT" }
  | { type: "RESTART" };

 // stateの初期値
const initialState: State = {
  status: "idle",
  questions: [],
  currentIndex: 0,
  score: 0,
  selectedChoiceId: undefined,
  isCorrect: undefined,
  wrongQuestions: [],
  startTime: 0,
  elapsedTime: 0,
};

function reducer(state: State, action: Action): State {
    // Reducer = Actionを受け取って、新しいStateを返す関数
  switch (action.type) {
    // STARTを押すと必ずこの処理が入る(statusがplayingになるので強制的にQuestionScreenへ)
    case "START":
      return {
        ...initialState,
        status: "playing",
        questions: action.payload,
        startTime: Date.now(),
      };

    // ユーザーが選択肢を押した時の処理
    case "SELECT": {
      const current = state.questions[state.currentIndex];
      const isCorrect = current.correctChoiceId === action.payload;
      // ユーザーが選んだ回答(action.payload)が正解か判定している 

      return {
        ...state,
        status: "answered",
        selectedChoiceId: action.payload,
        isCorrect,
        score: isCorrect ? state.score + 1 : state.score,
        wrongQuestions: isCorrect ? state.wrongQuestions : [...state.wrongQuestions, current],
      };
    }

    // 時間切れ処理
    case "TIMEOUT": {
      const current = state.questions[state.currentIndex];

      return {
        ...state,
        status: "answered",
        selectedChoiceId: undefined,
        isCorrect: false,
        wrongQuestions: [...state.wrongQuestions, current],
      };
    }

    // 次の問題へ移る処理
    case "NEXT": {
      const nextIndex = state.currentIndex + 1;

     // 最後の問題だったら結果画面(ResultScreen)に遷移
      if (nextIndex >= state.questions.length) {
        return {
          ...state,
          status: "finished",
          elapsedTime: Date.now() - state.startTime,
        };
      }
     // esle
      return {
        ...state,
        status: "playing",
        currentIndex: nextIndex,   /* 実際に問題を切り替えている部分 */
        selectedChoiceId: undefined,
        isCorrect: undefined,
      };
    }

    case "RESTART":
      return initialState;

    // 安全のためdefaultを設置
    default:
      return state;
  }
}




type Props = {
  questions: Question[];
};

// AppQでState管理しているquestions(問題一覧)を受け取る
export default function QuizRunner({ questions }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // 画面の状態管理と処理をuseReducerで行う(開始前、出題中、回答済み、結果画面など)

  const handleStart = (selectedQuestions: Question[]) => {
    dispatch({ type: "START", payload: selectedQuestions });
  };

  const handleSelect = (choiceId: string) => {
    dispatch({ type: "SELECT", payload: choiceId });
  };

  const handleTimeout = () => {
    dispatch({ type: "TIMEOUT" });
  };

  const handleNext = () => {
    dispatch({ type: "NEXT" });
  };

  const handleRestart = () => {
    dispatch({ type: "RESTART" });
  };

  // statusによって表示する画面を決めたいのでifでreturnを分ける(3パターン)
  if (state.status === "idle") {
    return (
      <StartScreen
        questions={questions}
        onStart={handleStart}
      />
    );
  }

  if (state.status === "playing" || state.status === "answered") {
    return (
      <QuestionScreen
        question={state.questions[state.currentIndex]}
        status={state.status}
        isCorrect={state.isCorrect}
        onSelect={handleSelect}
        onTimeout={handleTimeout}
        onNext={handleNext}
      />
    );
  }

  return (
    <ResultScreen
      score={state.score}
      total={state.questions.length}
      elapsedTime={state.elapsedTime}
      wrongQuestions={state.wrongQuestions}
      onRestart={handleRestart}
    />
  );
}