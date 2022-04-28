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
  const [comments, setComments] = useState([]);
  const [concerts, setConcerts] = useState([])
  const [geohash, setGeohash] = useState('')
 
  
  

  useEffect(() => {
    if ('geolocation' in navigator ) {
      navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      
      let hash = GeoHash.encodeGeoHash(latitude, longitude).slice(0, 6)
      setGeohash(hash)
    });
  } else {
    console.log('Geolocation is not available')
  }
  }, [geohash])

  const getConcerts = async (geohash) => {
    try {
      const response = await client.get(`/concert/${geohash}`)
      setConcerts(response.data.events)
      
    } catch (error) {
      console.log(error)
    }
  }

  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  const signup = async (firstName, lastName, email, password, details) => {
    const response = await client.post("/auth/signup", {
      firstName,
      lastName,
      email,
      password,
      details
    });
  };

  const signupArtist = async (name, style, description, contactInfo, location) => {
    const response = await client.post("/auth/signup-artist", {
      name,
      style,
      description,
      contactInfo,
      location,
    });
  };

  const signupVenue = async (name, description, location, contactInfo, capacity) => {
    const response = await client.post("/auth/signup-venue", {
      name,
      description,
      location,
      contactInfo,
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

  const addComment = async (content, post) => {
    
    const response = await client.post(`/comment/add-comment/${post._id}`, {
      content,
      post
    });
    seeComments(post)
  }

  const seeComments = async (post) => {
    try {
      const response = await client.get(`/comment/see-comments/${post._id}`)
      setComments(response.data)
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',response.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  const editComment = async (content, id) => {
    const response = await client.put(`/comment/edit-comment/${id}`, {
      content,
    });
    seeComments()
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
    addComment,
    seeComments,
    comments,
    editComment,
    /* likePost,
    unlikePost, */ 
    getConcerts,
    concerts,
    geohash,

    
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>

}