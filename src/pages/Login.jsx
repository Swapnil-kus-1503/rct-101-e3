import axios from "axios";
import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, dispatch] = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        alert("Login Successful");
        dispatch({
          type: "LOGIN SUCCESS",
        });
      })
      .catch((err) => {
        alert("Failed");
      });
  };

  if(state.isAuth)
  {
    return <Navigate to="/products"/>
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          placeholder=" Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          data-cy="login-password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button data-cy="login-submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
