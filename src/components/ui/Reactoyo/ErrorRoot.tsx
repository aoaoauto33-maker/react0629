// -6.2- ErrorBoundary
import { ErrorBoundary } from "react-error-boundary";
import ErrorThrow from "./ErrorThrow";

export default function ErrorRoot(){
    return(
        <>
        <h3>Error Boundaryの基本</h3>
        <ErrorBoundary fallback={<div>エラーが発生しました</div>}>
        {/* ErrorBoundaryタグの中でエラーが起きたらfallbackが出力される */}
            <ErrorThrow />
            {/* エラーを呼んでる */}
        </ErrorBoundary>
        </>
    );
}