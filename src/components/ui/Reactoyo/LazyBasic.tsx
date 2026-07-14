// React応用
// // -1- LazyとSuspense
import { Suspense, lazy } from "react";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
// sleep関数はnumber型の引数を受け取ってPromiseを返す
const LazyButton = lazy(() => sleep(2000).then(() => import ('./LazyButton')) );
// lazyの引数はアロー関数(sleep(2秒)後にLazyButtonが実行される)
// 非同期処理の場合は、待ち時間に画面が表示されない
export default function LazyBasic() {
    return(
        <Suspense fallback={<p>nowloading...</p>}>
            <LazyButton />
        </Suspense>
    )
}