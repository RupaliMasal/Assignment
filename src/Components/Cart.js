import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decCount, incCount, removeProduct } from "../Redux/CartSlice";
import "../Assets/CSS/Product.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart.arrProducts);
  let totalPrice = 0;
  cartItems.map(({ price, count }) => (totalPrice += price * count));
  let totalItem = 0;
  cartItems.map(({ count }) => (totalItem += count));
  const navigate = useNavigate();

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            {cartItems.length == 0 ? (
              <p className="fs-5 fw-bold text-danger pt-5 ps-5">
                Nothing is added in the cart ...!!!
              </p>
            ) : (
              <div className="">
                <table className=" m-5 table">
                  <tr className="p-2">
                    <th>Sr.No.</th>
                    <th>Photo</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th colSpan={3}>Actions</th>
                  </tr>
                  {cartItems.map(({ title, image, price, count }, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>
                        <img src={image} alt="imggg" width="100px" />
                      </td>
                      <td>{title}</td>
                      <td>$ {price}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => dispatch(incCount(idx))}
                        >
                          +
                        </button>
                      </td>
                      <td> {count}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => dispatch(decCount(idx))}
                        >
                          -{" "}
                        </button>
                      </td>
                      <td>
                        <button
                          className=" btn bg-warning"
                          onClick={() => dispatch(removeProduct(idx))}
                        >
                          RemoveItem
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            )}
          </div>
          <div class="col">
            <div>
              <div className="text-center border mt-5 ms-5 mb-5 p-3 pb-5 rounded-3 bg-light bg-gradient">
                <h1>Total :</h1>
                <div>
                  Number of Products : {totalItem} <br />
                  Price : ${Math.floor(totalPrice)}
                </div>
                <br />
                <div>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => navigate("/Checkout")}
                  >
                    Checkout
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-secondary m-2 "
                    onClick={() => navigate("/Product")}
                  >
                    Go to Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
