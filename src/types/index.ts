import { Dispatch, SetStateAction } from "react";
import { Option } from "../components/form-builder";

export type User = {
  _id: string;
  email: string;
  fullName: string;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

export type CardType = {
  author: {
    _id: string;
    fullName: string;
    email: string;
  };
  _id: string;
  title: string;
  keywords: Option[];
  content: string;
  slug: string;
  createdAt: Date;
};
