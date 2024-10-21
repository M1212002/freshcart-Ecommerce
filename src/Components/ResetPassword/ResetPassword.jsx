// import axios from "axios";
// import { useFormik } from "formik";
// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import * as Yup from "yup"

// export default function ResetPassword(){
//     const [loading, setloading] = useState(false)
//     let navigate = useNavigate()
//     let validationSchema = Yup.object().shape({
//         resetCode : Yup.string().required("Email is required")
//     })

//     async function resetPassword(values){
//         try{
//             setloading(true)
//             let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",{resetCode:values.resetCode})
//             toast.success(data.status)
//             navigate("/enternewpassword")
//                 }
//         catch(error){
//             console.log(error)
//         }
//         finally{
//             setloading(false)
//         }
//     }

//     let formik = useFormik({
//         initialValues:{resetCode:""},
//         validationSchema,
//         onSubmit:resetPassword
//     })

//     return <>
//     <div className="md:w-1/2 mx-auto my-8 py-7">
//         <h3 className="text-3xl font-semibold mb-4">Please enter the Reset Code</h3>
//         <form onSubmit={formik.handleSubmit} className="mx-auto">
//             <div className="relative   my-6 group">
//                 <input type="text" name="resetCode" id="resetCode" value={formik.values.resetCode} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder=" " className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"/>
//                 <label htmlFor="resetCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//                     Reset Code
//                 </label>
//             </div>
//             {formik.errors.resetCode && formik.touched.resetCode && (
//                 <div role="alert" className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
//                     {formik.errors.resetCode}
//                 </div>
//             )}
//             {loading ? (
//                 <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-500 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
//                     <i className="fas fa-spinner fa-spin-pulse"></i>
//                 </button>
//             ) : (
//                 <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-500 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
//                     Submit
//                 </button>
//             )}
//         </form>
//     </div>
//     </>
// }


import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

export default function ResetPassword() {

  const [apiErr, setApiErr] = useState(null);
  const [userSubmit, setUserSubmit] = useState(false);
  let naviagte = useNavigate();
  let {setUserData} = useContext(UserContext);

  async function resetPassword(values) {
    try{
      setUserSubmit(true);
      let {data} = await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', values);

      console.log(data);
      // toast.success(data.message);
      
      // ! navigate('/login');
      naviagte('/login');

      setApiErr(null);
      setUserSubmit(false);

    } catch(err) {
      setApiErr(err.response.data?.message);
      setUserSubmit(false);
    }
  }


  let  validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    newPassword: Yup.string().matches(/^[A-Za-z0-9]{6,10}$/,"password must be between 6 and 10 char").required("password is required")
  })


  let formik = useFormik({
    initialValues: {
      email: '',
      newPassword: '',
    },
    onSubmit: resetPassword,
    validationSchema: validationSchema,
  })

    
  return (
   <>
   <div className='py-8 w-1/2 mx-auto'>
    <h1 className='text-3xl py-6 font-semibold text-center'>ResetPassword</h1>


    <form onSubmit={formik.handleSubmit}>
          {apiErr && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'>{apiErr}</div>}
    
          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="email">Email</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " type="email" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
            {formik.touched.email && formik.errors.email && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 '>{formik.errors.email}</div>}
          </div>

          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="password">newPassword</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " type="password" id="newPassword" name="newPassword" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.newPassword} />
            {formik.touched.newPassword && formik.errors.newPassword && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 '>{formik.errors.newPassword}</div>}
          </div>

          {userSubmit
           ? <button type="button" className=" mt-10 text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
              <i className='fas fa-spinner fa-spin-pulse'></i>
             </button>
           : <button onClick={()=> naviagte('/login')} type="submit" className=" mt-10 text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Reset Password</button>
          }
    </form>
   </div>
  </>
  )
}