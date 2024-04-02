import React from "react";
import "../Assets/CSS/Product.css";
const Footer = () => {
  return (
    <footer className="footer bg-secondary p-5" style={{ color: "white" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>
              We pride ourselves on offering high-quality clothing products that
              are both stylish and comfortable. Our carefully curated selection
              includes a wide range of options to suit every taste and occasion,
              from casual everyday wear to elegant formal attire.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="list-unstyled ps-5">
              <li>
                <a
                  className="text-decoration-none  "
                  style={{ color: "white" }}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none m-0 p-0 "
                  style={{ color: "white" }}
                  href="/Product"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none m-0 p-0"
                  style={{ color: "white" }}
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@clothproducts .com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
