// src/components/ui/QuizArena/components/QuestionList.tsx
import type { Question } from "../types";
import QuestionItem from "./QuestionItem";

type Props={
 questions:Question[];
}

export default function QuestionList({questions}:Props){
return (
   <div>{questions.map(question=>(
     <QuestionItem key={question.id} question={question}/>
     ))
     }
   </div>
 );
}