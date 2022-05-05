import styles from './Navbar.module.css'
import { AiFillHome } from 'react-icons/ai';
import { AuthContext } from "../../context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


export function Navbar() {
  const navigate = useNavigate();
  const { signup, login, logout, user } = useContext(AuthContext);
  
  return <nav className={styles.navbar}>
    <div>
      <Link to='/' className={styles.navbarLink}><AiFillHome/></Link>
    </div>
    <div className={styles.navbarRight}>
      {!user && <Link to='/signup' className={styles.navbarLink}>Sign up</Link>}
      {!user && <Link to='/login' className={styles.navbarLink}>Log in</Link>}
      {user && <><Link to='/profile' className={styles.navbarLink}>Profile</Link> <Link to='/' onClick={logout} className={styles.navbarLink}>Log out</Link></>}
    </div>
  </nav>
}