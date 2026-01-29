import { useState } from "react";

function Registration({ onRegisterSuccessful }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("All fields are required");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    setMessage("Registration successful ✅");

    setName("");
    setEmail("");
    setPassword("");

    setTimeout(() => {
      onRegisterSuccessful(); // ✅ spelling fixed
    }, 2000);
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Register</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
