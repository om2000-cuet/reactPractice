import useForm from "./useForm";

function SignupForm() {
  const { input, handleChange } = useForm();
  /*
  const [input, setInput] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${input.name} and Pass ${input.email}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={input.name}
          onChange={handleChange}
        />
        <input
          name="email"
          value={input.email}
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SignupForm;
