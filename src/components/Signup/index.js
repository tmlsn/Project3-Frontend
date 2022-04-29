import styles from './Signup.module.css'
import { useState, useContext } from "react";
import { AuthContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from '../Navbar';

export function Signup() {
  const { signup, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [details, setDetails] = useState(false)
  console.log(details)

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(firstName, lastName, email, password, details);
    navigate('/signup-details')
    
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label htmlFor="firstName">First name:</label>
        <input
          id="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          id="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
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
        <button>Sign up</button>
      </form>
    </div>
  );
}
