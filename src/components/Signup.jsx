import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSignup = () => {
    navigate("/", { state: { user: name } });
  };

  return (
    <div className="auth-page">
      <h2>Sign Up Page</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button onClick={handleSignup}>Create Account</button>
    </div>
  );
}

export default Signup;
