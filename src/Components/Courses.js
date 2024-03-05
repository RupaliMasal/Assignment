import React, { useEffect, useState } from 'react';
import FrontEndData from '../JsonFiles/FrontEnd.json';
import BackEndData from '../JsonFiles/BackEnd.json';
import JavaData from '../JsonFiles/Java.json';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeReviewCard from './Card';
import '../Assets/CSS/courses.css'
import IMG from '../Assets/Images/course1.png'

const Courses = () => {
    const [data,setData]=useState();
    const navigate=useNavigate();
    const {category}=useParams();
    useEffect(()=>{
        if (category=="Front") {
            return setData(FrontEndData.courses)
        };
        if (category=="Back") {
          return setData(BackEndData.courses)
        };
        if (category=="Java") {
          return setData(JavaData.courses)
        };
    },[]);
    const toHandleClick=(id)=>{
        navigate(`/CourseDetail/${category}/${id}`)
    }
  return (
    <div className='Card'>
      <div className="container-fluid">
        
      </div>
      {/* hedersection */}
      <header>
      <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
         <img src={IMG} alt="sss" width='100%' height='500px' />
      </div>
      </div>
      </header>
      {/* section */}
      <section>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
        <p>
        {!data ? <div className='alertCard'>
          Go to home page select related courses... <br /> Enjoy learning with Codevidhya...!!! <br /><br /><br />
          <button onClick={()=>navigate('/')}>toHome</button>
           </div>: data.map((item,idx)=>(
          <div className="Card-items"><RecipeReviewCard {...item} funClick={toHandleClick} courseId={idx} key={idx}/></div>
        ))}
        </p>
      </div>
      </section>
     
    </div>
  )
}

export default Courses

