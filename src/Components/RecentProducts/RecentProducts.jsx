import React from 'react'
import style from "./RecentProducts.module.css"
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useProducts from '../../Hooks/useProducts'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import toast, { Toaster } from 'react-hot-toast';

export default function RecentProducts() {

  let {data, isError, error, isLoading} = useProducts()
  let {addProductToCart,setnumberItems,numberItems} = useContext(CartContext)
  const [loading, setloading] = useState(false)
  const [currentId, setcurrentId] = useState(0)

  async function addToCart(id){
    setcurrentId(id)
    setloading(true)
    let response = await addProductToCart(id)
    console.log(response.data)

    if(response.data.status == "success"){
      setnumberItems(numberItems + 1)
      toast.success(response.data.message)
      setloading(false)
    }
    else{
      toast.error(response.data.message)
      setloading(false)
    }
  }

  if(isError){
    return <h3>{error.message}</h3>
  }

  if(isLoading){
    return <div className="spinner"></div>
  }

  // const [products, setproducts] = useState([])
  

  // function getProducts(){
  //   axios.get("https://ecommerce.routemisr.com/api/v1/products")
  //   .then((res)=>{
  //     setproducts(res.data.data)
  //   })
  //   .catch((res)=>{})
  // }

  // useEffect(()=>{
  //   getProducts()
  // },[])


  return <>
  <div className="row">
  {data?.data?.data.map((product)=>(<div key={product.id} className='w-1/6'>
 
 <div className="product my-2 p-2">
 <Link to={`productdetails/${product.id}/${product.category.name}`}>
    <img src={product.imageCover} className='w-full' alt={product.title} />
    <h3 className='text-emerald-600'>{product.category.name}</h3>
    <h3 className='font-semibold mb-1'>{product.title.split(" ").slice(0,2).join(" ")}</h3>
    <div className='flex justify-between p-3'>
      <span>{product.price} EGP</span>
      <span><i className='fas fa-star text-yellow-400'></i>{product.ratingsAverage}</span>
    </div>
    </Link>
    <button onClick={()=>addToCart(product.id)} className='btn'>{loading && currentId == product.id ? <i className='fas fa-spinner fa-spin'></i> : "Add To Cart"}</button>
    </div>
  </div>))}
  </div>
  
  </>
}
