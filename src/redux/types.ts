export interface User{
    email:string;
    password:string;
} 

// ActionTypes for Redux actions
export enum ActionTypes {
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILURE = "LOGIN_FAILURE",
    ADMIN_REQUEST = "ADMIN_REQUEST",
    ADMIN_SUCCESS = "ADMIN_SUCCESS",
    ADMIN_FAILURE = "ADMIN_FAILURE",
    ADMIN_LOGOUT = "ADMIN_LOGOUT",
    LOGOUT_REQUEST ="LOGOUT_REQUEST"
  }
  