import { useEffect } from "react";
function Grand() {
  useEffect(() => console.log("I am grand"), []);
  return <div style={{ border: "2px solid yellow" }}>i am grand</div>;
}
export default Grand;
