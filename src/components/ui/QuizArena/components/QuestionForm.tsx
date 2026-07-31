// src/components/ui/QuizArena/components/QuestionForm.tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { Question, Category } from "../types";

type FormData = {
 text:string;
 choice1:string;
 choice2:string;
 choice3:string;
 choice4:string;
 correct:number;
 explanation:string;
 timeLimitSec:number;
 category:Category;
};

type Props = {
 onAdd: (question:Question)=>void;
};

const schema = 
yup.object({
 text: yup
   .string()
   .transform(value=>value.trim())
   .required("問題文は必須です。")
   .min(5, "問題文は5文字以上で入力してください。")
   .max(200,"問題文は200文字以内です。"),

 choice1: yup
   .string()
   .required(),
   
 choice2: yup
   .string()
   .required(),

 choice3: yup
   .string()
   .required(),

 choice4: yup
   .string()
   .required(),

 correct: yup
   .number()
   .oneOf([1,2,3,4],"正解を選択してください。")
   .required(),

 explanation: yup
   .string()
   .required()
   .min(10,"解説は10文字以上です。"),

 timeLimitSec: yup
   .number()
   .required()
   .integer()
   .min(5,"制限時間は5秒以上")
   .max(120,"制限時間は120秒以内"),

 category: yup
   .mixed<Category>()
   .oneOf(["JavaScript","TypeScript","React"],"カテゴリを正しく選択してください。")
   .required()
})
// yup.test
.test("duplicate-choice","選択肢が重複しています。",value=>{if(!value)return false;

 const choices=[
  value.choice1,
  value.choice2,
  value.choice3,
  value.choice4
 ];
 return new Set(choices).size===4;
});

export default function QuestionForm({
 onAdd
}:Props){

const {register,handleSubmit,reset,formState:{errors}}=useForm<FormData>({
 resolver:yupResolver(schema),
 defaultValues:{timeLimitSec:30,category:"React"}
});

const submit = (data:FormData)=>{
    const choices=[
        {id:crypto.randomUUID(), label:data.choice1},
        {id:crypto.randomUUID(), label:data.choice2},
        {id:crypto.randomUUID(), label:data.choice3},
        {id:crypto.randomUUID(), label:data.choice4}
];

const question:Question={
 id: crypto.randomUUID(),
 text: data.text, choices,
 correctChoiceId: choices[data.correct-1].id,
 explanation: data.explanation,
 timeLimitSec: data.timeLimitSec,
 category: data.category
};

onAdd(question);
reset();
};

return (
  <form onSubmit={handleSubmit(submit)}>
    <h3>問題文</h3>
    <input {...register("text")}/>
    <p>{errors.text?.message}</p>
    
    <h3>選択肢</h3>
    <input placeholder="選択肢1"{...register("choice1")}/>
    <input placeholder="選択肢2"{...register("choice2")}/>
    <input placeholder="選択肢3"{...register("choice3")}/>
    <input placeholder="選択肢4"{...register("choice4")}/>
    <p>{errors.choice1?.message}{errors.root?.message}</p>
    
    <h3>正解</h3>
    {[1,2,3,4].map(num=>(
        <label key={num}>
            <input type="radio" value={num} {...register("correct")}/>
            {num}
        </label>
    ))
}
    <h3>解説</h3>
    <textarea {...register("explanation")}/>
    <p>{errors.explanation?.message}</p>
    <h3>制限時間</h3>
    <input type="number"{...register("timeLimitSec",{valueAsNumber:true})}/>
    <h3>カテゴリ</h3>
    <select {...register("category")}>
        <option>JavaScript</option>
        <option>TypeScript</option>
        <option>React</option>
    </select>
    <br/>
    <button>登録する</button>
  </form>
);
}