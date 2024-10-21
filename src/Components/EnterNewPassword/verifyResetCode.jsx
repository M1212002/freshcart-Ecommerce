// import React, { useContext, useState } from "react";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useFormik } from "formik";
// import { UserContext } from "../../Context/UserContext";

// export default function EnterNewPassword(){
//     const [loading, setloading] = useState(false)
//     let {setuserLogin} = useContext(UserContext)
//     let navigate = useNavigate()
//     let validationSchema = Yup.object().shape({
//         email: Yup.string()
//         .email("Enter valid E-mail")
//         .required("Email is required"),
//         newPassword: Yup.string()
//         .matches(/^[A-Z]{1}\w{5,15}$/,"Ex:(Ahmed123)")
//         .required("Password is required")
//     })

//     async function changePassword(values){
//         try{
//             setloading(true)
//             let {data} = await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",values)
//             localStorage.setItem("userToken",data.token)
//             setuserLogin(localStorage.getItem("userToken"))
//             navigate("/")
//         }
//         catch(error){
//             console.log(error)
//         }
//         finally{
//             setloading(false)
//         }
//     }

//     let formik = useFormik({
//         initialValues:{
//             email:"",
//             newPassword:""
//         },
//         validationSchema,
//         onSubmit: changePassword,
//     })

//     return <>
//     <div className="md:w-1/2 mx-auto my-8 py-7">
//         <h3 className="text-3xl font-semibold mb-4">Reset your account password</h3>
//         <form className="mx-auto" onSubmit={formik.handleSubmit}>
//             <div className="relative my-6 group">
//                 <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-800 focus:outline-none focus:ring-0 focus:border-emerald-800 peer" placeholder=" "/>
//                 <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-800 peer-focus:dark:text-emerald-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User e-mail</label>
//             </div>
//             {formik.errors.email && formik.touched.email && (<div role="alert" className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
//                 {formik.errors.email}
//             </div>)}

//             <div className="relative my-6 group">
//                 <input type="password" id="newPassword" name="newPassword" value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder=" " className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-800 focus:outline-none focus:ring-0 focus:border-emerald-800 peer"/>
//                 <label htmlFor="newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-800 peer-focus:dark:text-emerald-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
//                     New Password
//                 </label>
//             </div>
//             {formik.errors.newPassword && formik.touched.newPassword && (
//                 <div role="alert" className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
//                     {formik.errors.newPassword}
//                 </div>
//             )}
//             {loading ? (<button type="button" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-800 dark:focus:ring-emerald-800"><i className="fas fa-spinner fa-spin-pulse"></i></button>) : (<button type="submit" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-800 dark:focus:ring-emerald-800">Submit</button>)}
//         </form>
//     </div>
    
//     </>
// }



import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
import toast from "react-hot-toast";

export default function VerifyResetCode() {

  const [apiErr, setApiErr] = useState(null);
  const [userSubmit, setUserSubmit] = useState(false);
  let naviagte = useNavigate();

  async function verifyResetCode(values) {
    try{
      setUserSubmit(true);
      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', values);
      
      console.log(data);
      toast.success(data.message);
      
      // ! navigate('/resetPassword');
      naviagte('/resetpassword');

      setApiErr(null);
      setUserSubmit(false);

    } catch(err) {
      setApiErr(err.response.data.message);
      setUserSubmit(false);
    }
  }

  // ! Library Validation (Yup)
  let  validationSchema = Yup.object().shape({
    resetCode: Yup.string().required('Required'),
   })


  let formik = useFormik({
    initialValues: {
      resetCode: '',
    },
    onSubmit: verifyResetCode,
    validationSchema: validationSchema,
  })

    
  return (
   <>
   <div className='py-16 w-1/2 mx-auto'>
    <h1 className='text-3xl py-6 font-semibold text-center'>Write your ResetCode</h1>


    <form onSubmit={formik.handleSubmit}>
          {apiErr && <div className='px-4 my-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'>{apiErr}</div>}
          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="resetCode">resetCode</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " type="text" id="resetCode" name="resetCode" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.resetCode} />
            {formik.touched.resetCode && formik.errors.resetCode && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 '>{formik.errors.resetCode}</div>}
          </div>

          {userSubmit
           ? <button type="button" className=" mt-10 text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
              <i className='fas fa-spinner fa-spin-pulse'></i>
             </button>
           : <button onClick={()=> naviagte('/resetpassword')} type="submit" className=" mt-10 text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Verify</button>
          }
    </form>
   </div>
  </>
  )
}