// // -4.3- motionrepeat
import { motion } from "motion/react";

export default function MotionRepeat(){
    return(
        <motion.img
        src="src/assets/vite.svg"
        alt="vite.svg"
        animate={{rotate: 180}} //+1に見えるのはanimate分でプラスされてるだけ
        transition={{
            duration: 1, //1秒
            repeat: 5, //何回
            repeatType: 'mirror', //回し方
            ease: 'easeOut'
        }}
        />
    );
}