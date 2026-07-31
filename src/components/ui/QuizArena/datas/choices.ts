// src/components/ui/QuizArena/datas/choices.ts
import type { Choice } from "../types";


export const choices: Choice[] = [
  {
    id: crypto.randomUUID(),
    label: "配列"
  },
  {
    id: crypto.randomUUID(),
    label: "オブジェクト"
  },
  {
    id: crypto.randomUUID(),
    label: "関数"
  },
  {
    id: crypto.randomUUID(),
    label: "文字列"
  }
];