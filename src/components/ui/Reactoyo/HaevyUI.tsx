// -2- Profiler
function sleep(delay: number) {
    let start = Date.now();
    while (Date.now() - start < delay);
    // delayの時間より短い間はループ(delay時間中はループ)
    // 非同期ではないので、Reactの描画をブロックする重い処理の再現
}

type HeavyUIProps = {
    delay: number,
}

export default function HeavyUI({delay}: HeavyUIProps) {
    sleep(delay);
    return <p>遅延時間は{delay}ミリ秒</p>;
}