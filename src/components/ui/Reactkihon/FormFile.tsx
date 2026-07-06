// -4.7- 入力要素に応じたフォームの実装 -ファイル入力ボックス-
import { useRef } from "react";
// useRefは箱を作る
// Reactで管理しない？あんまり使わない？Uncontrolled Input

export default function FormFile(){
    const file = useRef<HTMLInputElement>(null);
    // あとで選択するので初期値はnullで


    function show (){
        if(!file.current) return;
        // 安全対策 ユーザからファイル選択の入力があったのか？なかったのか？を判断
        const currentFiles = file.current.files;
        if(!currentFiles) return;
        // ファイル一覧を持ってきて、そこから何か入力されたか？されなかったか？を判断
        for(const currentFile of currentFiles){
            console.log(`ファイル名: ${currentFile.name}`);
            console.log(`種類: ${currentFile.type}`);
            console.log(`サイズ: ${currentFile.size}`);
        }
    }
    return(
        <form>
            <input type="file" ref={file} multiple />
            {/* ファイル選択ボタン useRefから持ってきている */}
            <button type="button" onClick={show}>送信</button>
        </form>
    )
}