import { Actiontype } from "./asyncFunctions";
<<<<<<< HEAD
import { ActionTypes, User } from "./types";
=======
import { User } from "./types";
>>>>>>> 0ba226fcff32886ee75412523960e8fc02376a52

// Define Login reducer function
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const ADMIN_REQUEST = "ADMIN_REQUEST";
export const ADMIN_SUCCESS = "ADMIN_SUCCESS";
export const ADMIN_FAILURE = "ADMIN_FAILURE";

export const loginRequest = () => ({
<<<<<<< HEAD
  type: ActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (user: User) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string  | null) => ({
  type: ActionTypes.LOGIN_FAILURE,
=======
  type: "LOGIN_REQUEST",
});

export const loginSuccess = (user: User) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = (error: string) => ({
  type: "LOGIN_FAILURE",
>>>>>>> 0ba226fcff32886ee75412523960e8fc02376a52
  payload: error,
});

export const adminRequest = () => ({
<<<<<<< HEAD
  type:ActionTypes.ADMIN_REQUEST,
});

export const adminSuccess = (user: User) => ({
  type: ActionTypes.ADMIN_SUCCESS ,
=======
  type: "ADMIN_REQUEST",
});

export const adminSuccess = (user: User) => ({
  type: "ADMIN_SUCCESS",
>>>>>>> 0ba226fcff32886ee75412523960e8fc02376a52
  payload: user,
});

export const adminFailure = (error: string | null) => ({
<<<<<<< HEAD
  type: ActionTypes.ADMIN_FAILURE,
=======
  type: "ADMIN_FAILURE",
>>>>>>> 0ba226fcff32886ee75412523960e8fc02376a52
  payload: error,
});

const initialLoginState = {
  isAuthenticated: false,
  data: "",
  loading: false,
  error: null,
};

export const loginReducer = (state = initialLoginState, action: Actiontype) => {
  switch (action.type) {
    case LOGIN_REQUEST:
<<<<<<< HEAD
      console.log("login");
      
=======
>>>>>>> 0ba226fcff32886ee75412523960e8fc02376a52
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
<<<<<<< HEAD

      console.log("sucess");
      
=======
>>>>>>> 0ba226fcff32886ee75412523960e8fc02376a52
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
<<<<<<< HEAD
      console.log("failuer");
      
=======
>>>>>>> 0ba226fcff32886ee75412523960e8fc02376a52
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const adminReducer = (state = initialLoginState, action: Actiontype) => {
  switch (action.type) {
    case ADMIN_REQUEST:
<<<<<<< HEAD
      console.log("requesting");
      
=======
>>>>>>> 0ba226fcff32886ee75412523960e8fc02376a52
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADMIN_SUCCESS:
<<<<<<< HEAD
      console.log("sucess admin");
      
=======
>>>>>>> 0ba226fcff32886ee75412523960e8fc02376a52
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
<<<<<<< HEAD
        
      };
    case ADMIN_FAILURE:
      console.log("failur admin");
      
=======
      };
    case ADMIN_FAILURE:
>>>>>>> 0ba226fcff32886ee75412523960e8fc02376a52
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
