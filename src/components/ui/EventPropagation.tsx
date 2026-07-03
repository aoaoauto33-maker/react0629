// -18- イベント伝播
export default function EventPropagation() {
    const handleParent = () => alert('#PARENT run');
    const handleMy = () => alert('#MY run');
    const handleChild = () => alert('#CHILD run');

    return (
        <div id="parent" onClick={handleParent}>
            親要素
            <div id="my" onClick={handleMy}>
                現在要素
                <a id="child" href="https://wings.msn.to" onClick={handleChild}>
                    子要素
                </a>
                {/* 子要素から上の階層のイベントに移っていく */}
            </div>
        </div>
    );
}





// // -19- イベント伝播
// export default function EventPropagation() {
//     const handleParent = () => alert('#PARENT run');
//     const handleMy = () => alert('#MY run');
//     const handleChild = (e: React.MouseEvent<HTMLAnchorElement>
//     ) => {
//         e.stopPropagation();
//         // これを使うとイベント伝播しない
//         alert('#CHILD run');
//     };

//     return (
//         <div id="parent" onClick={handleParent}>
//             親要素
//             <div id="my" onClick={handleMy}>
//                 現在要素
//                 <a id="child" href="https://wings.msn.to" onClick={handleChild}>
//                     子要素
//                 </a>
//                 {/* 子要素から上の階層のイベントに移っていく */}
//             </div>
//         </div>
//     );
// }