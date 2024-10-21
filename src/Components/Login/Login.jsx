import React from 'react'
import style from "./Login.module.css"
import {useFormik} from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './../../Context/UserContext';

export default function Login() {

  let {userLogin,setuserLogin} = useContext(UserContext)
  const navigate = useNavigate()
  const [ApiError, setApiError] = useState("")
  const [isLoading, setisLoading] = useState(false)


  function handleLogin(values){
    setisLoading(true)
    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)
    .then((res)=>{
      setisLoading(false)
      if(res.data.message == "success"){
        localStorage.setItem("userToken",res.data.token)
        setuserLogin(res.data.token)
        navigate("/")
      }
    })
    .catch((res)=>{
      setisLoading(false)
      setApiError(res.response.data.message)
    })
  }


  let validationSchema = Yup.object().shape({
    email : Yup.string().email("invalid email").required("email is required"),
    password : Yup.string().matches(/^[A-Za-z0-9]{6,10}$/,"password must be between 6 and 10 char").required("password is required")
  })

  // function validateForm(values){
  //   let errors = {};

  //   if(!values.name){
  //     errors.name = "name is required";
  //   }
  //   else if (!/^[A-Z][a-z]{3}$/.test(values.name)) {
  //     errors.name = "not valid name"
  //   }

  //   if(!values.phone){
  //     errors.phone = "phone is required"
  //   }else if (!/^01[0125][0-9]{8}$/.test(values.phone)) {
  //     errors.phone = "nolt valid phone number"
  //   }
  //   return errors
  // }


  let formik = useFormik({
    initialValues :{
      email:"",
      password:""
    },
    validationSchema,
    onSubmit : handleLogin
  })


  return <>
 <div className='my-8'>
  {ApiError ? <div className='w-1/2 mx-auto bg-red-600 text-white font-bold rounded-lg p-3'>
  {ApiError}
  </div> : null}
 <h2 className='font-bold text-2xl text-emerald-600 mb-3'>Login now</h2>
<form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto">

  <div className="relative z-0 w-full mb-5 group mt-5">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="email" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
  </div>
  {formik.errors.email && formik.touched.email ?
  <div className="p-4 mb-4 text-sm text-red-600" role="alert">
  {formik.errors.email} 
</div> : null }
  <div className="relative z-0 w-full mb-5 group mt-5">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="password" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password</label>
  </div>
  {formik.errors.password && formik.touched.password ?
  <div className="p-4 mb-4 text-sm text-red-600" role="alert">
  {formik.errors.password} 
</div> : null }
  <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"> {isLoading ? <i className='fas fa-spinner fa-spin'></i> : "Login"}
  </button>
  <br></br>
  <Link to={"/register"}><span className='text-emerald-600 underline ms-5 hover:text-black'>don't you have an account ? Register Now</span></Link>
  <br></br>
  <Link to={"/forgetpassword"} className='mt-4 hover:text-emerald-600 duration-200'>Forget Password?</Link>
  </form> 
  </div> 
  </>
}
