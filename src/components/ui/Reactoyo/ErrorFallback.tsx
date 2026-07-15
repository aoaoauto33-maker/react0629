// -6.4- 代替コンテンツをコンポーネントとして切り出す
// -6.5- イベントハンドラーからの例外をErrorBoundaryで処理する
import type { FallbackProps } from "react-error-boundary";

function toErrorMessage(err: unknown): string{
    if(err instanceof Error) return err.message;
    if (typeof err === "string") return err;
    try {
      return JSON.stringify(err);
    } catch {
      return String(err);
    }
}

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <div>
            <h4>以下のエラーが発生しました。</h4>
                <p>{toErrorMessage(error)}</p>
                <button type="button" onClick={resetErrorBoundary}>
                    Retry
                </button>
        </div>
    );
}