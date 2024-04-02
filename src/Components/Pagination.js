import React, { useEffect, useState } from "react";
import "../Assets/CSS/Product.css";
import { dividerClasses } from "@mui/material";
const Pagination = ({ pages, setPageNum, pageNum }) => {
  const [numArr, setNumArr] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= pages; i++) {
      arr.push(i);
    }
    setNumArr(arr);
  }, []);
  const toHandleNext = () => {
    setPageNum(pageNum == pages ? pageNum : pageNum + 1);
  };
  const toHandlePrevious = () => {
    setPageNum(pageNum == 1 ? 1 : pageNum - 1);
  };
  const toHandleClickButton = (n) => {
    setPageNum(n);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className=" col-12  justify-content-center  align-items-center d-flex mb-5">
            <div className="">
              <button
                className="btn btn-outline-primary  "
                onClick={toHandlePrevious}
              >
                Prev
              </button>
              {numArr.map((item, idx) => (
                <button
                  className="btn btn-outline-primary"
                  key={idx}
                  onClick={() => toHandleClickButton(item)}
                >
                  {item}
                </button>
              ))}
              <button
                className="btn btn-outline-primary"
                onClick={toHandleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
