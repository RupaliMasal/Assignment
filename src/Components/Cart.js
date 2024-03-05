import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../Redux/CartSlice';

const Cart = () => {
    const dispatch=useDispatch();
    const cartItems=useSelector(state=>state.Cart.arrProducts);
    let totalPrice=0;
    cartItems.map(({price})=>totalPrice+=price)
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
         { cartItems.length==0 ? <p className='fs-5 fw-bold text-danger pt-5 ps-5'>Nothing is added in the cart ...!!!</p>:
            <table className="table-bordered">
              <tr>
              <th>Sr.No.</th>
              <th>Photo</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
              </tr>
              { cartItems.map(({title,image,price,count},idx)=>(
              <tr key={idx}>
                <td>{idx+1}</td>
                <td><img className='p-2' src={image} alt="imggg"  width='100%' /></td>
                <td>{title}</td>
                <td>$ {price}</td>
                <td><button className='bg-warning' onClick={()=>dispatch(removeProduct(idx))}>RemoveItem</button></td>
              </tr>
              ))}
            </table>}
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 ">
            <div className='text-center border mt-5 ms-5 mb-5 p-3 pb-5 rounded-3 bg-light bg-gradient'>
            <h1>Total :</h1>
            <div>Number of Courses : {cartItems.length}  <br />
                 Price : ${totalPrice}</div><br />
            <div><button  className="btn btn-primary">Checkout</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
