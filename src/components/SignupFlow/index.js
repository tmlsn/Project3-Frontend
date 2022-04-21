import styles from './SignupFlow.module.css'
import { Navbar } from '../Navbar'
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { AuthContext } from "../../context";

export function SignupFlow() {
  const { signupArtist, signupVenue } = useContext(AuthContext);
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

  //variables for venue
  const [venueName, setVenueName] = useState("");
  const [description, setDescription] = useState("");
  const [venueLocation, setVenueLocation] = useState("")
  const [capacity, setCapacity] = useState("")
  
  const handleSubmitArtist = (e) => {
    e.preventDefault()
    signupArtist(name, style, location)
    navigate('/profile')
  }
    
  const handleSubmitVenue = (e) => {
    e.preventDefault()
    signupVenue(venueName, description, venueLocation, capacity)
    navigate('/profile')
  }

  const handleAddMember = (e) => {
    e.preventDefault()
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
          <label htmlFor="location">Where is the band located?</label>
          <input
            id="location"
            type="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <label htmlFor="memberName">Who's in the band?</label>

          <label htmlFor="memberName">Name</label>
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
          <button onClick={handleAddMember}>Add member</button>
          <button>Save</button>
          </form>

        </div> : 
        <div>
          <form onSubmit={handleSubmitVenue} className={styles.profileForm}>
            <label htmlFor="venueName">What's the name of your venue?</label>
            <input
              id="venueName"
              value={venueName}
              onChange={(e) => {
                setVenueName(e.target.value);
              }}
            />
            <label htmlFor="description">What kind of venue are you?</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label htmlFor="venueLocation">Where's the venue located</label>
            <input
              id="venueLocation"
              value={venueLocation}
              onChange={(e) => {
                setVenueLocation(e.target.value);
              }}
            />
            <label htmlFor="capacity">How many people can you host at a time?</label>
            <input
              id="capacity"
              type="number"
              value={capacity}
              onChange={(e) => {
                setCapacity(parseInt(e.target.value));
              }}
            />
            <button>Save</button>
          </form>

        </div>
      }


    </div>
  )
}