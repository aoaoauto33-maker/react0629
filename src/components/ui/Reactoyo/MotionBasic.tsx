// // -4- motion
// import { motion } from "motion/react";

// export default function MotionBasic(){
//     return(
//         <div>
//             <motion.img     // 画像を動かす
//             src="/vite.svg" // 画像を指定
//             alt="vite.svg"  // 画像が表示されなかったらこの文を表示
//             animate={{rotate: 720, x: 500}} />
//             {/* Motionが提供するprops、横軸xに360度*2回転する、座標から右に500移動 */}
//         </div>
//     );
// }





// // initial(最初の場所を指定したい)
// import { motion } from "motion/react";

// export default function MotionBasic(){
//     return(
//         <div>
//             <motion.img     // 画像を動かす
//             src="src/assets/vite.svg" // 画像を指定
//             alt="vite.svg"  // 画像が表示されなかったらこの文を表示
//             initial={{x: "100vw"}}
//             animate={{x: "0vw"}} />
//             {/* 0vwがゴール */}
//         </div>
//     );
// }






// // -4.4- motionBasicバネ
// // type バネのようなアニメーション
// import { motion } from "motion/react";

// export default function MotionBasic(){
//     return(
//         <div>
//             <motion.img     
//             src="src/assets/vite.svg"
//             alt="vite.svg" 
//             initial={{x: "100vw"}}
//             animate={{x: "0vw"}}
//             transition={{ //動き方
//                 duration: 2, //物理演算優先だから無視されるかも
//                 type: 'spring', //spring行きすぎる、戻る、少し揺れる、停止
//                 damping: 0.5, //減速　減速するのが遅い、小さいほどよく跳ねる
//                 mass: 1.5, //物体の重さ、軽ければよく動く、重ければゆっくり
//                 stiffness: 10,  //バネの強さ、固さ
//             }}/>
//         </div>
//     );
// }







// -4.5- スタイルプロパティごとにtransitionを設定する
import { motion } from "motion/react";

export default function MotionBasic(){
    return(
        <div>
            <motion.img     
            src="src/assets/vite.svg"
            alt="vite.svg" 
            initial={{x: "100vw", y: "50vw"}}
            animate={{x: "0vw", y: "0vw"}}
            transition={{
                default:{
                    duration: 1,
                    ease: 'easeInOut',
                },
                x: {
                type: 'spring', 
                damping: 0.5, 
                mass: 1.5, 
                stiffness: 10, 
                },
                y: {
                type: 'spring', 
                damping: 0.5, 
                mass: 5, 
                stiffness: 10, 
                }
                //y軸も設定して物理演算を操ろう
            }}/>
        </div>
    );
}