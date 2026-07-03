// -4.1- 入力要素に応じたフォームの実装　-テキストエリア-
import React, { useState, useId } from "react";

export default function FormTextarea() {
    const [form, setForm] = useState({
        comment: `様々なフォーム要素を...`
    });

    const handleForm = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        setForm(prev => ({
            // prev = State
            ...prev,
            [name]: value
            // 変数名をキーにする
        }));
    };

    const show = () => {
        console.log(`コメント: ${form.comment}`);
    }

    const id = useId();

    return (
        <form>
            <label htmlFor={`${id}-comment`}>コメント:</label><br />
            <textarea name="comment" id={`${id}-comment`}
                cols={30} rows={7} value={form.comment}
                onChange={handleForm}></textarea><br />
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}