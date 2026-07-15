// -6.5- イベントハンドラーからの例外をErrorBoundaryで処理できない
// export default function ErrorEvent() {
//     const handleClick = () => {
//         // イベントハンドラーで起きたエラーはErrorBoundaryは捕まえられない
//         throw new Error('An error occurred in MyApp.');
//     };
//     return (
//         <button type="button" onClick={handleClick}>
//             エラー出力
//         </button>
//     );
// }



// 上記では「エラー出力」ボタンをクリックしてもErrorBoundaryで補足されずFallbackComponent属性は利用されない
// 以下のようにuseErrorBoundary関数を利用することでErrorBoundaryを動かす
import { useErrorBoundary } from "react-error-boundary";

export default function ErrorEvent() {
    const { showBoundary } = useErrorBoundary();
    const handleClick = () => {
        try {
            throw new Error('An error occurred in MyApp.');
        } catch(e) {
            // ハンドラー内で発生した例外をErrorBoundaryに引き渡す
            showBoundary(e);
        }
    };
    return (
        <button type="button" onClick={handleClick}>
            エラー出力
        </button>
    );
}