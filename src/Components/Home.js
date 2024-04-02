import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../Assets/Images/bg_img.jpg";
import "../Assets/CSS/Product.css";
import Product from "./Product";

const Home = () => {
  const navigate = useNavigate();
  const handleProduct = () => {
    navigate("/Product/");
  };

  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12 col-12">
            <img src={Img1} alt="img" width={"100%"} />
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12 col-12">
            <section className="section-1 d-flex justify-content-center align-items-center ">
              <button
                className="button-19 "
                role="button"
                onClick={() => handleProduct()}
              >
                Get in our Products...
              </button>
            </section>
          </div>
        </div>
        <div className="row">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
