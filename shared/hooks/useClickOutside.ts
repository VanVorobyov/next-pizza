import { RefObject, useEffect, useRef } from 'react';
import { off, on } from '../lib/utils';

const defaultEvents = ['mousedown', 'touchstart'];

export const useClickOutside = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);

  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event: E) => {
      const { current: el } = ref;
      el &&
        !el.contains(event.target as Node | null) &&
        savedCallback.current(event);
    };
    for (const eventName of events) {
      on(document, eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};
