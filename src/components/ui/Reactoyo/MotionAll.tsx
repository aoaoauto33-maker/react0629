//-4.6- MotionAll MotionConfigで複数の画像を動かそう
import { motion, MotionConfig } from "motion/react";

export default function MotionAll() {
    return (
        <MotionConfig transition={{
            duration: 3,
            type: 'spring',
            bounce: 0, //
        }}>
            <motion.img
                src="src/assets/vite.svg"
                alt="vite.svg"
                animate={{ rotate: 180}}
            />
            <motion.img
                src="src/assets/vite.svg"
                alt="vite.svg"
                initial={{ x: '100vw' }}
                animate={{ x: '0vw' }}
            />
        </MotionConfig>
    );
}