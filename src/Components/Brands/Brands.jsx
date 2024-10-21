import React from 'react'
import style from "./Brands.module.scss"
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Loading from '../Loading/Loading'
import "react-responsive-modal/styles.css"
import {Modal} from "react-responsive-modal"

export default function Brands() {

  const [brands, setbrands] = useState([])
  const [loading, setloading] = useState(false)
  const [brand, setbrand] = useState(null)
  const [open, setopen] = useState(false)
  const [brandLoading, setbrandLoading] = useState(false)
  const onOpenModal = () => setopen(true)
  const onCloseModal = () => setopen(false)


  async function getBrands(){
    try{
      setloading(true)
      let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
      setbrands(data.data)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setloading(false)
    }
  }

  async function getSpecificBrand(brandId){
    try{
      setbrandLoading(true)
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)
      setbrand(data.data)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setbrandLoading(false)
    }
  }

  useEffect(()=>{getBrands()},[])


  return <>
  <h2 className='text-3xl my-4'>All Brands</h2>
  {loading ? (<Loading/> ) : brands ? (<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
    {brands.map((brand)=> (<div 
      onClick={()=>{onOpenModal();
      getSpecificBrand(brand._id)
      }}
      key={brand._id}
      className="w-full bg-white border cursor-pointer border-gray-200 rounded-lg shadow hover:shadow-2xl hover:scale-[1.02] duration-500 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img loading="lazy" className='rounded-t-lg w-full' src={brand.image} alt="product image"/>
        </div>
        <div className='p-5'>
          <h5 className='tracking-tight font-semibold text-xl text-black dark:text-white text-center'>{brand.name}</h5>
        </div>
    </div>))}
  </div>) : ("")}

  {brand ? (<Modal open={open} onClose={onCloseModal} showCloseIcon={true} blockScroll={false} animationDuration={500} center >{brandLoading ? (<Loading/>) : (<div className='flex justify-center items-center flex-col md:flex-row'>
      <div className='p-5'>
      <h5 className='text-3xl text-emerald-600 font-semibold'>{brand.name}</h5>
      <p className='text-lg text-gray-500'>{brand.slug}</p>
      </div>
      <img src={brand.image} className='w-full' alt="" />
  </div>)}</Modal>) : ("")}
  
  </>
}
