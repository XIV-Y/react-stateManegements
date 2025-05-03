import { useReducer } from 'react';

type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'ADD'; payload: number };

const counterReducer = (state: { count: number; }, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'ADD':
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

const useCounter = (count = 0) => {
  const [state, dispatch] = useReducer(counterReducer, { count });

  return {
    state,
    dispatch
  }
};

export default useCounter;
