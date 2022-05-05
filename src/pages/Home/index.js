import { Concerts, Navbar, AddPost, AllPosts } from '../../components'
import { Link } from "react-router-dom";
import styles from './Home.module.css'

export function Home() {
  return <div>
    <Navbar />
    <div className={styles.body}>
      <div className={styles.artistsVenuesContainer}>
        <div className={styles.linksContainer}>
          <Link to='/artists' className={styles.avLink}>See artists</Link>
          <Link to='/venues' className={styles.avLink}>See venues</Link>
        </div>
      </div>
      <div className={styles.concertsContainer}>
        <Concerts />
      </div>
      <div className={styles.addPostContainer}>
        <AddPost />
      </div>
      <div className={styles.allPostsContainer}> 
        <AllPosts/>
      </div>
    </div>
  </div>
}