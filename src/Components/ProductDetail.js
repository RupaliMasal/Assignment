import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductData from "../JsonFiles/Product.json";
import { addProduct } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

import "../Assets/CSS/Product.css";
const ProductDetail = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    setData(ProductData.clothing_products[userId]);
  }, []);
  return (
    <div>
      <div className="course-details">
        <div className="container">
          <div className="row">
            <div className=" col-md-2 col-lg-2 col-xl-2 "></div>
            <div className=" col-md-8 col-lg-8 col-xl-8 border border-dark rounded-3 p-5">
              <header>
                <h1>{data.title}</h1>
                <b>Brand:{data.brand}</b>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Category : {data.category}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Gender : {data.gender}</span>
                <p>
                  <img src={data.image} alt="Imggg" width="80%" />
                </p>
              </header>
              <section>
                <h3>{data.description}</h3>
                <p>Size:{data.size}</p>
                <p>
                  <b>Price : $ {data.price}</b>
                </p>
                <button
                  className="button-77"
                  role="button"
                  onClick={() => dispatch(addProduct(data))}
                >
                  AddToCart
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="button-73"
                  role="button"
                  onClick={() => navigate(`/Product`)}
                >
                  BackToProducts
                </button>
              </section>
            </div>
            <div className=" col-md-2 col-lg-2 col-xl-2 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
