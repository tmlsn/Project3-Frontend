import styles from './SignupFlow.module.css'
import { Navbar } from '../Navbar'
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../../context";

export function SignupFlow() {
  const { signupArtist, signupVenue, user, setDetailsToTrue } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isArtist, setIsArtist] = useState(undefined)
  //const [details, setDetails] = useState(false)

  //variables for artist
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [artistDescription, setArtistDescription] = useState("");
  const [artistContactInfo, setArtistContactInfo] = useState("");
  const [location, setLocation] = useState("")

  //variables for venue
  const [venueName, setVenueName] = useState("");
  const [description, setDescription] = useState("");
  const [venueLocation, setVenueLocation] = useState("")
  const [contactInfo, setContactInfo] = useState("")
  const [capacity, setCapacity] = useState("")

  useEffect(() => {
    try {
      console.log('SIGNUP FLOW USER DETAILS',user.details)
      if (user.details === true) navigate('/')      
    } catch (error) { 
      console.log(error)
    }
  },[user])

  
  const handleSubmitArtist = (e) => {
    e.preventDefault()
    signupArtist(name, style, artistDescription, artistContactInfo, location)
    setDetailsToTrue(user._id)
    navigate('/')
  }
    
  const handleSubmitVenue = (e) => {
    e.preventDefault()
    signupVenue(venueName, description, venueLocation, contactInfo, capacity)
    setDetailsToTrue(user._id)
    navigate('/')
  }
  
  return (
    <div>
      <Navbar />
      
      <div className={styles.outsideContainer}>
        <div className={styles.sdContainer}>
          <div className={styles.selectorContainer}>
              <span>I am </span>
              <div className={styles.suFlowSelectors}> 
                <button onClick={() => {setIsArtist(true)}}>artist</button>
                <button onClick={() => {setIsArtist(false)}}>venue </button>
              </div>
          </div>
          <hr/>


          {
            isArtist  ? 
            <div className={styles.formContainer}>
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
              <label htmlFor="artistDescription">Tell us more about you</label>
              <textarea
                id="artistDescription"
                value={artistDescription}
                onChange={(e) => {
                  setArtistDescription(e.target.value);
                }}
              />
              <label htmlFor="location">Where are you located?</label>
              <input
                id="location"
                type="location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <label htmlFor="artistContactInfo">What's your contact info?</label>
              <input
                id="artistContactInfo"
                value={artistContactInfo}
                onChange={(e) => {
                  setArtistContactInfo(e.target.value);
                }}
              />
              <button>Save</button>
              </form>

            </div> : 
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmitVenue} className={styles.profileForm}>
                <label htmlFor="venueName">What's the name of your venue?</label>
                <input
                  id="venueName"
                  value={venueName}
                  onChange={(e) => {
                    setVenueName(e.target.value);
                  }}
                />
                <label htmlFor="description">Tell us more about your space</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <label htmlFor="venueLocation">Where are you located</label>
                <input
                  id="venueLocation"
                  value={venueLocation}
                  onChange={(e) => {
                    setVenueLocation(e.target.value);
                  }}
                />
                <label htmlFor="contactInfo">What's your contact info?</label>
                <input
                  id="contactInfo"
                  value={contactInfo}
                  onChange={(e) => {
                    setContactInfo(e.target.value);
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
      </div>


    </div>
  )
}