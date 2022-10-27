import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
} from "./Auth.types";
import axios from "axios";

export const userSignup = (data) => async (dispatch) => {
  dispatch({ type: AUTH_SIGNUP_LOADING });
  try {
    const res = await axios.post("http://localhost:8080/users/signup", data);
    dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: data });

    return res;
  } catch (e) {
    dispatch({ type: AUTH_SIGNUP_ERROR });
  }
};

export const userLogin = (data) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    const res = await axios.post("http://localhost:8080/users/login", data);
    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
    return res;
  } catch (e) {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
