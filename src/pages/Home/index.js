import { Concerts, Navbar, AddPost, AllPosts } from '../../components'
import styles from './Home.module.css'

export function Home() {
  return <div>
    <Navbar />
    <div className={styles.body}>
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