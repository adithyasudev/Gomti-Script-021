import axios from "axios";



import { adminFailure, adminRequest,  adminSuccess,  loginFailure, loginRequest, loginSuccess } from "./reducers";
import { User } from "./types";
import { Dispatch } from "redux";

export interface Actiontype {
  type: string;
  payload?: User | string | null;
}
export interface jsonUser{
  id: number;
name: string;
number: number;
email: string;
password: string
}

export interface jsonAdmin{
  id: number;
email: string;
password: string
}



export const loginUser = (credentials:User) => async (dispatch:Dispatch<Actiontype> )=> {
  try {
  

    dispatch(loginRequest());

    const response = await axios.post('/login', credentials);
   
    const user = response.data;
let valid = false;
    user.forEach((element:jsonUser)=> {
      if(element.email == credentials.email && element.password == credentials.password){
        valid=true;
      }
    });
    if (valid) {
      dispatch(loginSuccess(credentials));
    } else {
      dispatch(loginFailure('Invalid email or password'));
    }
  } catch (error:any) {
    // Dispatch login failure action with error message
    dispatch(loginFailure(error));
  }
};
//admin login
export const loginAdmin = (credentials:User) => async (dispatch:Dispatch<Actiontype>) => {
  try {
  

    dispatch(adminRequest());

    const response = await axios.get('');
   
    const user = response.data;

    let valid = false;
    user.forEach((element:jsonAdmin) => {
      if(element.email == credentials.email && element.password == credentials.password){
        valid=true;
      }
    });
    if (valid) {
      dispatch(adminSuccess(credentials));
    } else {
      dispatch(adminFailure('Invalid email or password'));
    }
  } catch (error:any) {
    // Dispatch login failure action with error message
    dispatch(loginFailure(error));
  }
};







