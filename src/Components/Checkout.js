import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Form_Fields,
  validateName,
  validatePassword,
  validationSchema,
} from "./FormConstant";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    zip: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleConfirmOrder = () => {
    // Send order details to backend for processing
    setOrderPlaced(true);
    setStep(step + 1);
  };
  const sendDataToBack = (values) => {
    console.log(values);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="m-5 ">
            <div className="form">
              <h2>Step 1: Shipping Information</h2>
              <div>
                <Formik
                  initialValues={Form_Fields}
                  validationSchema={validationSchema}
                  onSubmit={(value, methods) => {
                    sendDataToBack(value);
                    methods.resetForm();
                  }}
                >
                  <Form>
                    <label htmlFor="fname">First Name :</label>
                    <Field
                      type="text"
                      name="fname"
                      className="input"
                      validate={validateName}
                    />
                    <ErrorMessage
                      name="fname"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                    <label htmlFor="lname">Last Name :</label>
                    <Field type="text" name="lname" validate={validateName} />
                    <ErrorMessage
                      name="lname"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                    Address:{" "}
                    <input
                      type="text"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingInfoChange}
                    />
                    ZIP Code:{" "}
                    <input
                      type="text"
                      name="zip"
                      value={shippingInfo.zip}
                      onChange={handleShippingInfoChange}
                    />
                    <label htmlFor="email">Email :</label>
                    <Field type="email" name="email" />
                    <ErrorMessage
                      name="email"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                    <label htmlFor="password">Password :</label>
                    <Field
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                    <ErrorMessage
                      name="password"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                    <label htmlFor="confirmPassword">Confirm Password :</label>
                    <Field type="password" name="confirmPassword" />
                    <ErrorMessage
                      name="confirmPassword"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                    <button
                      className="btn btn-secondary btn-sm m-2 "
                      type="submit"
                    >
                      Submit
                    </button>
                    <button
                      className="btn btn-primary btn-sm m-2 "
                      onClick={handleNextStep}
                    >
                      Next
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="m-5">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="form">
                    <h2>Step 2: Payment Details</h2>
                    <input
                      type="text"
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentInfoChange}
                      placeholder="Card Number"
                    />
                    <input
                      type="text"
                      name="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={handlePaymentInfoChange}
                      placeholder="Expiry Date"
                    />
                    <input
                      type="text"
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={handlePaymentInfoChange}
                      placeholder="CVV"
                    />
                    Paymente On: <br />
                    <input
                      className="radio"
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="PhonepPe"
                    />
                    PhonepPe
                    <input
                      className="radio"
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="paytm"
                    />
                    Paytm
                    <input
                      className="radio"
                      type="radio"
                      id="javascript"
                      name="fav_language"
                      value="goggle pay"
                    />
                    Goggle Pay
                    <button
                      className="btn btn-primary d-grid ps-5 pe-5 m-5"
                      onClick={handleConfirmOrder}
                    >
                      Pay
                    </button>
                    <button
                      className="btn btn-secondary btn-sm m-2"
                      onClick={handlePrevStep}
                    >
                      Previous
                    </button>
                    <button
                      className="btn btn-secondary btn-sm m-2"
                      onClick={handleConfirmOrder}
                    >
                      Confirm Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="m-5 text-center">
            <div className="form">
              <h2>Order Confirmation</h2>
              <p>Your order has been placed successfully!</p>
              <button
                className="button-73"
                role="button"
                onClick={() => navigate(`/`)}
              >
                BackToHome
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Checkout;
