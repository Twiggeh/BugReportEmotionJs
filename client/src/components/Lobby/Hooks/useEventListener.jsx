import { useEffect, useRef } from 'react';

const useEventListener = (
  type,
  handler,
  { enabled = true, limiter = { type: 'throttle', duration: 4 } }
) => {
  const handlerRef = useRef(handler);
  const throttler = (func, limit) => {
    let lastFunc,
      lastRan,
      context = this;
    return (...args) => {
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  const debouncer = (func, limit) => {
    let lastCall = 0;
    return (...args) => {
      let context = this;
      let current = new Date().getTime();

      if (current - lastCall < limit) return;

      lastCall = current;
      func.apply(context, args);
    };
  };

  useEffect(() => {
    console.log('RE-created the handler');

    handlerRef.current = (() => {
      switch (limiter.type) {
        case 'throttle':
          return throttler(handler, limiter.duration);
        case 'debounce':
          return debouncer(handler, limiter.duration);
        case 'none':
          return handler;
        default:
          throw new Error(`Wrong limiter (${limiter.type}) supplied`);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('Tried to start ');
    if (!enabled) return;
    console.log('Added eventListener');
    document.addEventListener(type, handlerRef.current);
    return () => {
      document.removeEventListener(type, handlerRef.current);
      console.log('Removed event listener');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);
};

export default useEventListener;
