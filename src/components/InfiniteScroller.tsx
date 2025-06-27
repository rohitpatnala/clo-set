import { useRef, useEffect, ReactNode } from "react";

interface InfiniteScrollerProps {
  hasMore: boolean;
  loadMore: () => void;
  children: ReactNode;
}

export default function InfiniteScroller({
  hasMore,
  loadMore,
  children,
}: InfiniteScrollerProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sentinelRef.current || !hasMore) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <>
      {children}
      <div ref={sentinelRef} />
      {!hasMore && (
        <p className="text-center text-gray-500 mt-4">
          You’ve reached the end!
        </p>
      )}
    </>
  );
}
