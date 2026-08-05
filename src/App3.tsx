// import UseEffectDemo from "./components/ui/Reacthook/useEffectDemo";

// export default function App3() {
//   return <UseEffectDemo />;
// }


// import StateEffect from "./components/ui/Reacthook/StateEffect";

// export default function App3() {
//   return <StateEffect init={0} />;
// }



// import HookTimer from "./components/ui/Reacthook/HookTimer";

// export default function App3() {
//   return <HookTimer init={5}/>;
// }



// import HookEffect from "./components/ui/Reacthook/HookEffect";

// export default function App3() {
//   return <HookEffect init={5}/>;
// }


// // パターン1: DOM要素そのものに直接アクセスしたいとき
// // パターン2: 「再描画を起こしたくない値」を保持したいとき
// import ClickCounter from "./components/ui/Reacthook/FocusInput";
// import FocusInput from "./components/ui/Reacthook/FocusInput";

// export default function App3() {
//   // return <FocusInput/>;
//    return <ClickCounter/>;
// }




// // -6.useRefを利用しない例-
// import HookRef from "./components/ui/Reacthook/HookRef";
// import HookRefNg from "./components/ui/Reacthook/HookRefNg";

// export default function App3() {
//   // return <HookRefNg/>;
//   return <HookRef />
// }




// //  -7.Refをコンポーネント配下の要素にフォワードする-
// import HookRefForward from "./components/ui/Reacthook/HookRefForward";

// export default function App3() {
//   return <HookRefForward/>;
// }


// // -8.useImperativeHandle - 関数コンポーネント配下のメソッドを参照する-
// import ParentForm from "./components/ui/Reacthook/ParentForm";

// export default function App3() {
//   return <ParentForm/>;
// }



// // -9.1コールバック関数をref属性に引き渡す-(コールバックじゃないバージョン)
// // -9.2コールバック関数をref属性に引き渡す-
// import HookCallbackRef from "./components/ui/Reacthook/HookCallbackRef";

// export default function App3() {
//   return <HookCallbackRef />;
// }



// // -10.useReducerフックの基本-
// import HookReducer from "./components/ui/Reacthook/HookReducer";

// export default function App3() {
//   return <HookReducer init={0} />;
// }


// // -11.Reducerを複数のAction型に対応する-
// import HookReducerUp from "./components/ui/Reacthook/HookReducerUp";

// export default function App3() {
//   return <HookReducerUp init={0} />;
// }



// // 課題
// import KadaiReducer from "./components/ui/Kadai/KadaiReducer";

// export default function App3() {
//   return <KadaiReducer />;
// }



// // コンテキストの基本
// import HookContext from "./components/ui/Reacthook/HookContext";

// export default function App3() {
//   return <HookContext />;
// }




// // 1.状態を管理する「Atom」
// // 1.2カウンターにリセット機能を追加
// import JotaiCounter from "./components/ui/ReacthookOyo/JotaiCounter";

// export default function App3() {
//   return <JotaiCounter />;
// }



// // 1.3 既存のAtomの演算/加工結果を返す(派生Atom)
// // 1.4 既存のAtomへの更新コードを定義する
// // 1.補足 Todoリストをストレージに保存する
// import JotaiTodoUp from "./components/ui/ReacthookOyo/JotaiTodo";
// import JotaiTodo from "./components/ui/ReacthookOyo/JotaiTodo";

// export default function App3() {
//   return <JotaiTodoUp />;
// }



// // 2.Atomの値の有効範囲を制限す/Storeで複数のAtom値を束ねる（Store/Provider）
// import JotaiCounter from "./components/ui/ReacthookOyo/JotaiCounter";
// import { Provider, createStore } from "jotai";

// export default function App3() {
//   const store= createStore();
//   return (
//   <>
//     <Provider store={store}>
//       <JotaiCounter />
//     </Provider>
//     <Provider>
//       <JotaiCounter />
//     </Provider>
//     <Provider store={store}>
//       <JotaiCounter />
//     </Provider>
//   </>

//   );
// }




// // 3.1 メモ化のためのサンプル
// // 3.2 関数の結果をメモ化する(useMemo)
// import HookMemo from "./components/ui/ReacthookOyo/HookMemo";

// export default function App3() {
//   return <HookMemo />;
// }



// // 4.1優先順位の低いState更新を区別する(useTransition)
// import HookTransition from "./components/ui/ReacthookOyo/HookTransition";

// export default function App3() {
//   return <HookTransition />;
// }


// 4.4 特定の値の「遅延バージョン」を生成する(useDeferredValue)
import HookDeferred from "./components/ui/ReacthookOyo/HookDeferred";

export default function App3() {
  return <HookDeferred />;
}