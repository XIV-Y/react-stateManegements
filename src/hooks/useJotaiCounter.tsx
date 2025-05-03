import { atom, useAtom } from "jotai";

const countAtom = atom<number>(0);

export function useJotaiCounter(initialValue: number = 0) {
  const initialCountAtom = atom(initialValue);

  const derivedCountAtom = atom(
    (get) => {
      const currentCount = get(countAtom);
      return currentCount === 0 ? get(initialCountAtom) : currentCount;
    },
    (_, set, newValue: number) => {
      set(countAtom, newValue);
    }
  );

  const [count, setCount] = useAtom(derivedCountAtom);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  const incrementBy = (value: number) => setCount(count + value);

  return {
    count,
    increment,
    decrement,
    reset,
    incrementBy,
    setCount,
  };
}
