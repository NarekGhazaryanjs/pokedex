import React, { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: (e?: Event) => void
) => {
  const handleClick = (e: Event) => {
    const isOutsideTarget =
      ref.current && !ref.current.contains(e.target as Node);

    if (isOutsideTarget) {
      callback(e);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, {
      passive: true,
    });

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
