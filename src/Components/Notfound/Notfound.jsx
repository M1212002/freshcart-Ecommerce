import React from 'react'
import style from "./Notfound.module.css"
import error from "../../../public/error.svg"

export default function Notfound() {
  return <img src={error} className='mx-auto my-4' alt=""/>
}
