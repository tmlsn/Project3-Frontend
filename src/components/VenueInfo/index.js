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

  const handleSave = () => {
    const id = user._id
    editVenue(name, location, description, contactInfo, capacity, id)
    handleEdit()
    getVenueInfo()
  }  

  return (
    <div>
    {!edit ? (
      <div>
        <h3>{venue.name}</h3>
        <h5>{venue.location}</h5>
        <p>{venue.description}</p>
        <p>Max capacity: {venue.capacity}</p>
        <p>Contact info: {venue.contactInfo}</p>
        <button onClick={handleEdit}>Edit info</button>
      </div> ) : (
        <div>
          <label htmlFor="name">What's the name of your venue?</label>
          <input
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
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
          <label htmlFor="location">Where's the venue located</label>
          <input
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <label htmlFor="contactInfo">How can artists contact you?</label>
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
          <button onClick={handleSave}>Save</button>
        </div>
      )
    }
    </div>
    
  )
}


