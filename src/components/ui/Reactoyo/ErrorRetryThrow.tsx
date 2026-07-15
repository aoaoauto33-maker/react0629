// -6.3- fallbackRender
// -6.4- 代替コンテンツをコンポーネントとして切り出す
export default function ErrorRetryThrow() {
    if (Math.random() < 0.6) {
        throw new Error('An error occurred in MyApp.');
    }
    return (
        <p>正しく実行されました</p>
    );
}