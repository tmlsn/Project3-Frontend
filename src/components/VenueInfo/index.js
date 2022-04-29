import styles from './VenueInfo.module.css'
import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";

export function VenueInfo() {
  const { user, getVenueInfo, venue } = useContext(AuthContext);
  const [name, setName] = useState(venue.name)
  const [location, setLocation] = useState(venue.location)
  const [description, setDescription] = useState(venue.description)
  const [contactInfo, setContactInfo] = useState(venue.contactInfo)
  const [capacity, setCapacity] = useState(venue.capacity)

  useEffect(() => {
    getVenueInfo(user._id)
  },[])

  return (
    <div>
    {venue && 
      <div>
        <h3>{venue.name}</h3>
        <h5>{venue.location}</h5>
        <p>{venue.description}</p>
        <p>Max capacity: {venue.capacity}</p>
        <p>Contact info: {venue.contactInfo}</p>
      </div>  
    }
    </div>
    
  )
}


