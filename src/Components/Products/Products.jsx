// import React from 'react'
// import style from "./Products.module.css"
// import axios from 'axios'
// import { useQuery } from '@tanstack/react-query'
// import { Link } from 'react-router-dom'
// import useProducts from '../../Hooks/useProducts'
// import { CartContext}from '../../Context/CartContext'
// import toast from 'react-hot-toast'
// import { useContext } from 'react'
// import WishlistContextProvider, { WishlistContext } from '../../Context/WishlistContext'
// import {addToWishlist} from "../../Context/WishlistContext"

// export default function Products() {
  

//   let {data, isError, error, isLoading} = useProducts()
//   let {addProductToCart} = useContext(CartContext)
//   // let {id} = useContext(WishlistContextProvider)

//   async function addToCart(id){
//     let response = await addProductToCart(id)
//     console.log(response.data)

//     if(response.data.status == "success"){
//       toast.success(response.data.message)
//     }
//     else{
//       toast.error(response.data.message)
//     }
//   }

//   if(isError){
//     return <h3>{error.message}</h3>
//   }

//   if(isLoading){
//     return <div className="spinner"></div>
//   }

//   // const [products, setproducts] = useState([])
  

//   // function getProducts(){
//   //   axios.get("https://ecommerce.routemisr.com/api/v1/products")
//   //   .then((res)=>{
//   //     setproducts(res.data.data)
//   //   })
//   //   .catch((res)=>{})
//   // }

//   // useEffect(()=>{
//   //   getProducts()
//   // },[])


//   return <>
//   <div className="row">
//   {data?.data?.data.map((product)=>(<div key={product.id} className='w-1/6'>
 
//  <div className="product my-2 p-2">
//  <Link to={`productdetails/${product.id}/${product.category.name}`}>
//     <img src={product.imageCover} className='w-full' alt={product.title} />
//     <h3 className='text-emerald-600'>{product.category.name}</h3>
//     <h3 className='font-semibold mb-1'>{product.title.split(" ").slice(0,2).join(" ")}</h3>
//     <div className='flex justify-between p-3'>
//       <span>{product.price} EGP</span>
//       <span><i className='fas fa-star text-yellow-400'></i>{product.ratingsAverage}</span>
//     </div>
//     </Link>
//     <button onClick={()=>addToCart(product.id)} className='btn'>Add To Cart</button>
//     </div>
//   </div>))}
//   </div>
  
//   </>
// }

import React from "react";
import AllProducts from "../AllProducts/AllProducts";
import WishlistContextProvider from "../../Context/WishlistContext";

export default function Products(){
  return <>
  <h2 className="text-3xl my-4">All Products</h2>
  <div className="py-4">
    <AllProducts/>
  </div>
  </>
}
