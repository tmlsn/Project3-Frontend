import styles from './Profile.module.css'
import { Navbar } from '../../components/Navbar';
import { AddPost } from '../../components/AddPost';
import { ProfileInfo } from '../../components';

export function Profile() {
    return (
    <div>
      <Navbar />
      <ProfileInfo />
    </div>
    )
  }