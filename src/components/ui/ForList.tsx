// // -2- 繰り返し
// export type Item = {
//     isbn: string;
//     title: string;
//     price: number;
//     summary: string;
//     download: boolean;
// };
  
// type ForListProps = {
//     src: Item[];
// };
  
// export default function ForList({ src }: ForListProps) {
//     return (
//         <dl>
//             {src.map((elem) => (
//             // mapでsrcの中身を一個ずつ取り出してる
//             // elem = 本１、 elem = 本２、 elem = 本３
//                 <div key={elem.isbn}>
//                 {/* mapを使うとき、reactにはこれが何番目の本なのかを教える必要がある */}
//                 {/* keyは、他と被らない値にする(idとか) */}
//                     <dt>
//                         <a href="">
//                             {elem.title} ({elem.price}円)
//                         </a>
//                     </dt>
//                     <dd>{elem.summary}</dd>
//                 </div>
//             ))}
//         </dl>
//     );
// }

// // <dl>
// //     <dt>用語</dt>
// //     <dd>説明</dd>
// // </dl>







// // -3- コンポーネント分離
// import ForItem from './ForItem.tsx';

// export type Item = {
//     isbn: string;
//     title: string;
//     price: number;
//     summary: string;
//     download: boolean;
// };
  
// type ForListProps = {
//     src: Item[];
// };

// export default function ForList({ src }: ForListProps) {
//     return (
//         <dl>
//             {src.map((elem) => (
//                 // 配列に対して、何かしらの処理をした後に、新たな配列を返す
//                 <ForItem item={elem} key={elem.isbn} />
//             ))}
//         </dl>
//     );
// }






// // -6- 即時関数
// import ForItemInstantFunction from './ForItemInstantFunction.tsx';

// export type Item = {
//     isbn: string;
//     title: string;
//     price: number;
//     summary: string;
//     download: boolean;
// };

// type ForListProps = {
//     src: Item[];
// };

// export default function ForList({ src }: ForListProps) {
//     return (
//         <dl>
//             {src.map((elem) => (
//                 // 配列に対して、何かしらの処理をした後に、新たな配列を返す
//                 <ForItemInstantFunction item={elem} key={elem.isbn} />
//                 // item,keyはprops、keyは気にしない
//             ))}
//         </dl>
//     );
// }







// -7- 三項演算子
import IfItem2 from './ForItemInstantFunction.tsx';

export type Item = {
    isbn: string;
    title: string;
    price: number;
    summary: string;
    download: boolean;
};

type ForListProps = {
    src: Item[];
};

export default function ForList({ src }: ForListProps) {
    // {src}: ForListPropsは分割代入
    return (
        <dl>
            {src.map((elem) => (
                // 配列に対して、何かしらの処理をした後に、新たな配列を返す
                <IfItem2 item={elem} key={elem.isbn} />
                // item,keyはprops、keyは気にしない
            ))}
        </dl>
    );
}