import { useEffect, useRef } from "react";

const useDidUpdateEffect = (func: () => unknown, dependencies: unknown[]) => {
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    if (didMountRef.current) {
      func();
    } else {
      didMountRef.current = true;
    }
  }, dependencies);
};

export default useDidUpdateEffect;
