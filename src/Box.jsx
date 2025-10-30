import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Box() {
  const fruits = ["apple", "mango", "banana", "pineapple"];
  const Home = () => {
    return <div>I am in Home</div>;
  };
  const About = () => {
    return (
      <div>
        I am in about
        <div className="container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {fruits && fruits.map((item, index) => <li key={index}>{item}</li>)}
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>|<Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Box;
