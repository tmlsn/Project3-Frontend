import styles from './Concerts.module.css'
import { useEffect, useState } from "react";
import axios from "axios"
// const dotenv = require('dotenv')
// dotenv.config()

export function Concerts() {
  const [concerts, setConcerts] = useState([])
  let apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?locale=es&apikey=${process.env.REACT_APP_TM_CONSUMER_KEY}`
  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setConcerts(response.data._embedded.events)
      })
  }, [])

  return (
    <div>
      {concerts.map((concert) => {
        return <p key={concert.id}>{concert.name}</p>
      })}
    </div>
  )
}

