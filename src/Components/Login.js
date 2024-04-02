import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../Redux/LoginSlice";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LogIn());
    navigate("/Checkout");
    // fetch('https://fakestoreapi.com/auth/login',{
    //     method:'POST',
    //     body:JSON.stringify({
    //         username: "mor_2314",
    //         password: "83r5^_"
    //     })
    // }) .then(res=>res.json())
    //     .then(json=>console.log(json)
    //     .catch((err) =>console.log(err)))
  };

  return (
    <div className="m-5">
      <h1 className="text-center">Login Form</h1>
      <form onSubmit={handleSubmit} className="form ">
        <input
          type="text"
          placeholder="user name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
