 // Import ThunkAction
import { ActionTypes, User } from "./types";

export interface Actiontype {
  type: ActionTypes;
  payload?: User | string | null;
}

export interface jsonUser {
  id: number;
  name: string;
  number: number;
  email: string;
  password: string;
}

export interface jsonAdmin {
  id: number;
  email: string;
  password: string;
}

// Define the ThunkAction type for your async action creators


// Adjust loginUser to use ThunkAction
