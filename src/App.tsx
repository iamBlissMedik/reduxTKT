import "./App.css";
import Counter from "./components/Counter";
// store
interface CounterState {
  value: number;
}
interface UserState {
  isSignedIn: boolean;
}
// actions
const increment = { type: "INCREMENT" };
const decrement = { type: "DECREMENT" };
const incrementByAmount = { type: "INCREMENTBYAMOUNT", payload: 10 };
function App() {
  return (
    <div>
      <h2>Redux Tutorial</h2>
      <Counter />
    </div>
  );
}

export default App;
