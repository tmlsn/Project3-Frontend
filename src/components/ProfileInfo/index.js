import { AuthContext } from "../../context";
import { useState, useContext, useEffect } from "react";

export function ProfileInfo() {
  const { user, getArtistInfo, getVenueInfo } = useContext(AuthContext);

  useEffect(() => {
    getArtistInfo(user._id)
    getVenueInfo(user._id)
  },[])

  return (
    <div> 
      This is your profile info
    </div>
  )
}