import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Assets/CSS/Product.css";
import Img1 from "../Assets/Images/basket-cart.png";

import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const numItems = useSelector((state) => state.Cart.arrProducts.length);
  const isAuth = useSelector((state) => state.login.auth);
  const navigate = useNavigate();
  const toHandleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className=" col-12">
            <div className="navParent d-flex  justify-content-end ">
              <nav>
                <ul>
                  <li id="nav-menu1" onClick={toHandleClick}>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </li>

                  <li id="nav-menu2">
                    <NavLink className="navLink" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li id="nav-menu2">
                    <NavLink className="navLink" to="/Product">
                      Product
                    </NavLink>
                  </li>
                  <li id="nav-menu2">
                    <NavLink className="navLink" to="/Contact">
                      Contact
                    </NavLink>
                  </li>
                  <span>
                    {isAuth ? (
                      <span>
                        <IconButton
                          onClick={() => navigate("/LogOut")}
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                        >
                          <LogoutIcon />
                        </IconButton>
                      </span>
                    ) : (
                      <span>
                        <IconButton
                          onClick={() => navigate("/Login")}
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                        >
                          <AccountCircleIcon />
                        </IconButton>
                      </span>
                    )}
                  </span>
                  <span className="navCart" onClick={() => navigate("/Cart")}>
                    <span>
                      <img src={Img1} alt="cartIcon" height={"30px"} /> :{" "}
                      {numItems}
                    </span>
                  </span>
                </ul>
              </nav>

              {show && (
                <div className="row">
                  <table className="table table-striped nav-table ">
                    <tr>
                      <td>
                        <NavLink
                          onClick={toHandleClick}
                          className="navLink"
                          to="/"
                        >
                          Home
                        </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <NavLink
                          onClick={toHandleClick}
                          className="navLink"
                          to="/Product"
                        >
                          Product
                        </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <NavLink
                          onClick={toHandleClick}
                          className="navLink"
                          to="/Contact"
                        >
                          Contact
                        </NavLink>
                      </td>
                    </tr>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
