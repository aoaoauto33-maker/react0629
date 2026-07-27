// // -9.コールバック関数をref属性に引き渡す(コールバックじゃないバージョン)-
// import { useState, useEffect, useRef } from "react";

// export default function HookCallbackRef(){
//     const [show, setShow ] = useState(false);
//     // 住所の表示が最初false

//     const handleClick = () => setShow(!show);
//     // handleClickを押せば住所が出る

//     const address = useRef<HTMLInputElement>(null);
//     // 入力した値を保持しているわけではない

//     useEffect(() => {
//         if(address.current){
//             address.current.focus();

//         }
//     }, [show]);
//     // showの値が変わるたびに実行される

//     return(
//         <>
//         <div>
//             <label htmlFor="name">名前: </label>
//             <input id="name" type="text" />
//         </div>
//          <div>
//             <label htmlFor="email">メールアドレス: </label>
//             <input id="email" type="text" />
//             <button onClick={handleClick}>表示</button>
//         </div>
//         { show &&
//          <div>
//             <label htmlFor="address">住所: </label>
//             <input id="address" type="text" ref={address} />
//         </div>

//         }
//         </>
//     );
// }




// -9.2コールバック関数をref属性に引き渡す-
import { useState } from "react";

export default function HookCallbackRef(){
    const [show, setShow ] = useState(false);
    // 住所の表示が最初false

    const handleClick = () => setShow(!show);
    // handleClickを押せば住所が出る

    const callbackRef = (elem: HTMLInputElement | null ) => elem?.focus();
    // elem(住所の<inpu>)がnullじゃなかったら(表示されてたら)focusを実行してね

    return(
        <>
        <div>
            <label htmlFor="name">名前: </label>
            <input id="name" type="text" />
        </div>
         <div>
            <label htmlFor="email">メールアドレス: </label>
            <input id="email" type="text" />
            <button onClick={handleClick}>表示</button>
        </div>
        { show &&
         <div>
            <label htmlFor="address">住所: </label>
            <input id="address" type="text" ref={callbackRef} />
            {/* refには関数を入れることもできる、いつもは変数だった */}
        </div>

        }
        </>
    );
}
