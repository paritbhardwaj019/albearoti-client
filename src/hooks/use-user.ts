import { useContext } from "react";
import { UserContext } from "../context/user-context";

export const useUser = () => {
  if (!UserContext) {
    return;
  }

  return useContext(UserContext);
};
