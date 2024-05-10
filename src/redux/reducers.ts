import { Actiontype } from "./asyncFunctions";
import { User } from "./types";

// Define Login reducer function
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const ADMIN_REQUEST = "ADMIN_REQUEST";
export const ADMIN_SUCCESS = "ADMIN_SUCCESS";
export const ADMIN_FAILURE = "ADMIN_FAILURE";

export const loginRequest = () => ({
  type: "LOGIN_REQUEST",
});

export const loginSuccess = (user: User) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = (error: string) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const adminRequest = () => ({
  type: "ADMIN_REQUEST",
});

export const adminSuccess = (user: User) => ({
  type: "ADMIN_SUCCESS",
  payload: user,
});

export const adminFailure = (error: string | null) => ({
  type: "ADMIN_FAILURE",
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
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
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
    default:
      return state;
  }
};
