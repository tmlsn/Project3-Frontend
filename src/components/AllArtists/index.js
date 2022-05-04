import styles from './AllArtists.module.css'
import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";

export function AllArtists() {
  const { getAllArtists } = useContext(AuthContext);
  const [artists, setArtists] = useState([])
  
  
  useEffect(() => {
    getAllArtists().then((response) => setArtists(response))
  },[])

  return (
    <div>
      {artists.map((artist) => {
        return(
          <div key={artist.id} className={styles.infoContainer}> 
            <h3>{artist.name}</h3>
            <h5>{artist.location}</h5>
            <p>{artist.style}</p>
            <p>{artist.description}</p>
            <p>{artist.contactInfo}</p>
          </div>
        )
      }) 

      }
    </div>
  )
}