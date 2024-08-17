import { useEffect, useState } from "react";

export const useDebounce = (value: any, ms: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, ms);
    return () => {
      clearTimeout(handler);
    };
  }, [value, ms]);

  return debounceValue;
};
