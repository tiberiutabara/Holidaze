import React from "react";
import { useEffect } from "react";

export default function Login() {

  const userAuthentification = async () => {
    const loginData = {
      identifier: "admin@holidaze.com",
      password: "test1234",
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
    console.log(loginResponseData);
  }

  useEffect(() => {
    userAuthentification()
  }, [])

  return (
    <div className="login">
      <h2>Log In</h2> <br />

      <form>
        <label> <span> Username </span>
          <input type='text' />
        </label>

        <label> <span> Password </span>
          <input type='text' />
        </label>

        <button>Log In</button>
      </form>
    </div>
  );
}
