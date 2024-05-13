import axios from "axios";
import { ThunkAction } from 'redux-thunk'; // Import ThunkAction
import { adminFailure, adminRequest, adminSuccess, loginFailure, loginRequest, loginSuccess } from "./reducers";
import { ActionTypes, Store, User } from "./types";
import { Dispatch } from "redux";

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
type ThunkResult<R> = ThunkAction<R, Store, undefined, Actiontype>;

// Adjust loginUser to use ThunkAction
export const loginUser = (credentials: User): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.get('https://gomti-script-021.onrender.com/user');
      const users: jsonUser[] = response.data;
      let valid = users.some(user => user.email === credentials.email && user.password === credentials.password);

      if (valid) {
        dispatch(loginSuccess(credentials));
      } else {
        dispatch(loginFailure('Invalid email or password'));
      }
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };
};
// Adjust loginAdmin to use ThunkAction
export const loginAdmin = (credentials: User): ThunkResult<void> => async (dispatch: Dispatch) => {
  try {
    dispatch(adminRequest());

    const response = await axios.get('https://gomti-script-021.onrender.com/admin');
    const admins = response.data;
    let valid = admins.some((admin: jsonAdmin) => admin.email === credentials.email && admin.password === credentials.password);

    if (valid) {
      dispatch(adminSuccess(credentials));
    } else {
      dispatch(adminFailure('Invalid email or password'));
    }
  } catch (error: any) {
    dispatch(adminFailure(error.message));
  }
};