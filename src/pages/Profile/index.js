import styles from './Profile.module.css'
import { Navbar } from '../../components/Navbar';
import { AddPost } from '../../components/AddPost';
import { ProfileInfo } from '../../components';
import { AllArtists } from '../../components/AllArtists';
import { AllVenues } from '../../components/AllVenues';

export function Profile() {
    return (
    <div>
      <Navbar />
      <ProfileInfo />
    </div>
    )
  }