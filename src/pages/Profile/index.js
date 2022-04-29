import styles from './Profile.module.css'
import { Navbar } from '../../components/Navbar';
import { AddPost } from '../../components/AddPost';
import { ProfileInfo } from '../../components';

export function Profile(user) {
    return (
    <>
      <div><Navbar /></div>
      <ProfileInfo />
      <div>this is your profile page</div>
    </>
    )
  }