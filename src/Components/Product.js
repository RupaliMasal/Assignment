import React, { useEffect, useState } from "react";
import ProductData from "../JsonFiles/Product.json";
import { useNavigate, useParams } from "react-router-dom";
import RecipeReviewCard from "./Card";
import "../Assets/CSS/Product.css";
import Pagination from "./Pagination";

const Product = () => {
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [sliceData, setSliceData] = useState([]);
  const [genToggle, setGenToggle] = useState(false);
  const [gender, setGender] = useState("both");
  const [filterData, setFilterData] = useState(false);
  const [price, setPrice] = useState(0);
  const [priceTogg, setPriceTogg] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (gender == "both" && price == 0) {
      setData(ProductData.clothing_products);
    }
    if (gender == "Male") {
      setData(
        ProductData.clothing_products.filter((item) => item.gender == "Mens")
      );
    }
    if (gender == "Female") {
      setData(
        ProductData.clothing_products.filter((item) => item.gender == "Womens")
      );
    }
    if (price == "1-50") {
      setData(ProductData.clothing_products.filter((item) => item.price <= 50));
    }
    if (price == ">50") {
      setData(ProductData.clothing_products.filter((item) => item.price > 50));
    }
    if (price == "1-50" && gender == "Male") {
      setData(
        ProductData.clothing_products.filter(
          (item) => item.price <= 50 && item.gender == "Mens"
        )
      );
    }
    if (price == "1-50" && gender == "Female") {
      setData(
        ProductData.clothing_products.filter(
          (item) => item.price <= 50 && item.gender == "Womens"
        )
      );
    }
    if (price == ">50" && gender == "Male") {
      setData(
        ProductData.clothing_products.filter(
          (item) => item.price > 50 && item.gender == "Mens"
        )
      );
    }
    if (price == ">50" && gender == "Female") {
      setData(
        ProductData.clothing_products.filter(
          (item) => item.price > 50 && item.gender == "Womens"
        )
      );
    }
  }, [gender, price]);

  useEffect(() => {
    let PageCount = pageNum * 6;
    setSliceData(data?.slice(PageCount - 6, PageCount));
  }, [pageNum, data]);
  const toHandleClick = (id) => {
    navigate(`/ProductDetail/${id}`);
  };
  return (
    <div className="Card">
      <div className="container-fluid  ">
        <div className="row">
          <div className="col-12 ">
            <div
              className=" filter rounded-pill  border border-primary text-center text-bold ps-5 pe-5 p-3 m-2"
              onClick={() => setFilterData(!filterData)}
            >
              Filter
            </div>
            <div className="align-items-center d-flex justify-content-center flex-row">
              {filterData && (
                <div
                  onClick={() => setGenToggle(!genToggle)}
                  className="text-center bg-secondary ps-5 pe-5 p-2  border"
                >
                  Gender
                </div>
              )}
              {genToggle && (
                <div className="text-center d-flex flex-colum  border">
                  <div
                    className=" border  ps-5 pe-5 p-2"
                    onClick={() => setGender("Male")}
                  >
                    Male
                  </div>
                  <div
                    className=" border  ps-5 pe-5 p-2"
                    onClick={() => setGender("Female")}
                  >
                    Female
                  </div>
                </div>
              )}
              {filterData && (
                <div
                  onClick={() => setPriceTogg(!priceTogg)}
                  className="text-center ps-5 pe-5 p-2  border bg-secondary"
                >
                  Price
                </div>
              )}
              {priceTogg && (
                <div className="text-center  d-flex flex-colum  price-tag">
                  <div
                    className=" border  ps-5 pe-5 p-2"
                    onClick={() => setPrice("1-50")}
                  >
                    1 to 50
                  </div>
                  <div
                    className=" border  ps-5 pe-5 p-2"
                    onClick={() => setPrice(">50")}
                  >
                    Greater than 50
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <section>
          <div className="row">
            <div className="col-12 col-lg-12 ">
              <p>
                {sliceData?.map((item, idx) => (
                  <div className="Card-items">
                    <RecipeReviewCard
                      {...item}
                      funClick={toHandleClick}
                      courseId={idx}
                      key={idx}
                    />
                  </div>
                ))}
              </p>
              <Pagination pages={5} pageNum={pageNum} setPageNum={setPageNum} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
