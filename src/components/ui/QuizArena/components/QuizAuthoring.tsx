// src/components/ui/QuizArena/components/QuizAuthoring.tsx
import { useState } from "react";
import type { Question } from "../types";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

type Props = {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
};

export default function QuizAuthoring({questions, setQuestions}:Props){
  const addQuestion = ( question:Question)=>{
    setQuestions(prev=>[...prev, question]);
  };

  return (
    <>
      <QuestionForm onAdd={addQuestion}/>
      <h3>登録済み: {questions.length}問</h3>
      <QuestionList questions={questions}/>
    </>
  );
}