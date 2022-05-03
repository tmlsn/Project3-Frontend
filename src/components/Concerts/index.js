import styles from './Concerts.module.css'
import { AuthContext } from "../../context";
import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';

export function Concerts() {
  const { getConcerts, concerts, geohash } = useContext(AuthContext);
    useEffect(() => {
      getConcerts(geohash)
    },[])
    console.log('COOOCOCOCOCOCOCO',concerts)

  return (
    <div className={styles.concertsContainer}>
      <h3>Upcoming shows near you</h3>
      <div className={styles.concertsGrid}>
        {concerts.map((concert) => {
          return (
            <div key={concert.id} className={styles.concertTile}>
                <a href={concert.url} target="_blank"> {concert.name} </a>
                <img src={concert.images[0].url} style={{width: 130}} alt='event' />
            </div>
          )
        })}
      </div>
    </div>
  )
}


