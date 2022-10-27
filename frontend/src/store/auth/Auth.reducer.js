import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
} from "./Auth.types";

const token = JSON.parse(localStorage.getItem("token")) || "";
const initalState = {
  token: token,
  loading: false,
  error: false,
  username: "",
};

export const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case AUTH_SIGNUP_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }

    case AUTH_SIGNUP_SUCCESS: {
      return {
        error: false,
        loading: false,
      };
    }

    case AUTH_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case AUTH_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case AUTH_LOGIN_SUCCESS: {
      localStorage.setItem("token", JSON.stringify(payload));

      return {
        ...state,
        loading: false,
        error: false,
        token: payload.token,
        username: payload.user,
      };
    }

    case LOGOUT_SUCCESS: {
      localStorage.removeItem("token");

      return {
        token: "",
        loading: false,
        error: false,
        username: "",
      };
    }

    default: {
      return state;
    }
  }
};
