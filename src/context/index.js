import { createContext, useState, useEffect } from "react";
import { client } from "../client";
import { Navigate, useNavigate } from "react-router-dom";
import { GeoHash } from "geohash";

export const AuthContext = createContext()

export function AuthContextProvider({children}) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [liked, setLiked] = useState(false)

  let latitude
  let longitude

  if ('geolocation' in navigator ) {
      navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
      console.log('lat: ' + latitude); 
      console.log('lon: ' + longitude);
      
      let geohash = GeoHash.encodeGeoHash(latitude, longitude)
      console.log(geohash)

    });
  } else {
    console.log('NOT AVAILABLE')
  }


  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  const signup = async (firstName, lastName, email, password) => {
    const response = await client.post("/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
  };

  const signupArtist = async (name, style, location) => {
    const response = await client.post("/auth/signup-artist", {
      name,
      style,
      location,
    });
  };

  const signupVenue = async (name, description, location, capacity) => {
    const response = await client.post("/auth/signup-venue", {
      name,
      description,
      location,
      capacity
    });
  };

  const login = async (email, password) => {
    try {
      const response = await client.post('/auth/login', {
        email,
        password,
      })
      saveToken(response.data.token)
      setUser(response.data.user)
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  

  const findPost = async (id) => {
    const response = await client.get(`/post/${id}`)
  }

  const allPosts = async () => {
    try {
      const response = await client.get("/post/all-posts")
      setPosts(response.data)
      
      
    } catch (error) {
      console.log(error)
    }
  }

  const addPost = async (title, content) => {
    const response = await client.post("/post/create-post", {
      title,
      content,
    });
    allPosts()
  }

  const deletePost = async (id) => {
    console.log('asterixqfsfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')
    try {
      const response = await client.delete(`/post/delete-post/${id}`)
      allPosts()
    } catch (error) {
      console.log(error)
    }
  }

  /* const handleLiked = () => {
    setLiked((previousValue) => {
        return !previousValue
    });
} */

  /* const likePost = async (id) => {
    console.log('asterixqfsfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')
    try {
      const response = await client.put(`/post/like-post/${id}`)
       allPosts()  
    } catch (error) {
      console.log(error)
    }
  }

   const unlikePost = async (id) => {
    console.log('asterixqfsfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')
    try {
      const response = await client.put(`/post/unlike-post/${id}`)
       allPosts()  
    } catch (error) {
      console.log(error)
    }
  }  */

  const editPost = async (title, content, id) => {
    const response = await client.put(`/post/edit-post/${id}`, {
      title,
      content,
    });
    allPosts()
  }

  const verify = async () => {
    try {
      const response = await client.get("/auth/verify")
      setUser(response.data.user)
      //navigate('/profile')
    } catch(error) {
      navigate('/login')
    }
  }

  const logout = () => {
    deleteToken();
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    verify()
  }, [])

  const value = {
    user,
    signup,
    login,
    logout,
    signupArtist, 
    signupVenue,
    addPost,
    findPost,
    allPosts,
    deletePost,
    posts,
    editPost,
    /* likePost,
    unlikePost, */
    
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>

}