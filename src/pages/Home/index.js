import { Concerts, Navbar, AddPost } from '../../components'
import styles from './Home.module.css'

export function Home() {
  return <div>
    <Navbar />
    Home
    <div className={styles.body}>
    <div className='concertContainer'><Concerts /></div>
    <div className='addPostContainer'><AddPost /></div>
    </div>
  </div>
}