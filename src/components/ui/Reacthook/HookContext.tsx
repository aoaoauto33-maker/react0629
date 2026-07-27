import { HookContextChild } from "./HookContextChild";
import MyAppContext, { type MyAppContextConfig } from "./MyAppContext";

// コンテキストに渡すためのオブジェクトを準備
const config: MyAppContextConfig = {
    title: 'React入門',
    lang: 'ja-JP',
}

export default function HookContext() {
    return (
        <MyAppContext value={config}>
        {/* これコンポーネントじゃない、ただContextにデータを入れてるだけ */}
            <div id="c_main">
                <HookContextChild />
                {/* これがあることによって孫に共有可能 */}
            </div>
        </MyAppContext>
    );
}