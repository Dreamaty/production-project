import { useEffect } from 'react';

export function useInitialEffect(
  callback: () => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps?: any[],
) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);
}
