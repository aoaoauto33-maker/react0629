// -4.2- motionexit
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function MotionExit() {
    // 表示・非表示を制御するためのState
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? '非表示' : '表示'}
            </button>
            {/* showの値に応じて画像を表示・非表示 */}
            <AnimatePresence>
                {show && (
                    <motion.img
                        src='src/assets/vite.svg'
                        alt="vite.svg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}