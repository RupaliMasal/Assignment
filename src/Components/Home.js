import React from 'react'
import { useNavigate } from 'react-router-dom';
import Img1 from '../Assets/Images/header-img-1.jpg';
import Img2 from '../Assets/Images/Front-End-Courses.png';
import Img3 from '../Assets/Images/backend-courses.avif';
import Img4 from '../Assets/Images/Java-courses.webp';
import '../Assets/CSS/courses.css'

const Home = () => {
  const navigate=useNavigate();
      const toHandleDev=(str)=>{
          navigate("/Courses/"+str);
      }
  return (
    <div>
      <div className="container-Fluid">
      {/* header */}
      <header>
      
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12 col-12">
          <div className='header'>
            "Unleash Your Potential <br />
             Don't Miss Our Republic Day Sale! Courses Starting from ₹449 Until January 26th."
          </div>
            <img src={Img1} alt="img" width={"100%"}/>
          </div>
        </div>
      
      </header>
      {/* section1 */}
      <section className='section-1'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
          <img src={Img2} alt="Img" width={"100%"} />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <div>
           <h2>What is front-end web development?</h2> 
            <p>The front-end of the web is the user-facing side. Front-end web development refers to the tools and procedures used to create everything a visitor can interact with on a website.Footnote1 It includes the processes of coding, creating, and activating the visuals and digital interfaces for a website based on client specifications and needs. Front-end web developers use HTML, CSS, and JavaScript to manage the style, speed, and accessibility of a webpage.Footnote2 The photos, graphic charts, headlines, selection buttons, and other items that a user sees on a website are the result of front-end development. Some common front-end web development tasks include:Creating new web pages.Building HTML emails for marketing campaigns.Improving website speed by cleaning code.Making sure websites are accessible on mobile devices and tablets.</p>
          </div>
           <button className='button-19' role="button" onClick={()=>toHandleDev("Front")}>Get in our courses...</button>
          </div>
        </div>
      </section>
      {/* section-2 */}
      <section className='section-2'>
        <div className="row">
         <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
         <h2>"Master Back-End Development:"</h2>
        <div>    
          Unlock the power of back-end development with our comprehensive online course! Whether you're a seasoned programmer or just starting your journey in web development, this course is designed to equip you with the essential skills and knowledge needed to excel in building robust, scalable, and efficient web applications.Led by industry experts, this course covers a wide range of topics, including server-side programming languages like Python, Ruby, Node.js, and PHP, along with frameworks such as Django, Flask, Ruby on Rails, Express.js, and Laravel. You'll delve into databases, learning how to design and optimize schemas, use SQL and NoSQL databases effectively, and implement data validation and security measures.
        </div>
        <br />
         <button className='button-19' role="button" onClick={()=>toHandleDev("Back")}>Get in our courses...</button>  
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
        <img src={Img3} alt="Imggg" width="100%"  />
      </div>
     </div>
      </section>
      {/* section3 */}
      <section className='section-3'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
             <img src={Img4} alt="Imggg" width="100%"  />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 "> 
             <h2>"Elevate Your Java Skills:"</h2>    
           <div>
             Embark on a journey to become a proficient Java developer with our comprehensive online course! Whether you're a novice programmer or seeking to enhance your Java expertise, this course is meticulously crafted to provide you with the knowledge and skills necessary to thrive in the competitive field of software development.Led by experienced instructors with a passion for Java, this course covers a broad spectrum of topics, including object-oriented programming principles, data structures, algorithms, multi-threading, and design patterns. You'll dive deep into Java frameworks and technologies such as Spring, Hibernate, Maven, and JUnit, mastering the tools essential for building robust and scalable applications.
            </div>
            <br />
              <button className='button-19' role="button" onClick={()=>toHandleDev("Java")}>Get in our courses...</button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Home
