import styles from './Navbar.module.css'
import { AuthContext } from "../../context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const { signup, login, logout, user } = useContext(AuthContext);
  console.log(user)
  
  return <nav className={styles.navbar}>
    <Link to='/' >Home</Link>
    {!user && <Link to='/signup' >Sign up</Link>}
    {!user && <Link to='/login' >Log in</Link>}
    {user && <><Link to='/profile' >Profile</Link> <Link to='/chat' >Chat</Link> <button onClick={logout}>Log out</button></>}
  </nav>
}