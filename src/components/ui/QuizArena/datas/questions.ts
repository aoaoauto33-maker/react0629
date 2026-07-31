// src/components/ui/QuizArena/datas/questions.ts

import type { Question } from "../types";
import { choices } from "./choices";

const tsChoices = [
  { id: crypto.randomUUID(), label: "interface" },
  { id: crypto.randomUUID(), label: "select" },
  { id: crypto.randomUUID(), label: "style" },
  { id: crypto.randomUUID(), label: "render" },
];

export const questions: Question[] = [
  {
    id: crypto.randomUUID(),
    text: "useState が返すのは？",
    choices,
    correctChoiceId: choices[2].id,
    explanation: "useStateはstateの値と更新関数を含む配列を返します。",
    timeLimitSec: 30,
    category: "React",
  },

  {
    id: crypto.randomUUID(),
    text: "TypeScriptで型を定義するキーワードは？",
    choices: tsChoices,
    correctChoiceId: tsChoices[0].id,
    explanation: "interfaceやtypeを使って型を定義できます。",
    timeLimitSec: 20,
    category: "TypeScript",
  },
];