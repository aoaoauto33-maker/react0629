import { use } from "react";
import MyAppContext from "./MyAppContext";

export function HookContextChildGrand() {
    const context = use(MyAppContext);
    // Contextから値を取り出すフック

    if (!context) {
        return <div>No context provided</div>;
    }

    const { title, lang } = context;
    // 分割代入

    return (
        <div id="c_child_grand">
            {title} ({lang})
        </div>
    );
}