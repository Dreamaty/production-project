/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * Hook that allows to delay the execution of function
 * @param callback
 * @param delay - delay in milliseconds
 */
export function useDebounce(
  callback: (...args: any[]) => void,
  delay?: number,
) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
