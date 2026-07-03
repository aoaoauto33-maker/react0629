// // React基本
// // -1- フォーム管理の基本
// import React, { useState } from 'react';

// export default function StateForm(){
//     const [form, setForm] = useState({
//         name: 'Tom', 
//         age: 30,
//     });
//     // handleForm=イベントハンドラー
//     const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const {name, value} = e.currentTarget;
//         // currentTargetはhtmlの属性を持ってくる
//         // 属性の中のnameとvalueを持ってきている
//         setForm(prev => ({
//             // 新しいStateを返すときに引数が必要(prev)
//             ...prev,
//             // ...コピー
//             // リテラル型だと'Tom'しか入らないから、一度コピーをしてから[name]: valueをやる
//             [name]: value
//             // []をつけることでキーに変数を入れることができる(算出プロパティ)
//             // [name]だったらname、[age]だったらageにだけ変更がかかる
//         }));
//     };
//     const show = () => {
//         console.log(`こんにちは、${form.name} (${form.age}歳)さん`);
//     }
//     return (
//         <form>
//             <div>
//                 <label htmlFor="name">名前: </label>
//                 <input id="name" name="name" type="text"
//                 onChange={handleForm} value={form.name}></input>
//                 {/* onChangeは変えた瞬間に変わるイベント */}
//             </div>
//             <div>
//                 <label htmlFor="age">年齢: </label>
//                 <input id="age" name="age" type="text"
//                 onChange={handleForm} value={form.age}></input>
//             </div>
//             <div>
//                 <button type="button" onClick={show}>送信</button>
//             </div>
//             <p>こんにちは、{form.name}({form.age})さん</p>
//         </form>
//     )
// }





//  -2- useId関数
import React, { useState, useId } from 'react';

export default function StateForm(){
    const [form, setForm] = useState({
        name: 'Tom', 
        age: 30,
    });
    
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        
        setForm(prev => ({
            ...prev,
            
            [name]: value
            // 変数名をキーとして判断
           
        }));
    };
    const show = () => {
        console.log(`こんにちは、${form.name} (${form.age}歳)さん`);
    }

    const id= useId();

    return (
        <form>
            <div>
                <label htmlFor={`${id}-name`}>名前: </label>
                <input id={`${id}-name`} name="name" type="text"
                onChange={handleForm} value={form.name}></input>
            </div>
            <div>
                <label htmlFor={`${id}-age`}>年齢: </label>
                <input id={`${id}-age`} name="age" type="text"
                onChange={handleForm} value={form.age}></input>
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
            <p>こんにちは、{form.name}({form.age})さん</p>
        </form>
    )
}