import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-secondary p-5"style={{color:'white'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>LearnCode Academy is your destination for high-quality educational courses. Dive into the world of programming, design, and more with our expert instructors.</p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className='list-unstyled ps-5' >
              <li><a className='text-decoration-none'style={{color:'white'}} href="/">Home</a></li>
              <li><a className='text-decoration-none'style={{color:'white'}} href="/courses">Courses</a></li>
              <li><a className='text-decoration-none'style={{color:'white'}} href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@learncodeacademy.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
