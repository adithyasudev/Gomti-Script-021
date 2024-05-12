import { Actiontype } from "./asyncFunctions";
import { ActionTypes, User } from "./types";

// Define Login reducer function
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const ADMIN_REQUEST = "ADMIN_REQUEST";
export const ADMIN_SUCCESS = "ADMIN_SUCCESS";
export const ADMIN_FAILURE = "ADMIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const ADMIN_LOGOUT = "ADMIN_LOGOUT";

export const loginRequest = () => ({
  type: ActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (user: User) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string  | null) => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const adminRequest = () => ({
  type:ActionTypes.ADMIN_REQUEST,
});

export const adminSuccess = (user: User) => ({
  type: ActionTypes.ADMIN_SUCCESS ,
  payload: user,
});

export const adminFailure = (error: string | null) => ({
  type: ActionTypes.ADMIN_FAILURE,
  payload: error,
});


export interface LoginState {
  isAuthenticated: boolean;
  data: string;
  loading: boolean;
  error: string | null;
}
const initialLoginState:LoginState = {
  isAuthenticated: false,
  data: "",
  loading: false,
  error: null,
};

export const loginReducer = (state = initialLoginState, action: Actiontype) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("login");
      
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:

      console.log("sucess");
      
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      console.log("failuer");
      
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
      case LOGOUT_REQUEST:
        return {
          ...state,
          isAuthenticated: false,
          loading: false,

        };
    default:
      return state;
  }
};

export const adminReducer = (state = initialLoginState, action: Actiontype) => {
  switch (action.type) {
    case ADMIN_REQUEST:
     
      
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADMIN_SUCCESS:
     
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
        
      };
    case ADMIN_FAILURE:      
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
      case ADMIN_LOGOUT: 
      return{
        ...state,
        isAuthenticated: false,
        loading: false,
      }
    default:
      return state;
  }
};
