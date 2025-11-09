import { useState } from "react";
import CounterButtons from "./CounterButtons";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1> Main Counter App</h1>
      <h2>Count: {count} </h2>
      <CounterButtons count={count} setCount={setCount} />
      <CounterButtons count={count} setCount={setCount} />
    </div>
  );
}
export default Counter;
