import { useState } from "react";

function useForm() {
  const [input, setInput] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  return { input, handleChange };
}

export default useForm;
