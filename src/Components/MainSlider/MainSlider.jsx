import React from 'react'
import style from "./MainSlider.module.css"
import slide1 from "../../../public/WhatsApp Image 2024-08-03 at 3.04.37 PM.jpeg"
import slide2 from "../../../public/WhatsApp Image 2024-08-03 at 3.04.39 PM (1).jpeg"
import slide3 from "../../../public/WhatsApp Image 2024-08-03 at 3.04.39 PM.jpeg"
import slide4 from "../../../public/WhatsApp Image 2024-08-03 at 3.04.40 PM (1).jpeg"
import slide5 from "../../../public/WhatsApp Image 2024-08-03 at 3.04.40 PM (2).jpeg"
import Slider from "react-slick";

export default function MainSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };


  return <>

  <div className="row my-5">
    <div className="w-3/4">
    <Slider {...settings}>
  <img src={slide1} className='w-full h-[400px] object-cover' alt="" />
  <img src={slide3} className='w-full h-[400px] object-cover' alt="" />
  <img src={slide4} className='w-full h-[400px] object-cover' alt="" />
  </Slider>
    </div>
    <div className="w-1/4">
  <img src={slide2} className='w-full h-[200px]' alt="" />
  <img src={slide5} className='w-full h-[200px]' alt="" />
    </div>
  </div>
   

   
  
  </>
}
