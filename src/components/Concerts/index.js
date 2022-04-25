import styles from './Concerts.module.css'
import { AuthContext } from "../../context";
import { useEffect, useState, useContext } from "react";

export function Concerts() {
  const { getConcerts, concerts, geohash } = useContext(AuthContext);
    useEffect(() => {
      getConcerts(geohash)
    },[])
    console.log(concerts.events)

  return (
    <div>
      <p>Upcoming shows near you</p>
      {concerts.map((concert) => {
        return (
          <div key={concert.id}>
            <p >{concert.name}</p>
            <img src={concert.images[0].url} style={{width: 100}} alt='event' />

          </div>
        )
      })}
    </div>
  )
}

