// choices.tsは初期データを入れておくためだけのファイル
// src/components/ui/QuizArena/datas/choices.ts

import type { Choice } from "../types";

export const reactChoices: Choice[] = [
  {
    id: crypto.randomUUID(),
    label: "フォーム送信時のローディング状態やエラーを自動管理する",
  },
  {
    id: crypto.randomUUID(),
    label: "非同期処理の完了を待たずに、成功したと仮定して即座にUIを更新する",
  },
  {
    id: crypto.randomUUID(),
    label: "特定のStateをWebブラウザーのストレージに永続化する",
  },
  {
    id: crypto.randomUUID(),
    label: "優先順位の低いState更新をトランジションとしてマークし、画面のフリーズを防ぐ",
  },
];

export const reactChoices2: Choice[] = [
  {
    id: crypto.randomUUID(),
    label: "memo",
  },
  {
    id: crypto.randomUUID(),
    label: "useMemo",
  },
  {
    id: crypto.randomUUID(),
    label: "useCallback",
  },
  {
    id: crypto.randomUUID(),
    label: "useDeferredValue",
  },
];

export const reactChoices3: Choice[] = [
  {
    id: crypto.randomUUID(),
    label: "useEffect",
  },
  {
    id: crypto.randomUUID(),
    label: "useState",
  },
  {
    id: crypto.randomUUID(),
    label: "useRef",
  },
  {
    id: crypto.randomUUID(),
    label: "useContext",
  },
];


export const jsChoices: Choice[] = [
  {
    id: crypto.randomUUID(),
    label: "var",
  },
  {
    id: crypto.randomUUID(),
    label: "let",
  },
  {
    id: crypto.randomUUID(),
    label: "const",
  },
  {
    id: crypto.randomUUID(),
    label: "function",
  },
];


export const jsChoices2: Choice[] = [
  {
    id: crypto.randomUUID(),
    label: "=",
  },
  {
    id: crypto.randomUUID(),
    label: "==",
  },
  {
    id: crypto.randomUUID(),
    label: "===",
  },
  {
    id: crypto.randomUUID(),
    label: "!=",
  },
];


export const jsChoices3: Choice[] = [
  {
    id: crypto.randomUUID(),
    label: "push()",
  },
  {
    id: crypto.randomUUID(),
    label: "pop()",
  },
  {
    id: crypto.randomUUID(),
    label: "shift()",
  },
  {
    id: crypto.randomUUID(),
    label: "unshift()",
  },
];


export const tsChoices: Choice[] = [
  {
    id: crypto.randomUUID(),
    label: 'let name: String = "太郎";',
  },
  {
    id: crypto.randomUUID(),
    label: 'let name: string = "太郎";',
  },
  {
    id: crypto.randomUUID(),
    label: 'let name = string("太郎");',
  },
  {
    id: crypto.randomUUID(),
    label: 'string let name = "太郎";',
  },
];


export const tsChoices2: Choice[] = [
  {
    id: crypto.randomUUID(),
    label: "all",
  },
  {
    id: crypto.randomUUID(),
    label: "unknown",
  },
  {
    id: crypto.randomUUID(),
    label: "void",
  },
  {
    id: crypto.randomUUID(),
    label: "any",
  },
];