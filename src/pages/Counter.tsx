import useCounter from "../hooks/useCounter";
import useZustandCounter from "../hooks/useZustandCounter";

import { useTheme } from "../hooks/useTheme";
import { useJotaiCounter } from "../hooks/useJotaiCounter";

function Counter() {
  const themeContext = useTheme();

  const { count, increment, decrement, reset, incrementBy } =
    useJotaiCounter(100);
  // const { count, increment, decrement, reset, incrementBy } =
  //   useZustandCounter();
  const { state, dispatch } = useCounter();

  return (
    <div>
      <div>Mode: {themeContext.darkMode ? "Dark" : "Light"}</div>
      <button onClick={themeContext.toggleTheme}>
        {themeContext.darkMode ? "Dark" : "Light"}
      </button>

      <h1>Counter</h1>

      <div>
        <div>
          <h2>useReducer カウント: {state.count}</h2>
        </div>

        <div>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            増加（+1）
          </button>

          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            減少（-1）
          </button>

          <button onClick={() => dispatch({ type: "RESET" })}>リセット</button>

          <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>
            10増加
          </button>
        </div>
      </div>

      <div>
        <div>
          <h2>Jotai カウント: {count}</h2>
        </div>

        <div>
          <button onClick={increment}>増加（+1）</button>
          <button onClick={decrement}>減少（-1）</button>
          <button onClick={reset}>リセット</button>
          <button onClick={() => incrementBy(10)}>10増加</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
