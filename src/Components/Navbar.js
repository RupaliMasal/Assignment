import React, { useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import '../Assets/CSS/courses.css'
import Img1 from '../Assets/Images/basket-cart.png';
import Img2 from '../Assets/Images/codevidhya_logo.png';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
     const [show,setShow]=useState(false)
     const numItems=useSelector(state=>state.Cart.arrProducts.length);   
     const navigate=useNavigate();
     const toHandleClick=()=>{
      setShow(!show)
     }
  return (
    <div>
        <div className="container-Fluid">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12">
          <div className='navParent'>
      <nav>
        <ul>
           <li id='nav-menu1' onClick={toHandleClick}>
           <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
           </li>
           <li><img src={Img2} alt="logo" width='20%' /></li>         
           <li id='nav-menu2'><NavLink className='navLink' to='/'>Home</NavLink></li>
           <li id='nav-menu2'><NavLink className='navLink' to='/Courses'>Courses</NavLink></li>
          <li id='nav-menu2'><NavLink className='navLink' to='/Contact'>Contact</NavLink></li>     
        </ul>
      </nav>      
      <div className='navCart' onClick={()=>navigate('/Cart')} >        
        <span><img src={Img1} alt="cartIcon" height={"30px"} /> : {numItems}</span>
      </div>
      </div>
          </div>
        </div>
        {show && <div className="row">
          <table className='table table-striped nav-table'>
            <tr>
              <td><NavLink onClick={toHandleClick} className='navLink' to='/'>Home</NavLink></td>
            </tr>
            <tr>
              <td><NavLink onClick={toHandleClick} className='navLink' to='/Courses'>Courses</NavLink></td>
            </tr>
            <tr>
              <td><NavLink onClick={toHandleClick} className='navLink' to='/Contact'>Contact</NavLink></td>
            </tr>
          </table>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
