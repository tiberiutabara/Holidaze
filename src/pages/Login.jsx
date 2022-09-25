import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles/Login.scss'

const { REACT_APP_URL } = process.env;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      identifier: username,
      password: password,
    };

    const login = await fetch(`${REACT_APP_URL}/api/auth/local`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },

      body: JSON.stringify(loginData),
    });

    const loginResponseData = await login.json();
    console.log(loginResponseData)
    
    if (loginResponseData.data === null) {
      alert('Wrong email or password')
      localStorage.removeItem("JWT")
    } 

    else {
    localStorage.setItem('JWT', loginResponseData.jwt)
    localStorage.setItem('role', loginResponseData.user.roleType)

    const role = localStorage.getItem('role')

    role === 'admin' && navigate('/admin')
    role === 'owner' && navigate('/owner')
    } 
    
  };

  return (
    <div className="login">

      <form className="login-form" onSubmit={handleLogin}>
        <label>
          <span> Email </span> <br />
          <input
            type="email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>

        <label>
          <span> Password </span> <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <button className="button">Log In</button>
      </form>

      <Link to="/contact">Forgot password?</Link>
    </div>
  );
}
