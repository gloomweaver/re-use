import { useEffect, useRef } from "react";

/**
 * Returns the previous value of the given value.
 * @param value The value to track.
 * @param initialValue The initial value to return if the previous value is not available.
 * @returns The previous value of the given value.
 */
export function usePrevious<T>(value: T): T | undefined;
export function usePrevious<T>(value: T, initialValue: T): T;
export function usePrevious<T>(value: T, initialValue?: T) {
  const ref = useRef<T | undefined>(initialValue);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
