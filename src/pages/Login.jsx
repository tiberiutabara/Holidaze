import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const login = await fetch(`http://localhost:1337/api/auth/local`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },

      body: JSON.stringify(loginData),
    });

    const loginResponseData = await login.json();

    window.localStorage.setItem('JWT', loginResponseData.jwt)
    navigate('/')
  };

  const logout = () => {
    window.localStorage.removeItem('JWT')
    navigate('/')
  }

  return (
    <div className="login">
      <h2>Log In</h2> <br />
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          {" "}
          <span> Email </span>
          <input
            type="email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>

        <label>
          {" "}
          <span> Password </span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <button>Log In</button>
      </form>

      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
}
