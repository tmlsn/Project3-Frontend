import { createContext, useState, useEffect } from "react";
import { client } from "../client";

export const AuthContext = createContext()

export function AuthContextProvider({children}) {
  const [user, setUser] = useState(null);

  const signup = async (firstName, lastName, email, password) => {
    const response = await client.post("/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
  };

  const value = {
    user,
    signup,
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>

}