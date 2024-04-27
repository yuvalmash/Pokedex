import { useRef, useCallback } from "react";

export default function useInfiniteScroll(isLoading, hasNextPage, callback) {
  const observer = useRef(null);

  const lastElement = useCallback(
    (node) => {
      if (isLoading || !hasNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            callback();
          }
        },
        { threshold: 0.5 }
      );
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage, callback]
  );

  return { lastElement };
}
