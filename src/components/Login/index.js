import styles from './Login.module.css'
import { useState, useContext } from "react";
import { AuthContext } from "../../context";
import { Navbar } from '../Navbar';
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/signup-details')
  };

  return (
    <div>
    <Navbar />
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
