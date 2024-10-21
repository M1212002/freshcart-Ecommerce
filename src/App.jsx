import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Components/Products/Products';
import Brands from './Components/Brands/Brands';
import Categories from './Components/Categories/Categories';
import Cart from './Components/Cart/Cart';
import Home from '././Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/Notfound/Notfound';
import Layout from './Components/Layout/Layout'
import "@fortawesome/fontawesome-free/css/all.min.css"
import CounterContextProvider from './Context/CounterContext'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast';
import Checkout from './Components/Checkout/Checkout';
import Allorders from './Components/Allorders/Allorders'
import WishlistContextProvider from './Context/WishlistContext'
import Wishlist from './Components/Wishlist/Wishlist'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import EnterNewPassword from './Components/EnterNewPassword/verifyResetCode';

let query = new QueryClient()

let x = createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:"cart",element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:"categories",element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:"brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:"checkout",element:<ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:"productdetails/:id/:category",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:"products/productdetails/:id/:category",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:"products/details/:id",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:"products",element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:"allorders",element:<ProtectedRoute><Allorders/></ProtectedRoute>},
    {path:"forgetpassword",element:<ForgetPassword/>},
    {path:"resetpassword",element:<ResetPassword/>},
    {path:"verifyresetcode",element:<EnterNewPassword/>},
    {path:"wishlist",element:<ProtectedRoute><Wishlist/></ProtectedRoute>},
    {path:"login",element:<Login/>},
    {path:"register",element:<Register/>},
    {path:"*",element:<Notfound/>}
  ]}
])


export default function App() {
  const [count, setCount] = useState(0)

  return <>
  <UserContextProvider>
    <CounterContextProvider>
      <QueryClientProvider client={query}>
        <CartContextProvider>
          <WishlistContextProvider>
          <RouterProvider router={x}></RouterProvider>
          <Toaster/>
          </WishlistContextProvider>
        </CartContextProvider>
      <ReactQueryDevtools/>
      </QueryClientProvider>
  </CounterContextProvider>
  </UserContextProvider>
  </>
}
