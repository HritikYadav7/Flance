import React, { useState } from 'react'
import "./login.scss"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
// import  newRequest  from '../utils/newRequest'
// const newRequest = require('../utils/newRequest')

function login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", { username, password }, 
      { withCredentials: true }
      );
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      // console.log(res);
      navigate("/");
    }
    catch (err) {
      setError(err.respone.data)
    }
  }



  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Hritik Yadav"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
}

export default login