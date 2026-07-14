// -6.2- ErrorBoundary
export default function ErrorThrow(){
    throw new Error('An error occurred in MyApp');
    // エラーを投げる処理
    
    return(
        <p>正しく実行されました</p>
    );
}