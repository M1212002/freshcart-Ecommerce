// import React, { useContext } from 'react'
// import style from "./Navbar.module.css"
// import { Link } from 'react-router-dom'
// import logo from "./../../../public/freshcart-logo.svg"
// import { UserContext } from './../../Context/UserContext';
// import { useNavigate } from 'react-router-dom';
// import { CartContext } from '../../Context/CartContext';
// import { WishlistContext } from '../../Context/WishlistContext';
// import Cart from '../Cart/Cart';
// import Wishlist from '../Wishlist/Wishlist';

// export default function Navbar() {

//   let {userLogin,setuserLogin} = useContext(UserContext)
//   let navigate = useNavigate()
//   let {numberItems ,tokenStatus} = useContext(CartContext)
//   let {wishlistCount} = useContext(WishlistContext)

//   function signout(){
//     localStorage.removeItem("userToken")
//     setuserLogin(null)
//     navigate("/login")
//   }


//   console.log("Navbar wishlist count:", wishlistCount);

//   return <>
  

//             <nav className="border-gray-200 bg-slate-200 fixed top-0 right-0 left-0 z-50">
//     <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl p-4">
//        <div className='flex items-center gap-5'>
//        <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src={logo} width="110px" className="h-8" alt="Freshcart Logo" />
           
//         </Link>

//         {userLogin != null ? <>
//           <ul className='flex gap-4'>
//               <li><Link className='text-gray-700 hover:text-emerald-600 duration-200' to="">Home</Link></li>
//               <li><Link className='text-gray-700 hover:text-emerald-600 duration-200' to="products">Products</Link></li>
//               <li><Link className='text-gray-700 hover:text-emerald-600 duration-200' to="categories">Categories</Link></li>
//               <li><Link className='text-gray-700 hover:text-emerald-600 duration-200' to="brands">Brands</Link></li>
//               <li><Link className='text-gray-700 relative hover:text-emerald-600 duration-200' to="cart">Cart<i className="fa-solid fa-xl fa-cart-shopping relative text-emerald-600"><span className="absolute -top-[11px] left-1/2 -translate-x-1/2 text-xs text-white">{tokenStatus && numberItems ? numberItems : 0}</span></i></Link></li>
//               <li><Link className='text-gray-700 hover:text-emerald-600 duration-200' to="wishlist">Wishlist<i className="ms-2 fa-solid fa-2xl fa-heart text-red-500 text-xl relative"><span className="absolute top-[6px] left-1/2 -translate-x-1/2 text-xs text-white">{tokenStatus && wishlistCount ? wishlistCount : 0}</span></i></Link></li>
//             </ul>
        
//         </> : null}

//        </div>
//         <div className="flex items-center space-x-6 rtl:space-x-reverse">
//           <div className="icons flex gap-4">
//           <i className ="fa-brands fa-facebook hover:text-emerald-600 duration-200 cursor-pointer"></i>
//           <i className ="fa-brands fa-linkedin hover:text-emerald-600 duration-200 cursor-pointer"></i>
//           <i className="fa-brands fa-youtube hover:text-emerald-600 duration-200 cursor-pointer"></i>
//           <i className="fa-brands fa-tiktok hover:text-emerald-600 duration-200 cursor-pointer"></i>
//           <i className="fa-brands fa-twitter hover:text-emerald-600 duration-200 cursor-pointer"></i>

//           </div>
//           <div className="links flex gap-4">
            
//             {userLogin != null ? ( <span onClick={signout} className="text-sm cursor-pointer hover:text-emerald-600 duration-200">SignOut</span> ) : (<> <Link to="login" className="text-sm hover:text-emerald-600 duration-200">Login</Link>
//               <Link to="register" className="text-sm hover:text-emerald-600 duration-200">Register</Link>
            
//             </>)}
          
//           </div>
            
//         </div>
//     </div>
//             </nav>
  
//   </>
// }


import React, { useContext, useState } from "react";
import logo from "../../../public/freshcart-logo.svg"
import { NavLink, useNavigate } from "react-router-dom";
import { WishlistContext } from './../../Context/WishlistContext';
import { CartContext } from './../../Context/CartContext';
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useEffect } from "react";

export default function Navbar() {
  let {userLogin,setuserLogin} = useContext(UserContext)
  let { cartCount, setTokenStatus, tokenStatus, numberItems} = useContext(CartContext);
  let { wishlistCount, getWishlist } = useContext(WishlistContext);
  let navigate = useNavigate();

    function signout(){
    localStorage.removeItem("userToken")
    setuserLogin(null)
    navigate("/login")
  }


  return <>
  

               <nav className="border-gray-200 bg-slate-200 fixed top-0 right-0 left-0 z-50">
       <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className='flex items-center gap-5'>
          <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
               <img src={logo} width="110px" className="h-8" alt="Freshcart Logo" />
             
           </Link>
  
           {userLogin != null ? <>
             <ul className='flex gap-4'>
                 <li><Link className='text-gray-700 hover:text-emerald-600 duration-200' to="">Home</Link></li>
                 <li><Link className='text-gray-700 hover:text-emerald-600 duration-200' to="products">Products</Link></li>
                 <li><Link className='text-gray-700 hover:text-emerald-600 duration-200' to="categories">Categories</Link></li>
                 <li><Link className='text-gray-700 hover:text-emerald-600 duration-200' to="brands">Brands</Link></li>
                 <li><Link className='text-gray-700 relative hover:text-emerald-600 duration-200' to="cart">Cart<i className="fa-solid fa-xl fa-cart-shopping relative text-emerald-600"><span className="absolute -top-[11px] left-1/2 -translate-x-1/2 text-xs text-white">{tokenStatus && numberItems ? numberItems : 0}</span></i></Link></li>
                 <li><Link className='text-gray-700 hover:text-emerald-600 duration-200' to="wishlist">Wishlist<i className="ms-2 fa-solid fa-2xl fa-heart text-red-500 text-xl relative"><span className="absolute top-[6px] left-1/2 -translate-x-1/2 text-xs text-white">{wishlistCount ? wishlistCount : 0}</span></i></Link></li>
               </ul>
          
           </> : null}
  
          </div>
           <div className="flex items-center space-x-6 rtl:space-x-reverse">
             <div className="icons flex gap-4">
             <i className ="fa-brands fa-facebook hover:text-emerald-600 duration-200 cursor-pointer"></i>
             <i className ="fa-brands fa-linkedin hover:text-emerald-600 duration-200 cursor-pointer"></i>
             <i className="fa-brands fa-youtube hover:text-emerald-600 duration-200 cursor-pointer"></i>
             <i className="fa-brands fa-tiktok hover:text-emerald-600 duration-200 cursor-pointer"></i>
             <i className="fa-brands fa-twitter hover:text-emerald-600 duration-200 cursor-pointer"></i>
  
             </div>
                <div className="links flex gap-4">
              
               {userLogin != null ? ( <span onClick={signout} className="text-sm cursor-pointer hover:text-emerald-600 duration-200">SignOut</span> ) : (<> <Link to="login" className="text-sm hover:text-emerald-600 duration-200">Login</Link>
                 <Link to="register" className="text-sm hover:text-emerald-600 duration-200">Register</Link>
              
               </>)}
            
            </div>
              
          </div>
      </div>
             </nav>
    
   </>
}
