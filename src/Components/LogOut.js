import React from "react";
import { useDispatch } from "react-redux";
import { Logout } from "../Redux/LoginSlice";
import { useNavigate } from "react-router-dom";
const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(Logout());
    navigate("/");
  };

  return (
    <div className="m-5">
      <div className="form">
        <h1 className="">LogOut </h1>
        <button
          className="btn btn-secondary text-center"
          onClick={handleLogOut}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default LogOut;
