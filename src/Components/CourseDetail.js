import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FrontEndData from '../JsonFiles/FrontEnd.json';
import BackEndData from '../JsonFiles/BackEnd.json';
import JavaData from '../JsonFiles/Java.json';
import { addProduct } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';
import '../Assets/CSS/courses.css'
const CourseDetail = () => {
  const [data,setData]=useState({});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {category,userId}=useParams();
  console.log(category,userId);
  useEffect(()=>{
      if (category=="Front") {
          return setData(FrontEndData.courses[userId])
      };
      if (category=="Back") {
        return setData(BackEndData.courses[userId])
      };
      if (category=="Java") {
        return setData(JavaData.courses[userId])
      };
  },[]);
  return (
    <div>
        <div className="course-details">
          <div className="container">
            <div className="row">
            <div className=" col-md-2 col-lg-2 col-xl-2 "></div>
            <div className=" col-md-8 col-lg-8 col-xl-8 border border-dark rounded-3 p-5">
            <header>
              <h1>{data.title}</h1>
              <b>Tutor:{data.instructor}</b>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Duration : {data.duration}</span>&nbsp;&nbsp;&nbsp;&nbsp;
               <span>Level : {data.level}</span>
               <p><img src={data.image} alt="Imggg" width='80%'  /></p>
            </header>
            <section>
               <h3>{data.description}</h3>
               <p>{data.details}</p> 
               <p><b>Price : $ {data.price}</b></p>
               <button className="button-77" role="button" onClick={()=>dispatch(addProduct(data))}>AddToCart</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="button-73" role="button" onClick={()=>navigate(`/Courses/${category}`)}>BackToCourses</button>
             </section>
            </div>
            <div className=" col-md-2 col-lg-2 col-xl-2 "></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CourseDetail

