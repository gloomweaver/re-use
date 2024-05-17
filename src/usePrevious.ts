import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T): T | undefined;
export function usePrevious<T>(value: T, initialValue: T): T;
export function usePrevious<T>(value: T, initialValue?: T) {
  const ref = useRef<T | undefined>(initialValue);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
