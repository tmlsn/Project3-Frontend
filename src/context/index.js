import { createContext, useState, useEffect } from "react";
import { client } from "../client";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export function AuthContextProvider({children}) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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

  const login = async (email, password) => {
    try {
      const response = await client.post('/auth/login', {
        email,
        password,
      })
      saveToken(response.data.token)
      setUser(response.data.user)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    deleteToken();
    setUser(null);
    navigate("/");
  };

  const value = {
    user,
    signup,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>

}