import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"

export default function ForgetPassword(){
    const [loading, setloading] = useState(false)
    let navigate = useNavigate()
    let validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required")
    })

    async function forgetPassword(values){
        try{
            setloading(true)
            let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",{email: values.email})
            toast.success(data.message)
            navigate("/verifyresetcode")
        }
        catch(error){
            console.log(error)
        }
        finally{
            setloading(false)
        }
    }

    let formik = useFormik({
        initialValues: {
            email:""
        },
        validationSchema,
        onSubmit:forgetPassword
    })

    return <>
    <div className="md:w-1/2 mx-auto my-8 py-7">
        <h3 className="text-3xl font-semibold mb-4">Please enter your Email</h3>
        <form onSubmit={formik.handleSubmit} className="mx-auto">
            <div className="relative my-6 group">
            <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder=" " className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-emerald-800 focus:outline-none focus:ring-0 focus:border-emerald-800 peer"/>
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-800 peer-focus:dark:text-emerald-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User e-mail</label>
            </div>
            {formik.errors.email && formik.touched.email && (
                <div role="alert" className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
                    {formik.errors.email}
                </div>
            )}
            {loading ? (<button type="button" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                <i className="fas fa-spin-pulse fa-spinner"></i>
            </button>):(
                <button onClick={()=> navigate("/verifyresetcode")} type="submit" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit</button>
            )}
        </form>
    </div>
    
    </>
}