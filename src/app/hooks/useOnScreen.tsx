import { RefObject, useEffect, useState } from "react"

export default function useOnScreen(ref: RefObject<HTMLElement>) {

  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const callback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      console.log(
        entry.target,
        entry.isIntersecting
      );
      setIsOnScreen(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(callback);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}