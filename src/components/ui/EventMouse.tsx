import { useState } from 'react';

type EventMouseProps = {
    defaultSrc: string;
    afterSrc: string;
    alt: string;
}

export default function EventMouse({ defaultSrc, afterSrc, alt }: EventMouseProps) {
    // 現在表示している画像
    const [current, setCurrent] = useState(defaultSrc);
    // onMouseOverイベントハンドラを準備
    const handleEnter = () => setCurrent(afterSrc);
    // onMouseLeaveイベントハンドラを準備
    const handleLeave = () => setCurrent(defaultSrc);
    return (
        <img src={current} alt={alt} onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
    );
}