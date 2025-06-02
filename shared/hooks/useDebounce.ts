// hooks/useDebounce.ts
import { useEffect, useState } from 'react';

/**
 * Хук для задержки обновления значения (debounce).
 * Возвращает значение только после того, как пользователь перестал вводить данные в течение заданной задержки.
 *
 * @param value - значение, которое нужно "дебаунсить"
 * @param delay - задержка в миллисекундах (по умолчанию 500мс)
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
