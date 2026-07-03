// -4.3- 入力要素に応じたフォームの実装 -リストボックス-
import React, { useState, useId} from "react";

export default function FormList(){
    const [form, setForm] = useState<{animal: string[]}> ({
        // 初期値に型を入れる場合は、<>を使う
        animal: ['dog', 'cat']
    });
    const handleFormList = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const values: string[] = Array.from(e.currentTarget.selectedOptions, (opt) => opt.value
        )
        setForm(prev => ({
            ...prev,
            animal: values
        }));
    };
    const show = () => {
        console.log(`好きな動物： ${form.animal.join(",")}`);
        // join=配列の1番目と2番目の間に加える
    }

    const id = useId();
    return(
        <form>
            <label htmlFor={`${id}-animal`}></label><br />
            <select
            name="animal"
            id={`${id}-animal`}
            value={form.animal}
            size={4}
            multiple={true}
            // multiple=コマンドを押しながらクリックすると、複数選択できる
            onChange={handleFormList}
            >
                <option value="dog">いぬ</option>
                <option value="cat">ねこ</option>
                <option value="rabbit">うさぎ</option>
                <option value="fox">きつね</option>
            </select>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}