import React, { useEffect, useRef } from 'react'
import style from "./Categories.module.css"
import { useState } from 'react'
import { useMemo } from 'react'
import Loading from '../Loading/Loading'
import axios from 'axios'

export default function Categories(){

 const [categories, setcategories] = useState([])
 const [loading, setloading] = useState(false)
 const [subCategories, setsubCategories] = useState(null)
 const [category, setcategory] = useState(null)
 const [subLoading, setsubLoading] = useState(false)

 async function getCategories(){
  try{
    setloading(true)
    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    setcategories(data.data)
  }
  catch(error){
    console.log(error)
  }
  finally{
    setloading(false)
  }
 }

 async function getSubCategories(categoryId){
  try{
    setsubLoading(true)
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`)
    setsubCategories(data.data)
  }
  catch(error){
    console.log(error)
  }
  finally{
    setsubLoading(false)
  }
 }

 useEffect(()=>{
  getCategories()
 },[])

  
  return <>
    <h2 className='text-3xl my-4'>All Categories</h2>
    {loading ? (<Loading/>) : categories ? (<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {categories.map((category)=>(
        <div onClick={()=>{getSubCategories(category._id); setcategory(category.name)}} key={category._id} className='w-full bg-white border cursor-pointer border-gray-200 rounded-lg shadow hover:shadow-2xl hover:scale-[1.02] duration-500 dark:bg-gray-800 dark:border-gray-700'>
          <div>
            <img src={category.image} loading="lazy" alt="product image" className='rounded-t-lg w-full h-[400px]'/>
          </div>
          <div className='p-5'>
            <h5 className='text-center font-semibold text-xl tracking-tight dark:text-white text-emerald-600'>{category.name}</h5>
          </div>

        </div>
      ))}
    </div>) : ("")}

    {subLoading ? (<Loading/>) : subCategories ? (<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {subCategories.map((category)=>(
        <p key={category._id} className='flex justify-center items-center shadow p-4 rounded-lg text-lg hover:shadow-2xl hover:scale-[1.01] duration-500'>{category.name}</p>
      ))}
    </div>) : ("")}
  </>
}
