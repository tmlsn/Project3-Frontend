import { createContext, useState } from "react";
import { client } from "../client";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const signup = async (firstName, lastName, email, password) => {
    const response = await client.post("/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    console.log(response);
  };

  const login = async (email, password) => {
    const response = await client.post("/auth/login", {
      email,
      password,
    });
    console.log(response);
  };

  const value = {
    user,
    signup,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}