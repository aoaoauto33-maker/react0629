// 4.4 特定の値の「遅延バージョン」を生成する(useDeferredValue)
import { useDeferredValue, useState } from "react";

export default function HookDeferred() {
    const [text, setText] = useState('');
    // 変数textの遅延バージョンを生成
    const deferText = useDeferredValue(text);
    // テキストボックスを変更した時に、text/deferText双方をログ表示
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        // そのままStateに値を入れただけだと次の再レンダリングまで反映されない
        console.log(text, deferText);
        // deferTextは遅れて情報を持ってくる
        // ゆっくり入力した場合はTextとdeferTextは一致する
        // 高速で入力した場合は、deferTextには最新の情報が入らない
    };

    return (
        <>
            <input type="text"
                value={text}
                onChange={handleChange}
            />
            {[...Array(10000)].map((e, index) => <p key={index}>{deferText}</p>)}
        </>
    );
}