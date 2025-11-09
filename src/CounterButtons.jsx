function CounterButtons({ count, setCount }) {
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div style={{ margin: "20px", padding: "20px", border: "2px solid blue" }}>
      <h3>Eta child component</h3>
      <p>bortoman count:{count}</p>
      <button onClick={increaseCount}>Barao +1</button>
      <button onClick={decreaseCount}>Komao -1</button>
      <button onClick={resetCount}>Reset Koro</button>
    </div>
  );
}
export default CounterButtons;
