import { useEffect, useState } from "react";
import { NumberCounterProps } from "./props";

export const NumberCounter = ({ end, duration, startAnimation }: NumberCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = end / ((duration * 1000) / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [end, duration, startAnimation]);

  const formatNumber = (number: number): string => {
    return new Intl.NumberFormat("de-DE").format(number);
  };

  return <>{formatNumber(count)}</>;
};
