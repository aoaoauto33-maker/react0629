// -5- variants
import { motion } from "motion/react";
import { useState } from "react";

export default function MotionVariants(){
    const [active, setActive ] = useState(true);
    const panel = {
        active: {
            opacity: 1,
            scale: 1,
        },
        disable: {
            opacity: 0.3,
            scale: 0.8,
        },
    }

    return(
        <>
        <button onClick={() => setActive(act => !act)}>Click</button>
        <motion.div
        variants={panel}
        // あらかじめ作ったアニメーションの設定をvariantsで呼び出す
        animate={active ? "active" : "disable"}
        style={{
            width: "350px",
            height: "200px",
            backgroundColor: "#90ee90",
        }}>
            variantsとは、アニメーション情報を...
        </motion.div>
        </>
    );
}