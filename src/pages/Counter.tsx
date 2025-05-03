import useCounter from "../hooks/useCounter";

function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <h1>useReducer</h1>

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
