// src/components/ui/QuizArena/components/QuestionItem.tsx
import type { Question} from "../types";

type Props={
question:Question;
}

export default function QuestionItem({question}:Props){
return (
  <div>
    <p>{question.text}</p>
    <ul>{question.choices.map(choice=>(
        <li key={choice.id}>
            {choice.label}
        </li>
        ))
    }
    </ul>
    <p>カテゴリ:{question.category}</p>
  </div>
);
}