// import axios from "axios";
// import { useFormik } from "formik";
// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Loading from './../Loading/Loading';
// import { CartContext } from "../../Context/CartContext";
// import { WishlistContext } from "../../Context/WishlistContext";
// import toast from "react-hot-toast";


// export default function AllProducts(){
//     let {addProductToCart,loading, setnumberItems, numberItems,tokenStatus} = useContext(CartContext)
//     const {addToWishlist , wishlistCheck , removeFromWishlist, wishlistCount, setwishlistCount} = useContext(WishlistContext)
//     const [products, setproducts] = useState([])
//     const [search, setsearch] = useState([])
//     const [load, setload] = useState(false)


//     async function addToCart(id){
//         // setcurrentId(id)
//         setload(true)
//         let response = await addProductToCart(id)
//         console.log(response.data)
    
//         if(response.data.status == "success"){
//           setnumberItems(numberItems + 1)
//           toast.success(response.data.message)
//           setload(false)
//         }
//         else{
//           toast.error(response.data.message)
//           setload(false)
//         }
//       }
    
//     //   if(isError){
//     //     return <h3>{error.message}</h3>
//     //   }
    
//     //   if(load){
//     //     return <div className="spinner"></div>
//     //   }

//     // async function removeFromWish(id){
//     //     // setcurrentId(id)
//     //     // setload(true)
//     //     let response = await removeFromWishlist(id)
//     //     console.log(response.data)
    
//     //     if(response.data.status == "success"){
//     //       setwishlistCount(wishlistCount - 1)
//     //       toast.success(response.data.message)
//     //     //   setload(false)
//     //     }
//     //     else{
//     //       toast.error(response.data.message)
//     //     //   setload(false)
//     //     }
//     //   }

//     async function removeFromWish(id) {
//         try {
//           setload(true); // Show loading state
//           let response = await removeFromWishlist(id); // Call context function to remove item
//           console.log(response.data);
      
//           if (response.data.status === "success") {
//             // Update wishlist and count in context
//             getWishlist(); // Or update directly, depending on your implementation
//             toast.success(response.data.message);
//           } else {
//             toast.error(response.data.message);
//           }
//         } catch (error) {
//           console.error(error);
//           toast.error("Something went wrong!");
//         } finally {
//           setload(false); // Stop loading state
//         }
//       }

//       async function addToWish(id) {
//         try {
//           setload(true); // Show loading state
//           let response = await addToWishlist(id); // Call context function to add item
//           console.log(response.data);
      
//           if (response.data.status === "success") {
//             // Update wishlist and count in context
//             getWishlist(); // Or update directly, depending on your implementation
//             toast.success(response.data.message);
//           } else {
//             toast.error(response.data.message);
//           }
//         } catch (error) {
//           console.error(error);
//           toast.error("Something went wrong!");
//         } finally {
//           setload(false); // Stop loading state
//         }
//       }
      
      


//     //   async function addToWish(id){
//     //     // setcurrentId(id)
//     //     setload(true)
//     //     let response = await addToWishlist(id)
//     //     console.log(response.data)
    
//     //     if(response.data.status == "success"){
//     //       setwishlistCount(wishlistCount + 1)
//     //       toast.success(response.data.message)
//     //       setload(false)
//     //     }
//     //     else{
//     //       toast.error(response.data.message)
//     //       setload(false)
//     //     }
//     //   }
    
//     //   if(isError){
//     //     return <h3>{error.message}</h3>
//     //   }
    
//     //   if(load){
//     //     return <div className="spinner"></div>
//     //   }
    

//     async function getProducts(){
//         try{
//             setload(true)
//             let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
//             setproducts(data.data)
//             setsearch(data.data)
//         }
//         catch(error){
//             console.log(error)
//         }
//         finally{
//             setload(false)
//         }
//     }

//     function searchProducts(value){
//         if(value){
//             setsearch(
//                 products.filter((product)=>product.title.toLowerCase().includes(value.toLowerCase()))
//             )
           
//         } else{
//                 setsearch(products)
//         }
//     }

//     useEffect(()=>{
//         getProducts()
//     },[wishlistCheck])

//     return <>
//     {!load ? (
//         <>
//         <form className="mx-auto mb-4 md:w-1/2">
//             <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
//                 Search
//             </label>
//             <div className="relative">
//                 <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"
//                 >
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                 </svg>
//                 </div>
//                 <input onChange={(e)=> searchProducts(e.target.value)} type="search" id="search" placeholder="Search products" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"/>
//             </div>
//         </form>

//         <div className="products">
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
//                 {search.map((product)=>
//                 <div key={product.id} className="product relative duration-500 cursor-pointer flex flex-col justify-between">
//                     {/* <i onClick={()=>{
//                         wishlistCheck.some((i)=> i === product.id) ? removeFromWish(product.id) : addToWish(product.id)}} className={`fa-solid fa-heart ${wishlistCheck.some((i)=> i == product.id) ? "text-red-500" : "hover:text-red-500"} absolute top-2 right-2 duration-300 text-2xl`}>
//                     </i> */}

//                         <i
//                          onClick={() => {
//     // Check if product is in wishlistCheck and call add or remove function
//                         if (wishlistCheck.some((i) => i === product.id)) {
//                              removeFromWish(product.id);
//                          } else {
//                               addToWish(product.id);
//                             }
//                           }}
//                          className={`fa-solid fa-heart ${wishlistCheck.some((i) => i === product.id) ? 'text-red-500' : 'hover:text-red-500'} absolute top-2 right-2 duration-300 text-2xl`}
// >
//                         </i>
                   
//                     <Link to={`details/${product.id}`}>
//                         <div>
//                             <img src={product.imageCover} loading="lazy" className="w-full block" alt={product.title}/>
//                         </div>
//                         <div className="p-2">
//                             <h2 className="text-emerald-600">{product.category.name}</h2>
//                             <p>{product.description.split(" ").slice(0,3).join(" ")}</p>
//                             <div className="rating flex justify-between items-center my-2">
//                                 <span>{product.price} EGP</span>
//                                 <span><i className="fa-solid fa-star rating-color">{product.ratingsAverage}</i></span>
//                             </div>
//                         </div>
//                     </Link>
//                     <div className="p-2 pt-0">
//                         {loading ? (<button className="bg-emerald-500 w-full p-2 rounded text-white btn" type="button"><i className="fas fa-spinner fa-spin-pulse"></i></button>) : (<button onClick={()=> addToCart(product.id)} className="bg-emerald-500 w-full p-2 rounded text-white btn">Add to cart</button>)}
//                     </div>
//                 </div>)}
//             </div>
//         </div>
//         </>
//     ) : (<Loading/>)}
//     </>
       
// }







import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { CartContext } from "../../Context/CartContext";
import { useFormik } from "formik";
import WishlistContextProvider, { WishlistContext } from './../../Context/WishlistContext';

export default function AllProducts() {
  let { addProductToCart, loading } = useContext(CartContext);
  const { addToWishlist, wishlistCheck, removeFromWishlist, wishlistCount} =
    useContext(WishlistContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [load, setLoad] = useState(false);
  const [product, setproduct] = useState(0)

  const handleWishlistClick = () => {
    if (wishlistCheck.includes(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  async function getProducts() {
    try {
      setLoad(true);
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      setProducts(data.data);
      setSearch(data.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  function searchProducts(value) {
    if (value) {
      setSearch(
        products.filter((product) =>
          product.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setSearch(products)
    }
  }

  async function removeFromWish(id){
    // setcurrentId(id)
    // setload(true)
    let response = await removeFromWishlist(id)
    console.log(response.data)

    if(response.data.status == "success"){
      setwishlistCount(wishlistCheck.length)
      toast.success(response.data.message)
    //   setload(false)
    }
    else{
      toast.error(response.data.message)
    //   setload(false)
    }
  }

  
  async function addToWish(id){
    // setcurrentId(id)
    // setload(true)
    let response = await addToWishlist(id)
    console.log(response.data)
  

    if(response.data.status == "success"){
      setwishlistCount(wishlistCheck.length)
      toast.success(response.data.message)
    //   setload(false)
    }
    else{
      toast.error(response.data.message)
    //   setload(false)
    }
}
  

  useEffect(() => {
    getProducts();
  }, [wishlistCheck]);
  return (
    <>

  
      {!load ? (
        <>
          <form className="mx-auto md:w-1/2 mb-4">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => searchProducts(e.target.value)}
                type="search"
                id="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search products"
              />
            </div>
          </form>

          <div className="products">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {search.map((product) => (
                <div
                  key={product.id}
                  className="product relative duration-500 cursor-pointer flex flex-col justify-between"
                >
                  <i
                    onClick={() => {
                      wishlistCheck.some((i) => i === product.id)
                        ? removeFromWishlist(product.id)
                        : addToWishlist(product.id);
                    }}
                    className={`fa-solid fa-heart ${
                      wishlistCheck.some((i) => i == product.id)
                        ? "text-red-500 "
                        : "hover:text-red-500"
                    } absolute top-2 right-2 duration-300 text-2xl`}
                  ></i>

            {/* {wishlistCheck?.includes(product.id) ? <i onClick={() => removeFromWishlist(product.id)} className="fa-solid fa-heart text-2xl absolute top-10 right-5 text-red-600"></i>
            : <i onClick={() => addToWishlist(product.id)} className="fa-regular fa-heart text-2xl absolute top-10 right-5" ></i>} */}

            {/* <i
                onClick={handleWishlistClick}
                className={`fa-solid fa-heart ${wishlistCheck.includes(product.id) ? "text-red-500" : "hover:text-red-500"} absolute top-2 right-2 duration-300 text-2xl`}
             ></i> */}

                  <Link to={`details/${product.id}`}>
                    <div>
                      <img
                        loading="lazy"
                        src={product.imageCover}
                        className="w-full block"
                        alt={product.title}
                      />
                    </div>
                    <div className="p-2">
                      <h2 className="text-green-600">
                        {product.category.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {product.description.split(" ").slice(0, 3).join(" ")}
                      </p>
                      <div className="rating flex justify-between items-center my-2 ">
                        <span>{product.price}EGP</span>
                        <span>
                          <i className="fa-solid fa-star rating-color"></i>
                          {product.ratingsAverage}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-2 pt-0">
                    {loading ? (
                      <button
                        type="button"
                        className="bg-green-500 w-full p-2 rounded text-white btn"
                      >
                        <i className="fas fa-spinner fa-spin-pulse"></i>
                      </button>
                    ) : (
                      <button
                        onClick={() => addProductToCart(product.id)}
                        className="bg-green-500 w-full p-2 rounded text-white btn"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
       
    </>
  );
}