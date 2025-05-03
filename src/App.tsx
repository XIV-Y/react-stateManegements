import { Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello!</h1>} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
}

export default App;
