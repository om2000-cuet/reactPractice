import { useState } from "react";

function State() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h2>total item:{cart.length}</h2>
      <button onClick={() => addToCart("Kola")}>Add kola</button>
      <button onClick={() => addToCart("apple")}>Add Apple</button>
      <button onClick={() => addToCart("mango")}>Add Mango</button>
      {cart.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}
export default State;
