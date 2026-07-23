import { useEffect, useRef } from "react";
import MyTextBox from "./MytextBox";

export default function HookRefForward() {
    const text = useRef<HTMLInputElement>(null);
    // 起動時にテキストボックスにフォーカス
    useEffect(() => {
        text.current?.focus();
    }, []);

    return (
        <MyTextBox label="名前" ref={text}/>
    );
}