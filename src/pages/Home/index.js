import { Concerts, Navbar, AddPost, AllPosts } from '../../components'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import { useContext } from "react";
import styles from './Home.module.css'

export function Home() {
  const { user } = useContext(AuthContext);
  return <div>
    <Navbar />
    <div className={styles.body}>
      {user && <div className={styles.artistsVenuesContainer}>
        <div className={styles.linksContainer}>
          <Link to='/artists' className={styles.avLink}>See artists</Link>
          <Link to='/venues' className={styles.avLink}>See venues</Link>
        </div>
      </div>}
      <div className={styles.addPostContainer}>
        <AddPost />
      </div>
      <div className={styles.allPostsContainer}> 
        <AllPosts/>
      </div>
      <div className={styles.concertsContainer}>
        <Concerts />
      </div>
      
    </div>
  </div>
}