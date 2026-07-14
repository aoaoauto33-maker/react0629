// // -1- 基本 StateBasic
// import { useState } from 'react'
// import "./App.css"
// import StateBasic from './StateBasic'



// function App(){
//   const [count, _] = useState(0)

//   return(
//   <>
//     <StateBasic init={0} />
//   </>
// )
// }

// export default App








// // -2- 繰り返し
// import './App.css'
// import ForList from './components/ui/ForList'
// import { books } from './datas/books';

// function App() {
//   return (
//     <>
//       <ForList src={books} />
//     </>
//   )
// }

// export default App











// // -3- コンポーネント分離
// import './App.css'
// import ForList from './components/ui/ForList'
// import { books } from './datas/books';

// function App() {
//   return (
//     <>
//       <ForList src={books} />
//     </>
//   )
// }

// export default App







// // -4- リストの絞り込み
// import './App.css'
// import ForFilter from './components/ui/ForFilter'
// import { books } from './datas/books';

// function App() {
//   return (
//     <>
//       <ForFilter items={books} price={3000}/>
//     </>
//   )
// }

// export default App



// -5- if文




// // -6- 即時関数
// // -7- 三項演算子
// import './App.css'
// import ForList from './components/ui/ForList'
// import { books } from './datas/books';

// function App() {
//   return (
//     <>
//       <ForList src={books}/>
//     </>
//   );
// }

// export default App







// // -8- children
// import Panel from "./components/ui/Panel";

// export default function App(){
//   return(
//     <Panel title="お知らせ">
//       <p>これは本文です</p>
//       <button>確認</button>
//     </Panel>
//     // <p>から</button>までがchildren
//   );
// }




// // -9- サンプル3 レイアウト部品として使う
// import Layout from "./components/ui/Layout";

// export default function App(){
//   return(
//     <Layout 
//     header={<h1>ヘッダー</h1>}
//     footer={<small>© 2025</small>}
//     >
//       <p>メインコンテンツ</p>
//     </Layout>
//   );
// }





// // -10- childrenにパラメータを渡す
// // import { useState } from 'react'
// import './App.css'
// import { books } from './datas/books';
// import ListTemplate from './components/ui/ListTemplate';

// function App() {
//   return (
//     <>
//       <div>
//         <ListTemplate src={books}>
//           {(item) => (
//             <>
//               <dt>{item.title}</dt>
//               <dd>{item.price}円</dd>
//             </>
//             // reactNode=html
//           )}
//         </ListTemplate>
//       </div>
//     </>
//   )
// }
// export default App







// // -11- State値更新のための２つの構文 未完成
// import "./App.css"
// import StateBasic from './StateBasic'


// function App(){
//   return(
//   <>
//     <StateBasic />
//   </>
// );
// }

// export default App






// // -12- 子コンポーネントから親コンポーネントへの情報伝達
// // 子コンポーネントから親コンポーネントに対して情報を渡すにはStateを利用する
// import StateParent from './components/ui/StateParent';

// export default function App(){
//   return(
//     <div>
//       <StateParent />
//     </div>

//   );
// }








// // -13- 高度なイベント マウスを動かすと画像が変わる
// import EventMouse from './components/ui/EventMouse';
// export default function App(){
//   return(
// <EventMouse 
//   alt='ロゴ画像'
//   defaultSrc='https://www.web-deli.com/image/linkbanner_l.gif'
//   afterSrc='https://www.web-deli.com/image/home_chara.gif'
// />
//   );
// }







// // -14-  イベントオブジェクト
// import EventMouse from './components/ui/EventMouse';
// import EventObject from './components/ui/EventObject';

// export default function App(){
//   return(
//     <>
//     <EventObject />
//     <EventMouse 
//     alt='ロゴ画像'
//     defaultSrc='https://www.web-deli.com/image/linkbanner_l.gif'
//     afterSrc='https://www.web-deli.com/image/home_chara.gif'
//   />
   
//     </>
//   );
// }





// // -15- キーイベントでキーを識別する
// import EventKey from './components/ui/EventKey';

// export default function App(){
//   return(
  
//     <EventKey />

//   );
// }






// // -16- イベントハンドラーに任意の引数を渡す
// import EventArgs from './components/ui/EventArgs';

// export default function App(){
//   return(
  
//     <EventArgs />

//   );
// }






// // -17- 独自データ属性を利用する
// import EventArgs2 from './components/ui/EventArgs2';

// export default function App(){
//   return(
  
//     <EventArgs2 />

//   );
// }








// // -18- イベント伝播
// // -19- イベント伝播の抑制
// import EventPropagation from './components/ui/EventPropagation';

// export default function App(){
//   return(
  
//     <EventPropagation />

//   );
// }







// // -20-   イベントハンドラーを初回のみ実行
// import EventOnce from './components/ui/EventOnce';

// export default function App(){
//   return(
  
//     <EventOnce />

//   );
// }










// React基本
// // -1- フォーム管理の基本
// import StateForm from './components/ui/Reactkihon/StateForm';

// export default function App(){
//   return(
//     <StateForm />
//   );
// }







// // -2- useId関数
// import StateForm from './components/ui/Reactkihon/StateForm';

// export default function App(){
//   return(
//     <StateForm />
//   );
// }



// -3- 自習





// // -4.1- 入力要素に応じたフォームの実装　-テキストエリア-
// import FormTextarea from './components/ui/Reactkihon/FormTextarea';

// export default function App(){
//   return(
//     <FormTextarea />
//   );
// }




// // -4.2- 入力要素に応じたフォームの実装 -選択ボックス-
// import FormSelect from './components/ui/Reactkihon/FormSelect';

// export default function App(){
//   return(
//     <FormSelect />
//   );
// }





// // -4.3- 入力要素に応じたフォームの実装 -リストボックス-
// import FormList from "./components/ui/Reactkihon/FormList";

// export default function App(){
//   return(
//     <FormList />
//   );
// }





// // ７月６日
// // -4.4- 入力要素に応じたフォームの実装 -ラジオボタン-
// import FormRadio from "./components/ui/Reactkihon/FormRadio";

// export default function App(){
//   return(
//     <FormRadio />
//   );
// }





// // -4.5- 入力要素に応じたフォームの実装 -チェックボックス-
// import FormCheck from "./components/ui/Reactkihon/FormCheck";

// export default function App(){
//   return(
//     <FormCheck />
//   );
// }







// // -4.6- 入力要素に応じたフォームの実装 -チェックボックス複数選択-
// import FormCheckMulti from "./components/ui/Reactkihon/FormCheckMulti";

// export default function App(){
//   return(
//     <FormCheckMulti />
//   );
// }





// // -4.7- 入力要素に応じたフォームの実装 -ファイル入力ボックス-
// import FormFile from "./components/ui/Reactkihon/FormFile";

// export default function App(){
//   return(
//     <FormFile />
//   );
// }





// // -5- 入れ子のStateの場合
// import StateNest from "./components/ui/Reactkihon/StateNest";

// export default function App(){
//   return(
//     <StateNest />
//   );
// }







// // -6.1- 配列の更新 -配列への追加-
// // -6.2- 配列の更新 -配列の更新-
// // -6.3- 配列の更新 -配列の削除-
// // -6.4- 配列の更新 -配列の並び替え-？？？？？？？？？
// import StateTodo from "./components/ui/Reactkihon/StateTodo";

// export default function App(){
//   return(
//     <StateTodo />
//   );
// }






// // -7- RHF -これは従来のReact-
// import FormBasicUseState from "./components/ui/Reactkihon/FormBasicUseState";

// export default function App(){
//   return(
//     <FormBasicUseState />
//   );
// }





// // -7- RHF -React Hook Formの基本-
// import FormBasic from "./components/ui/Reactkihon/FormBasic";

// export default function App(){
//   return(
//     <FormBasic />
//   );
// }







// // Reactおまけ
// // -1- Yup
// import FormYup from "./components/ui/ReactkihonOmake/FormYup";

// export default function App(){
//   return(
//     <FormYup />
//   );
// }




// チーム課題
// import Event_Attendance_Management from "./components/ui/Event_Attendance_Management.tsx"

// export default function App(){
//   return(
//     <Event_Attendance_Management />
//   );
// }







// React応用
// // -1- LazyとSuspense
// import LazyBasic from "./components/ui/Reactoyo/LazyBasic";

// export default function App(){
//   return(
//     <LazyBasic />
//   );
// }






// // -2- Profiler
// import ProfilerBasic from "./components/ui/Reactoyo/ProfilerBasic";

// export default function App(){
//   return(
//     <ProfilerBasic />
//   );
// }




// // -3- cssモジュール
// import ModuleBasic from "./components/ui/Reactoyo/ModuleBasic";

// export default function App(){
//   return(
//     <ModuleBasic />
//   );
//





// // -4- motionBasic
// // -4.4- motionBasicバネ
// // -4.5- スタイルプロパティごとにtransitionを設定する
// import MotionBasic from "./components/ui/Reactoyo/MotionBasic";

// export default function App(){
//   return(
//     <MotionBasic />
//   );
// }


// // -4.1- motionwhile
// import MotionWhile from "./components/ui/Reactoyo/MotionWhile";

// export default function App(){
//   return(
//     <MotionWhile />
//   );
// }


// // -4.2- motionexit
// import MotionExit from "./components/ui/Reactoyo/MotionExit";

// export default function App(){
//   return(
//     <MotionExit />
//   );
// }


// // -4.3- motionrepeat
// import MotionRepeat from "./components/ui/Reactoyo/MotionRepeat";

// export default function App(){
//   return(
//     <MotionRepeat />
//   );
// }


// //-4.6- MotionAll　MotionConfigで複数の画像を動かそう
// import MotionAll from "./components/ui/Reactoyo/MotionAll";

// export default function App(){
//   return(
//     <MotionAll />
//   );
// }





// // -5- variants
// // -5.2- 親子関係にある要素に適用する
// import MotionNestVariants from "./components/ui/Reactoyo/MotionNestVariants";
// import MotionVariants from "./components/ui/Reactoyo/MotionVariants";

// export default function App(){
//   return(
//     <MotionNestVariants />
//   );
// }





// // -5.3- キーフレームによるアニメーション属性
// import MotionFrame from "./components/ui/Reactoyo/MotionFrame";

// export default function App(){
//   return(
//     <MotionFrame />
//   );
// }





// // -6.1- ダイアログの実装
// import PortalBasic from "./components/ui/Reactoyo/PortalBasic";

// export default function App(){
//   return(
//     <>
//     <div id="dialog"></div>
//     <PortalBasic />
//     </>
//   );
// }




// -6.2- ErrorBoundary
import ErrorRoot from "./components/ui/Reactoyo/ErrorRoot";

export default function App(){
  return(
    <ErrorRoot />
  );
}
