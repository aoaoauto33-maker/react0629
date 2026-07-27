// import type React from "react";

// type MyTextBoxProps = {
//     label: string;
//     ref?: React.Ref<HTMLInputElement>;
// };

// export default function MyTextBox({label, ref}: MyTextBoxProps){
//     return(
//         <label>
//             {label}:
//             <input type="text" size={15} ref={ref} />

//         </label>
//     );
// }






// -8.useImperativeHandle - 関数コンポーネント配下のメソッドを参照する-
import { useImperativeHandle, useRef } from "react";

export interface MyTextBoxHandle{
    focus: () => void;
}
// メソッド定義、リモコンのボタン？
// リモコンにどんなボタンをつけるか決める設計図

type MyTextBoxProps = {
    label: string;
    ref?: React.Ref<MyTextBoxHandle>;
    // 親に公開するリモコンの中の処理を型に、このrefは名前なんでもいい(props)
};


export default function MyTextBox({label, ref}: MyTextBoxProps){
// refは親が渡してきたオブジェクト、親が押したもの
// 親のuseRefと紐づけるもの、propsではない？
// 子供のコンポーネントの中にあるHTMLと紐づける、紐づける役目もある
    const inputRef = useRef<HTMLInputElement>(null);
    // 子だけが知っている情報、inputRef => <input>
    useImperativeHandle(ref, () => {
        return {
            focus(){
                inputRef.current?.focus();
                // こっちのfocusはReactが元から用意されてるもの
            },
        }
    });

    return(
        <label>
            {label}:
            <input type="text" size={15} ref={inputRef} />
            {/* このrefは名前変えちゃダメ、Reactのref属性 */}

        </label>
    );
}