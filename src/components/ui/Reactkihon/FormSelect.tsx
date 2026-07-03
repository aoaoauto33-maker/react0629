// -4.2- 入力要素に応じたフォームの実装 -選択ボックス-
import React, { useId, useState } from "react";

export default function FormSelect() {
    const [form, setForm] = useState({
        animal: 'dog',
    });
    // 選択ボックスの変更時に入力値をStateに反映
    const handleForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.currentTarget;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const show = () => {
        console.log(`好きな動物: ${form.animal}`);
    }

    const id = useId();
    return (
        <form>
            <label htmlFor={`${id}-animal`}>好きな動物:</label>
            <select name="animal" id={`${id}-animal`}
                value={form.animal} onChange={handleForm}>
                <option value="dog">イヌ</option>
                <option value="cat">ネコ</option>
                <option value="rabbit">ウサギ</option>
                <option value="fox">キツネ</option>
            </select>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}