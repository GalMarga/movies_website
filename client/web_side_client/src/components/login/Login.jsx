import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const USERS_URL = "http://localhost:3000/users/login"

  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({ userName: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const login = async () => {
    try {
      console.log("Attempting login with:", userLogin);
      
      const response = await axios.post(USERS_URL, userLogin);
      console.log("Response from server:", response.data);

      if (response.status === 200 && response.data.success) {
        navigate("movies/allmovies");
      } else {
        setErrorMessage("Wrong username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Please check your username and password.");
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Login</h1>
        <br />
        User Name:{" "}
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          onChange={handleChange}
        />
        <br />
        Password:{" "}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <button onClick={login}>Log In</button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </>
  );
};

export default Login;
