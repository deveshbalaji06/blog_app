import React from 'react'
import { Link } from 'react-router-dom';
import "./login.css";
import Register from './register/register';
export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
        
      </form>
        <button className="loginRegisterButton">
        <Link to="/Register">Contact</Link>
        </button>
      
    </div>
  );
}