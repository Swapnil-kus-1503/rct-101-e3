import React, { createContext } from "react";
import { useReducer } from "react";

export const AuthContext = createContext();

const initState = {
  isAuth: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN SUCCESS":
      return {
        ...state,
        isAuth: true,
      };
    case "LOGOUT SUCCESS":
      return {
        ...state,
        isAuth: false,
      };
    case "LOGIN FAILURE":
    return {
      ...state,
      isAuth:false,
    }
    default:{
      return state;
    }
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return <AuthContext.Provider value={[state,dispatch]}>{children}</AuthContext.Provider>;
};
