import { useState } from "react";
function FormTest() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: "", password: "" };
    let isValid = true;
    if (!email.includes("@")) {
      newErrors.email = "must have @";
      isValid = false;
    }
    setErrors(newErrors);
    if (isValid) {
      console.log("Success");
      alert("successful");
    }
  };
  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}> {errors.email}</p>}
        </div>
        <div>
          <label> Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default FormTest;
