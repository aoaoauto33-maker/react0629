// -5.2- 親子関係にある要素に適用する
import { motion } from "motion/react";
import { books } from "../../../datas/books";

export default function MotionNestVariants() {
    const list = {
        initial: { backgroundColor: '#fff' },
        animate: { backgroundColor: '#90ee90', transition: { duration: 5 } },
    };//listが親
    const item = {
        initial: { x: '100vw', opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 2 } },
    };//itemが子供

    // 親と子の始めるタイミングは変わらないが、終わるタイミングは変わる
    return (
        <motion.ul variants={list}
            initial="initial" animate="animate"
            style={{ border: '1px solid #000', width: '80vw' }}>
                {books.map(b => (
                    <motion.li key={b.isbn} variants={item}
                        style={{ padding: '5px' }}>
                            {b.title} ({b.price}円)
                        </motion.li>
                ))}
            </motion.ul>
    );
}