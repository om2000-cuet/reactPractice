import { useEffect } from "react";
import Grand from "./Grand";
function Child() {
  useEffect(() => console.log("i am child"), []);

  return (
    <div style={{ border: "2px solid green" }}>
      i am child
      <Grand />
    </div>
  );
}
export default Child;
