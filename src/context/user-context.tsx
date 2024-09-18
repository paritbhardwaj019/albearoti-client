import React, { createContext, useEffect, useState } from "react";
import { User, UserContextInterface } from "../types";

const defaultState = {
  user: {
    _id: "",
    email: "",
    fullName: "",
  },
  token: "",
  setToken: () => {},
  setUser: () => {},
} as UserContextInterface;

export const UserContext = createContext<UserContextInterface>(defaultState);

type Props = {
  children: React.ReactNode;
};

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>({
    fullName: "",
    _id: "",
    email: "",
  });
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      setToken(token);
    }

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
