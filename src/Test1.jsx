import { useState } from "react";
function Test1() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    city: "Dhaka",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="age"
      />
      <p>name:{user.name}</p>
      <p>name:{user.age}</p>
      <p>name:{user.city}</p>
    </div>
  );
}
export default Test1;
