import styles from './ArtistInfo.module.css'
import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";

export function ArtistInfo() {
  const { user, getArtistInfo, artist, editArtist } = useContext(AuthContext);
  const [name, setName] = useState(artist.name)
  const [style, setStyle] = useState(artist.style)
  const [description, setDescription] = useState(artist.description)
  const [contactInfo, setContactInfo] = useState(artist.contactInfo)
  const [location, setLocation] = useState(artist.location)
  const [edit, setEdit] = useState(false)

  const handleEdit = () => {
    setEdit((previousValue) => {
      return !previousValue
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    editArtist(name, location, style, description, contactInfo, user._id)
    handleEdit()
  }

  const handleCancel = () => {
    handleEdit()
  }

  return (
    <div>
    {!edit ? (
     <div>
        <h3>{artist.name}</h3>
        <h5>{artist.location}</h5>
        <p>{artist.style}</p>
        <p>{artist.description}</p>
        <p>{artist.contactInfo}</p>
        <button onClick={handleEdit}>Edit info</button>
      </div> ) : (
      <div className={styles.profileForm}>
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
          <label htmlFor="location">Where are you located?</label>
          <input
            id="location"
            type="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <label htmlFor="description">Who's in the band?</label>
          <input
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <label htmlFor="contactInfo">How can venues contact you?</label>
          <input
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => {
              setContactInfo(e.target.value);
            }}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
      </div>
      )
      }
    </div>
  )
}