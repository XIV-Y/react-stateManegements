import useCounter from "../hooks/useCounter";
import { useTheme } from "../hooks/useTheme";

function Counter() {
  const themeContext = useTheme();

  const { state, dispatch } = useCounter();

  return (
    <div>
      <h1>useReducer</h1>

      <div>Mode: {themeContext.darkMode ? "Dark" : "Light"}</div>
      <button onClick={themeContext.toggleTheme}>
        {themeContext.darkMode ? "Dark" : "Light"}
      </button>

      <div>
        <h2>カウント: {state.count}</h2>
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
  );
}

export default Counter;
