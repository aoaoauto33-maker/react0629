import { createContext } from "react";
// Contextを作るための関数をReactから読み込んでいる

// コンテキストに渡すためのオブジェクトを準備
export type MyAppContextConfig = {
    title: string,
    lang: string,
}

// コンテキストを初期化
const MyAppContext = createContext<MyAppContextConfig | undefined>(undefined);
export default MyAppContext;

// ReactのContextを使って、親コンポーネントのデータを孫コンポーネントまでpropsなしで渡す例