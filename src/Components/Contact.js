import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h1>Contact us</h1>
            <p>
              Feel free to contact us with any questions or comments you may
              have. We will get back to you as soon as possible.
            </p>

            <form action="#" className="m-5">
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" name="name" />
              <br />
              <label htmlFor="email">Email: </label>
              <input type="email" id="    email" name="email" />
              <br />
              <label htmlFor="message">Message : </label>
              <br />
              <textarea
                id="message"
                name="message"
                rows="5"
                cols="30"
              ></textarea>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
