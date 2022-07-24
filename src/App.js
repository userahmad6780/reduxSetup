import "./App.css";
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import UserListing from "./screens/UserListing";
import CreateNewUser from "./screens/CreateNewUser";

function App() {
  const disptch = useDispatch();
  let countes = useSelector((state) => state.counter.count);
  const [number, setNumber] = useState(2);

  return (
    <div className="App">
      <h1>React Redux</h1>
      <div>Count: {countes}</div>

      <button onClick={() => disptch(increaseCounter(number))}>
        Increase Count
      </button>

      <button onClick={() => disptch(decreaseCounter())}>Decrease Count</button>
      <UserListing/>
      <CreateNewUser/>
    </div>
  );
}

export default App;
