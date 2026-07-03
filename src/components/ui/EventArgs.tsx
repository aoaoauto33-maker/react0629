// // -16- イベントハンドラーに任意の引数を渡す
// // Reactがイベント発生時に自動で渡してくれるイベントオブジェクト
// import type React from "react";

// export default function EventArgs() {
//     const current = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
//         const d = new Date();
//         switch(type) {
//             case 'date':
//                 //　下のhtmlのcurretの引数の中でtypeを決めている
//                 console.log(`${e.currentTarget.id}: ${d.toLocaleDateString()}`);
//                 break;
//             case 'time':
//                 console.log(`${e.currentTarget.id}: ${d.toLocaleTimeString()}`);
//                 break;
//             default:
//                 // default = else
//                 console.log(`${e.currentTarget.id}: ${d.toLocaleString()}`);
//                 break;
//         }
//     };
//     return (
//         <div>
//             <button id='dt' onClick={e => current(e, 'datetime')}>現在日時</button>
//             {/* onClickがイベント */}
//             {/* React.MouseEvent~は押したら自動的に貰えるものだけど、今回は明示している */}
//             {/* 任意の引数を受け取るときは、e => と書く必要がある */}
//             {/* 任意の引数とはtype:stringのこと */}
//             <button id='date' onClick={e => current(e, 'date')}>現在日付</button>
//             <button id='time' onClick={e => current(e, 'time')}>現在時刻</button>
//         </div>
//     );
// }