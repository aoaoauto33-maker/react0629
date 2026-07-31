// src/components/ui/QuizArena/components/Timer.tsx

import { useEffect, useState } from "react";

type Props = {
  seconds: number;
  onTimeout: () => void;
};

export default function Timer({ seconds, onTimeout }: Props) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    setTime(seconds);

    const id = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          onTimeout();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [seconds, onTimeout]);

  return <p>⏱ 残り {time}秒</p>;
}