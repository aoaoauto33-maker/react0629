// // -6.3- fallbackRender
// import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
// import ErrorRetryThrow from "./ErrorRetryThrow";

// function toErrorMessage(err: unknown): string {
//     if (err instanceof Error) return err.message;
//     if (typeof err === "string") return err;
//     try {
//       return JSON.stringify(err);
//     //   受け取ったデータをjson形式に変える、強制的に文字列に？
//     } catch {
//       return String(err);
//     }
// }

// export default function ErrorRetryRoot() {
//     // エラー時に実行される処理
//     const handleFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
//         return (
//             <div>
//                 <h4>以下のエラーが発生しました。</h4>
//                 <p>{toErrorMessage(error)}</p>
//                 <button type="button" onClick={resetErrorBoundary}>
//                     {/* resetErrorBoundaryはFallbackPropsから持ってきたもので、
//                     自分の配下にあるコンポーネントを再度実行してくれる */}
//                     Retry
//                 </button>
//             </div>
//         );
//     };
//     // リセット時に実行される処理
//     const handleReset = () => console.log('Retry!!');

//     return (
//         <>
//             <h3>Error Boundaryの基本</h3>
//             <ErrorBoundary
//                 onReset={handleReset}
//                 // retryを押すたびにコンソールに出る
//                 fallbackRender={handleFallback}
//                 // エラー時に表示される関数
//             >
//                 <ErrorRetryThrow />
//             </ErrorBoundary>
//         </>
//     );
// }




// // -6.4- 代替コンテンツをコンポーネントとして切り出す
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorRetryThrow from "./ErrorRetryThrow";
// import ErrorFallback from "./ErrorFallback";

// export default function ErrorRetryRoot() {
//     // リセット時に実行される処理
//     const handleReset = () => console.log('Retry!!');

//     return (
//         <>
//             <h3>Error Boundaryの基本</h3>
//             <ErrorBoundary
//                 onReset={handleReset}
//                 FallbackComponent={ErrorFallback}
//             >
//                 <ErrorRetryThrow />
//             </ErrorBoundary>
//         </>
//     );
// }




// -6.5- イベントハンドラーからの例外をErrorBoundaryで処理できない
import { ErrorBoundary } from "react-error-boundary";
import ErrorEvent from "./ErrorEvent";
import ErrorFallback from "./ErrorFallback";

export default function ErrorRetryRoot() {
    // リセット時に実行される処理
    const handleReset = () => console.log('Retry!!');

    return (
        <>
            <h3>Error Boundaryの基本</h3>
            <ErrorBoundary
                onReset={handleReset}
                FallbackComponent={ErrorFallback}
            >
                <ErrorEvent />
            </ErrorBoundary>
        </>
    );
}

