import styles from './AllVenues.module.css'
import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";

export function AllVenues() {
  const { getAllVenues } = useContext(AuthContext);
  const [venues, setVenues] = useState([])
  
  
  useEffect(() => {
    getAllVenues().then((response) => setVenues(response))
  },[])

  return (
    <div>
      {venues.map((venue) => {
        return(
          <div key={venue.id} className={styles.infoContainer}> 
            <h3>{venue.name}</h3>
            <h5>{venue.location}</h5>
            <p>{venue.description}</p>
            <p>Capacity: {venue.capacity}</p>
            <p>{venue.contactInfo}</p>
          </div>
        )
      }) 
      }
    </div>
  )
}