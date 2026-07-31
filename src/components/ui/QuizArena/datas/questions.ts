// questionsはStateで管理されているため、ユーザーが登録した問題文もここに入る
import type { Question } from "../types";
import {
  reactChoices,
  reactChoices2,
  reactChoices3,
  jsChoices,
  jsChoices2,
  jsChoices3,
  tsChoices,
  tsChoices2,
} from "./choices";


export const questions: Question[] = [

  // ---------- React ----------
  {
    id: crypto.randomUUID(),
    text:
      "ReactのフックであるuseTransitionの主な役割・目的として正しいものはどれですか？",
    choices: reactChoices,
    correctChoiceId: reactChoices[3].id,
    explanation:
      "正解は「優先順位の低いState更新をトランジションとしてマークし、画面のフリーズを防ぐ」です。useTransitionは重い更新処理を低優先度として扱い、UIの応答性を維持するために使用します。",
    timeLimitSec: 30,
    category: "React",
  },
  {
    id: crypto.randomUUID(),
    text:
      "Reactにおいて、親コンポーネントが再描画された際に関数そのものが再生成されるのを防ぎ、同一の関数インスタンスをキャッシュするためのフックはどれですか？",
    choices: reactChoices2,
    correctChoiceId: reactChoices2[2].id,
    explanation:
      "正解はuseCallbackです。useCallbackは関数そのものをメモ化します。useMemoは計算結果をキャッシュし、memoはコンポーネントの再描画を制御します。",
    timeLimitSec: 30,
    category: "React",
  },
  {
    id: crypto.randomUUID(),
    text:
      "Reactの関数コンポーネントにおいて、状態(State)を管理し、その値が変更された際に再描画を発生させる基本的なフックはどれですか？",
    choices: reactChoices3,
    correctChoiceId: reactChoices3[1].id,
    explanation:
      "正解はuseStateです。useStateは状態を保持し、更新関数によって値が変化するとReactはコンポーネントを再描画します。",
    timeLimitSec: 30,
    category: "React",
  },


  // ---------- JavaScript ----------
  {
    id: crypto.randomUUID(),
    text:
      "JavaScriptにおいて、一度値を入れた後、別の値を再代入することができない変数を宣言するキーワードはどれですか？",
    choices: jsChoices,
    correctChoiceId: jsChoices[2].id,
    explanation:
      "正解はconstです。constで宣言した変数は再代入できません。letやvarは後から値を変更できます。",
    timeLimitSec: 30,
    category: "JavaScript",
  },
  {
    id: crypto.randomUUID(),
    text:
      "JavaScriptにおいて、値だけでなくデータ型も含めて厳密に等しいか比較する演算子はどれですか？",
    choices: jsChoices2,
    correctChoiceId: jsChoices2[2].id,
    explanation:
      "正解は===です。===は値と型の両方を比較する厳密等価演算子です。",
    timeLimitSec: 30,
    category: "JavaScript",
  },
  {
    id: crypto.randomUUID(),
    text:
      "JavaScriptにおいて、配列の末尾に新しい要素を追加するための組み込みメソッドはどれですか？",
    choices: jsChoices3,
    correctChoiceId: jsChoices3[0].id,
    explanation:
      "正解はpush()です。push()は配列の最後に要素を追加します。",
    timeLimitSec: 30,
    category: "JavaScript",
  },


  // ---------- TypeScript ----------
  {
    id: crypto.randomUUID(),
    text:
      "TypeScriptにおいて、変数に文字列のみを代入できるように型を指定する正しい書き方はどれですか？",
    choices: tsChoices,
    correctChoiceId: tsChoices[1].id,
    explanation:
      "正解はlet name: string = '太郎';です。TypeScriptでは変数名の後ろに:型名を書くことで型注釈を行います。",
    timeLimitSec: 30,
    category: "TypeScript",
  },
  {
    id: crypto.randomUUID(),
    text:
      "TypeScriptにおいて、型チェックを無効化し、どのような型でも代入できるようにする型はどれですか？",
    choices: tsChoices2,
    correctChoiceId: tsChoices2[3].id,
    explanation:
      "正解はanyです。anyを使用すると型チェックが無効化されるため、基本的には使用を避けunknownを利用することが推奨されます。",
    timeLimitSec: 30,
    category: "TypeScript",
  },
];