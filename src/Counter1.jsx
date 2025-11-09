import { useEffect, useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("i am in counter"), []);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleCount}>Count:{count}</button>
    </div>
  );
}
export default Counter1;
