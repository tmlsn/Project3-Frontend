import styles from './ArtistInfo.module.css'
import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";

export function ArtistInfo() {
  const { user, getArtistInfo, artist } = useContext(AuthContext);
  const [name, setName] = useState(artist.name)
  const [style, setStyle] = useState(artist.style)
  const [description, setDescription] = useState(artist.description)
  const [contactInfo, setContactInfo] = useState(artist.contactInfo)
  const [location, setLocation] = useState(artist.location)

  useEffect(() => {
    getArtistInfo(user._id)
  },[])

  return (
    <div>
     {artist && <div>
        <h3>{artist.name}</h3>
        <h5>{artist.location}</h5>
        <p>{artist.style}</p>
        <p>{artist.description}</p>
        <p>{artist.contactInfo}</p>
      </div>}
    </div>
  )
}