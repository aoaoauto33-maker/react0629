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


// -8.useImperativeHandle - 関数コンポーネント配下のメソッドを参照する-
import ParentForm from "./components/ui/Reacthook/ParentForm";

export default function App3() {
  return <ParentForm/>;
}
