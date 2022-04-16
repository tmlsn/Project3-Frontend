import styles from './SignupFlow.module.css'
import { Navbar } from '../Navbar'
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { AuthContext } from "../../context";

export function SignupFlow() {
  const { signupArtist } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isArtist, setIsArtist] = useState(undefined)

  //variables for artist
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [members, setMembers] = useState("");
  const [memberName, setMemberName] = useState("")
  const [singer, setSinger] = useState(false)
  const [instruments, setInstruments] = useState("")
  const [location, setLocation] = useState("")
  
  const handleSubmitArtist = (e) => {
    e.preventDefault()
    signupArtist(name, style, location)
    navigate('/profile')
  }
    
  const handleSubmitVenue = () => {

  }

  return (
    <div>
      <Navbar />
      <p>I am </p>
      <div className={styles.suFlowSelectors}> 
        <button onClick={() => {setIsArtist(true)}}>an artist</button>
        <button onClick={() => {setIsArtist(false)}}>a venue </button>
      </div>

      {
        isArtist ? 
        <div >
          <form onSubmit={handleSubmitArtist} className={styles.profileForm}>
          <label htmlFor="name">What's the name of your band?</label>
          <input
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="style">What kind of music do you play?</label>
          <input
            id="style"
            value={style}
            onChange={(e) => {
              setStyle(e.target.value);
            }}
          />
          <label htmlFor="memberName">Who's in the band?</label>
          <input
            id="memberName"
            value={memberName}
            onChange={(e) => {
              setMemberName(e.target.value);
            }}
          />
          <label htmlFor="singer">Do they do vocals?</label>
          <input
            id="singer"
            value={singer}
            onChange={(e) => {
              setSinger(e.target.value);
            }}
          />
          <label htmlFor="instruments">What instrument(s) do they play?</label>
          <input
            id="instruments"
            value={instruments}
            onChange={(e) => {
              setInstruments(e.target.value);
            }}
          />
          <label htmlFor="location">Where is the band located?</label>
          <input
            id="location"
            type="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <button>Save</button>
          </form>

        </div> : 
        <div>

        </div>
      }


    </div>
  )
}