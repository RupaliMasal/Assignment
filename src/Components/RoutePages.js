import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Courses from './Courses';
import Cart from './Cart';
import Navbar from './Navbar';
import CourseDetail from './CourseDetail';
import Footer from './Footer';
import Contact from './Contact';

const RoutePages = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Courses' element={<Courses/>}/>
            <Route path='/Courses/:category' element={<Courses/>}/> 
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/CourseDetail/:category/:userId' element={<CourseDetail/>}/> 
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default RoutePages
