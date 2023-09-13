import { useState, useEffect } from "react";

type WindowSize = {
  width: number | null;
  height: number | null;
};

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const handleResize = () => {
      const currentWindowSize: WindowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      setWindowSize(currentWindowSize);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
