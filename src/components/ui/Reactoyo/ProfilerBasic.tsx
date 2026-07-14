// -2- Profiler
import { Profiler, type ProfilerOnRenderCallback } from "react";
import HeavyUI from "./HaevyUI";

export default function ProfilerBasic() {
    // パフォーマンス計測用の関数(onRender関数)
    const handleMesure: ProfilerOnRenderCallback = (
        id, 
        phase, 
        actualDuration, 
        baseDuration, 
        startTime, 
        commitTime
    ) => {
        console.log('id: ', id);
        console.log('phase: ', phase);
        console.log('actualDuration: ', actualDuration);
        console.log('baseDuration: ', baseDuration);
        console.log('startTime: ', startTime);
        console.log('commitTime: ', commitTime);
    }

    return (
        <Profiler id="heavy" onRender={handleMesure}>
            <HeavyUI delay={1500} />
            <HeavyUI delay={500} />
            <HeavyUI delay={2000} />
        </Profiler>
    );
}