import { useEffect } from "react";
import Child from "./Child";

function Parent() {
  useEffect(() => console.log("I am parent"), []);
  return (
    <div style={{ border: "2px solid red" }}>
      I am parent
      <Child />
    </div>
  );
}
export default Parent;
