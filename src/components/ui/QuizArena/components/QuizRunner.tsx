// src/components/ui/QuizArena/components/QuizRunner.tsx
import { useReducer } from "react";
import type { Question } from "../types";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";

type Status = "idle" | "playing" | "answered" | "finished";

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

type Action =
  | { type: "START"; payload: Question[] }
  | { type: "SELECT"; payload: string }
  | { type: "TIMEOUT" }
  | { type: "NEXT" }
  | { type: "RESTART" };

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
  switch (action.type) {
    case "START":
      return {
        ...initialState,
        status: "playing",
        questions: action.payload,
        startTime: Date.now(),
      };

    case "SELECT": {
      const current = state.questions[state.currentIndex];
      const isCorrect = current.correctChoiceId === action.payload;

      return {
        ...state,
        status: "answered",
        selectedChoiceId: action.payload,
        isCorrect,
        score: isCorrect ? state.score + 1 : state.score,
        wrongQuestions: isCorrect ? state.wrongQuestions : [...state.wrongQuestions, current],
      };
    }

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

    case "NEXT": {
      const nextIndex = state.currentIndex + 1;

      if (nextIndex >= state.questions.length) {
        return {
          ...state,
          status: "finished",
          elapsedTime: Date.now() - state.startTime,
        };
      }

      return {
        ...state,
        status: "playing",
        currentIndex: nextIndex,
        selectedChoiceId: undefined,
        isCorrect: undefined,
      };
    }

    case "RESTART":
      return initialState;

    default:
      return state;
  }
}
type Props = {
  questions: Question[];
};

export default function QuizRunner({ questions }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

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