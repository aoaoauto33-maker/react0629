import { HookContextChildGrand } from "./HookContextChildGrand";

export function HookContextChild() {
    return (
        <div id="c_child">
            <HookContextChildGrand />
        </div>
    );
}
// 子は何も受け渡ししていない
