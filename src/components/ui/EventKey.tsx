// -15- キーイベントでキーを識別する
import type React from "react";

export default function EventKey() {
    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'q') {
            e.preventDefault();
            // 防いでくれる、イベントをキャンセルしてくれる
            alert('Ctrl + q が押されました');
        }
    };

    return (
        <input type='text' onKeyDown={handleKey} />
    );
}