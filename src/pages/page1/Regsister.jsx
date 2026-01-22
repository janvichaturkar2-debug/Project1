import { useState } from "react";  

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [collegename , setCollegename] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    name ==="admin" && email === "admin@gmail.com" && contact === "9876543201" && gender === "female" && collegename === " xyz" ? onRegister()
    : setError("Invalid registration details");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", }}>
      <h2>Register</h2> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="text"
          placeholder="College Name"
          value={collegename}
          onChange={(e) => setCollegename(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>  
  );
}
export default Register;