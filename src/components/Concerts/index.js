import styles from './Concerts.module.css'
import { useEffect, useState } from "react";
import axios from "axios"

export function Concerts() {
  // const [concerts, setConcerts] = useState([])
  // let apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_TM_CONSUMER_KEY}&geoPoint=u0h119ry9tuv`
  
  // useEffect(() => {
  //   axios.get(apiUrl)
  //     .then((response) => {
  //       setConcerts(response.data._embedded.events)
  //     })
  // }, [])

  return (
    <div>
      <p>Upcoming shows near you</p>
      {/* {concerts.map((concert) => {
        return (
          <div key={concert.id}>
          <p >{concert.name}</p>
          <img src={concert.images[0].url} style={{width: 100}} alt='event' />

          </div>
        )
      })} */}
    </div>
  )
}

