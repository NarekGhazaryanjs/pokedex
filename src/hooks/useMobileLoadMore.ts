import { useState, useEffect } from "react";

import {
  TABLET_SIZE,
  MOBILE_LIMIT_STEP,
  MOBILE_LOAD_MORE_DELAY,
} from "@constants";
import { useWindowSize } from "@hooks";

const useMobileLoadMore = ({
  limit,
  setLimit,
  sortOption,
  typeFilter,
  totalCount,
  searchFilter,
}: {
  limit: number;
  sortOption: string;
  totalCount: number;
  typeFilter: string;
  searchFilter: string;
  setLimit: (newLimit: number) => void;
}): boolean => {
  const [, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const windowSize = useWindowSize();

  const isTabletOrMobile = windowSize.width && windowSize.width <= TABLET_SIZE;

  useEffect(() => {
    if (isTabletOrMobile && limit > MOBILE_LIMIT_STEP) {
      setLimit(MOBILE_LIMIT_STEP);
    }
  }, [typeFilter, searchFilter, sortOption]);

  const extendLimit = () => {
    setLimit(limit + MOBILE_LIMIT_STEP);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (windowSize.height === null || windowSize.width === null) {
        return;
      }

      const totalHeight = Math.ceil(window.scrollY + windowSize.height);
      const shouldFunction =
        totalHeight >= document.body.scrollHeight && limit < totalCount;
      const isMobileOrTablet = isTabletOrMobile;

      if (shouldFunction) {
        if (isMobileOrTablet) {
          setLoading(true);
        }

        const increaseLimit = () => {
          if (!loading && isMobileOrTablet) {
            extendLimit();
          }

          setLoading(false);
        };

        const timeout = setTimeout(increaseLimit, MOBILE_LOAD_MORE_DELAY);

        setTimer(timeout);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setTimer(null);
    };
  }, [windowSize.width, windowSize.height, limit, extendLimit]);

  return loading;
};

export default useMobileLoadMore;
