import styles from './VenueInfo.module.css'
import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";

export function VenueInfo() {
  const { user, getVenueInfo, venue, editVenue } = useContext(AuthContext);
  const [name, setName] = useState(venue.name)
  const [location, setLocation] = useState(venue.location)
  const [description, setDescription] = useState(venue.description)
  const [contactInfo, setContactInfo] = useState(venue.contactInfo)
  const [capacity, setCapacity] = useState(venue.capacity)
  const [edit, setEdit] = useState(false)

  const handleEdit = () => {
    setEdit((previousValue) => {
      return !previousValue
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    const id = user._id
    editVenue(name, location, description, contactInfo, capacity, id)
    handleEdit()
  }  

  const handleCancel = () => {
    handleEdit()
  }

  return (
    <div>
    {!edit ? (
      <div className={styles.infoContainer}>  
        <h3>{venue.name}</h3>
        <h5>{venue.location}</h5>
        <p>{venue.description}</p>
        <p>Capacity: {venue.capacity}</p>
        <p>{venue.contactInfo}</p>
        <button onClick={handleEdit}>Edit info</button>
      </div> ) : (
      <div className={styles.outsideContainer}>
        <div className={styles.sdContainer}>
          <div className={styles.formContainer}>
            <form className={styles.profileForm}>
              <label htmlFor="name">What's the name of your venue?</label>
              <input
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
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
              <label htmlFor="location">Where are you located</label>
              <input
                id="location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
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
              <div className={styles.buttonsContainer}>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSave}>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      )
    }
    </div>
    
  )
}


