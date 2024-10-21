import React from 'react'
import style from "./Home.module.css"
import { useContext } from 'react'
import RecentProducts from '../RecentProducts/RecentProducts'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import MainSlider from '../MainSlider/MainSlider'
import AllProducts from './../AllProducts/AllProducts';

export default function Home() {
  return <>
  <MainSlider/>
  <CategoriesSlider/>
  <AllProducts/>
  
  </>
}
