import { yupResolver } from "@hookform/resolvers/yup";
import React, { useId,useState } from "react";
import { useForm, type FieldErrors, type SubmitErrorHandler, type SubmitHandler,} from "react-hook-form";
import * as yup from "yup";

type Participant = {
  name: string;
  email: string;
  eventName: string;
  status: "attended" | "cancelled";
  // createdAt: string;
};

type Participant1 = Participant & {
  id: number;
};
// Participantにidを入れえたのがParticipant1

// yupは条件をまとめて書いたもの
// .requiredがデータがないときにerrorsに渡して中の文字列を表示する
// .maxは文字数
const schema = yup.object({
  name: yup
    .string()
    .label("名前")
    .required("${label}は必須入力です")
    .max(30, "${label}は${max}文字以内で入力してください"),

  email: yup
    .string()
    .label("メールアドレス")
    .required("${label}は必須入力です")
    .email("${label}の形式が不正です"),

  eventName: yup
    .string()
    .label("イベント参加名")
    .required('${label}は必須入力です')
    .max(10, "${label}は${max}文字以内で入力してください"),

  status: yup
    .string()
    .label("出席確認")
    .oneOf(["attended", "cancelled"] as const, "${label}してください")
    // oneOfは指定した値しか許可しない
    // as constによってリテラル型として読み込んでる
    .required("${label}は必須入力です"),
});

export default function Event_Attendance_Management() {
  const [maxId,setMaxId] = useState(1);
  const [participants, setParticipants] = useState<Participant1[]>([]);
//const [participants1, setParticipants1] = useState<Participant1[]>([]);
  const [filter, setFilter] = useState("all");

  const defaultValue: Participant = {
    name: "",
    email: "",
    eventName: "",
    status: "attended",
  };

  const { register, handleSubmit, formState: { errors },} = useForm<Participant>({
    defaultValues: defaultValue,
    // バリデーションする前の型(idなし)を入れたい
    resolver: yupResolver(schema),
    // resolver = shemaをもらって、バリデーションしてくれるやつ
    // この初期値はregisterに入ってる
  });

  const onsubmit: SubmitHandler<Participant> = (data) => {
    // onsubmitという関数は、RHFが用意しているSubmitHandlerという型のルールに従う関数
    // その関数が受け取る引数の型はParticipant型
    console.log(data);
    setParticipants((prev) => [
    // prevは登録した後のデータ、dataはダリデーションを通った登録する前のデータ
    ...prev,
    { ...data, id: maxId },
    ]);
    setMaxId((prev) => prev + 1); // 次のIDのためにカウントアップ
  
  };

  const onerror: SubmitErrorHandler<Participant> = (err: FieldErrors<Participant>) => {
    console.log(err);
  };

  const id = useId();


// 削除
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    setParticipants(participants.filter(item =>{
      return item.id !== Number(e.currentTarget.dataset.id);
    }));
  };


// 出欠変更
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>)=> {
      const id = Number(e.currentTarget.dataset.id);

  setParticipants(prev =>
    prev.map(participant =>
      participant.id === id
        ? {
            ...participant,
            status:participant.status === "attended"
                ? "cancelled"
                : "attended",
          }
        : participant
    )
  );
  };

   

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  };

  const displayParticipants =
    filter === "all"
    ? participants
    // filterがallだったらparticipant全てを表示する
    : participants.filter(item => item.status === filter);
    // handleFilterでsetFilterで値が変わった時、勝手にdisplayParticipantsを変えてくれる
    // item.statusとfilterが一致するものだけ残す


  return(
    <form onSubmit={handleSubmit(onsubmit,onerror)} noValidate>
        <div>
            <label htmlFor={`${id}-name`}>名前：</label><br />
            <input id={`${id}-name`} type="text"
            {...register('name')}
            />
            <div className="error">{errors.name?.message}</div>
        </div>
        <div>
            <label htmlFor={`${id}-email`}>メールアドレス：</label><br />
            <input id={`${id}-email`} type="email"
            {...register('email')}
            />
            <div className="error">{errors.email?.message}</div>
        </div>
        <div>
            <label htmlFor={`${id}-eventName`}>イベント参加名：</label><br />
            <input id={`${id}-eventName`} type="text"
            {...register('eventName')}
            />
            <div className="error">{errors.eventName?.message}</div>
        </div>
        <div>
            <label>出席確認：</label><br />
            <label>
                <input id='attended' type="radio" value="attended"
                {...register('status')}
                />出席
            </label>
            <label>
                <input id='cancelled' type="radio" value="cancelled"
                {...register('status')}
                />欠席
            </label>
            <div className="error">{errors.status?.message}</div>
        </div>
        <div>
            <button type="submit">送信</button>
        </div>
        <label>絞り込み</label>
        <select id={`${id}-filter`} onChange={handleFilter}>
            <option value="all">一覧表示</option>
            <option value="attended">参加者一覧</option>
            <option value="cancelled">欠席者一覧</option>
        </select>
        <ul>
          {displayParticipants.map((participant, index) => (
            <li key={index}>
              名前：{participant.name} /
              メール：{participant.email} /
              イベント名：{participant.eventName} /
              状態：{participant.status === "attended" ? "出席" : "欠席"}

              <button type="button" onClick={handleChange} data-id={participant.id}  data-status={participant.status} >{participant.status === "attended" ? "欠席" : "出席"}</button>
              <button type="button" onClick={handleRemove} data-id={participant.id}>削除</button>
            </li>

          ))}


        </ul>
    </form>
  );
}