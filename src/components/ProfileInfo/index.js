import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";
import { ArtistInfo } from "../ArtistInfo";
import { VenueInfo } from "../VenueInfo";

export function ProfileInfo() {
  const { user, getArtistInfo, getVenueInfo, venRes, artRes } = useContext(AuthContext);
  const [artist, setArtist] = useState()
  const [venue, setVenue] = useState()

  useEffect(() => {
    getArtistInfo(user._id)
    getVenueInfo(user._id)
  },[])

  return (
    <div> 
      {artRes && <ArtistInfo />}
      {venRes && <VenueInfo />}
    </div>
  )
}