// // // // import axios from "axios";
// // // // import { createContext } from "react";
// // // // import { useContext } from "react";
// // // // import { useEffect } from "react";
// // // // import { useState } from "react";
// // // // import { CartContext } from "./CartContext";
// // // // import toast from "react-hot-toast";
// // // // import { useParams } from "react-router-dom";
// // // // import addToCart from "../Components/Products/Products"

// // // // export let WishlistContext = createContext()

// // // // export default function WishlistContextProvider({children}){
// // // //     let {settokenStatus,tokenStatus} = useContext(CartContext)
// // // //     const [loading, setloading] = useState(false)
// // // //     const [wishlistCount, setwishlistCount] = useState(null)
// // // //     const [wishlist, setwishlist] = useState(null)
// // // //     const [wishlistCheck, setwishlistCheck] = useState([])
// // // //     let headers = {
// // // //         token:localStorage.getItem("userToken")
// // // //     }
// // // //     // const [id, setid] = useState(null)

// // // //     async function getWishlist(){
// // // //         try{
// // // //             setloading(true)
// // // //             let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{headers})
// // // //             setwishlistCount(data.count)
// // // //             setwishlist(data.data)
// // // //             setwishlistCheck(data.data.map((item)=>item.id))
// // // //         }
// // // //         catch(error){
// // // //             setwishlistCount(0)
// // // //             setwishlist(0)
// // // //         }
// // // //         finally{
// // // //             setloading(false)
// // // //         }
// // // //     }

// // // //     async function addToWishlist(id){
// // // //         try{
// // // //             setloading(true)
// // // //             let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{id},{headers})
// // // //             setwishlistCount(data.data.length)
// // // //             setwishlistCheck(data.data)
// // // //             toast.success(data.message)
// // // //         }
// // // //         catch(error){
// // // //             setwishlistCount(0)
// // // //             setwishlistCheck(0)
// // // //         }
// // // //         finally{
// // // //             setloading(false)
// // // //         }
// // // //     }

// // // //     async function removeFromWishlist(id){
// // // //         try{
// // // //             setloading(true)
// // // //             let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers})
// // // //             setwishlistCount(data.data.length)
// // // //             setwishlistCheck(data.data)
// // // //             toast.error(data.message)
// // // //         }
// // // //         catch(error){
// // // //             setwishlistCount(0)
// // // //             setwishlistCheck(0)
// // // //         }
// // // //         finally{
// // // //             setloading(false)
// // // //         }
// // // //     }

// // // //     useEffect(()=>{
// // // //         if(localStorage.getItem("userToken")){
// // // //             settokenStatus(true)
// // // //         }else{
// // // //             settokenStatus(false)
// // // //             setwishlistCount(0)
// // // //         }

// // // //         if(tokenStatus){
// // // //             getWishlist()
// // // // }
// // // // },[tokenStatus])

// // // // return <>

// // // // <WishlistContext.Provider value={{loading,getWishlist,wishlist,wishlistCount,addToWishlist,wishlistCheck,removeFromWishlist}}>
// // // //     {children}
// // // // </WishlistContext.Provider>
// // // // </>
// // // // }



// // // import axios from "axios";
// // // import { createContext, useContext, useEffect, useState } from "react";
// // // import { CartContext } from "./CartContext";
// // // import toast from "react-hot-toast";

// // // export let WishlistContext = createContext();

// // // export default function WishlistContextProvider({children}) {
// // //   let { setTokenStatus, tokenStatus } = useContext(CartContext);
// // //   const [loading, setLoading] = useState(false);
// // //   const [wishlistCount, setWishlistCount] = useState(null);
// // //   const [wishlist, setWishlist] = useState(null);
// // //   const [wishlistCheck, setWishlistCheck] = useState([]);
// // //   let headers = {
// // //     token: localStorage.getItem("userToken"),
// // //   };

// // //   async function getWishlist() {
// // //     try {
// // //       setLoading(true);
// // //       let { data } = await axios.get(
// // //         "https://ecommerce.routemisr.com/api/v1/wishlist",
// // //         {
// // //           headers,
// // //         }
// // //       );

// // //       setWishlistCount([data.data.count]); 
// // //       setWishlist(data.data);
// // //       setWishlistCheck(data.data.map((item) => item.id));
// // //     } catch (error) {
// // //       setWishlistCount(0);
// // //       setWishlist(0);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }
// // //   async function addToWishlist(productId) {
// // //     try {
// // //       console.log("Adding to wishlist", productId);

// // //       setLoading(true);
// // //       let { data } = await axios.post(
// // //         "https://ecommerce.routemisr.com/api/v1/wishlist",
// // //         { productId },
// // //         {
// // //           headers,
// // //         }
// // //       );

// // //       console.log("Wishlist after adding:", data);


// // //       setWishlist(data.data);
// // //       setWishlistCount([data.data.length]); 
// // //       setWishlistCheck(data.data);
// // //       toast.success(data.message);

// // //       getWishlist();



// // //     //   if (response.data.status === "success") {
// // //     //     setWishlist([...wishlist, response.data.product]);
// // //     //     setWishlistCount(wishlistCount + 1); // Increment count
// // //     // }

      
// // //     } catch (error) {
// // //       setWishlistCount(0);
// // //       setWishlistCheck(0);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }
// // //   async function removeFromWishlist(productId) {
// // //     try {
// // //       setLoading(true);
// // //       let { data } = await axios.delete(
// // //         `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,

// // //         {
// // //           headers,
// // //         }
// // //       );
// // //       setWishlist(data.data);
// // //       setWishlistCount([data.data.length]); 
// // //       setWishlistCheck(data.data);
// // //       toast.error(data.message);


// // //       getWishlist();


// // //     //   if (response.data.status === "success") {
// // //     //     setWishlist(wishlist.filter(item => item.id !== id)); // Remove item
// // //     //     setWishlistCount(wishlistCount - 1); // Decrement count
// // //     // }

      
// // //     } catch (error) {
// // //       setWishlistCount(0);
// // //       setWishlistCheck(0);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }

// // //   useEffect(() => {
// // //     if (localStorage.getItem("userToken")) {
// // //       setTokenStatus(true);
// // //     } else {
// // //       setTokenStatus(false);
// // //       setWishlistCount(0);
// // //     }

// // //     if (tokenStatus) {
// // //       console.log("Token status changed:", tokenStatus);
// // //       console.log("Fetching wishlist...");
// // //       getWishlist();
// // //     }
// // //   }, [tokenStatus]);
// // //   return <WishlistContext.Provider
// // //       value={{
// // //         loading,
// // //         getWishlist,
// // //         wishlist,
// // //         wishlistCount,
// // //         addToWishlist,
// // //         wishlistCheck,
// // //         removeFromWishlist,
// // //         tokenStatus,
// // //         setTokenStatus,
// // //         setWishlistCheck,
// // //             }}
// // //     >
// // //       {children}
// // //     </WishlistContext.Provider>
// // // }


// // import axios from "axios";
// // import { createContext, useContext, useEffect, useState } from "react";
// // import toast from "react-hot-toast";
// // import { CartContext } from './CartContext';

// // export let WishlistContext = createContext();

// // export default function WishlistContextProvider({ children }) {
// //   let { setTokenStatus, tokenStatus } = useContext(CartContext);
// //   const [loading, setLoading] = useState(false);
// //   const [wishlistCount, setWishlistCount] = useState(null);
// //   const [wishlist, setWishlist] = useState(null);
// //   const [wishlistCheck, setWishlistCheck] = useState([]);
// //   let headers = {
// //     token: localStorage.getItem("userToken"),
// //   };

//   // async function getWishlist() {
//   //   try {
//   //     setLoading(true);
//   //     let { data } = await axios.get(
//   //       "https://ecommerce.routemisr.com/api/v1/wishlist",
//   //       {
//   //         headers,
//   //       }
//   //     );

//   //     setWishlistCount(data.count);
//   //     setWishlist(data.data);
//   //     setWishlistCheck(data.data.map((item) => item.id));
//   //   } catch (error) {
//   //     setWishlistCount(0);
//   //     setWishlist(0);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }
// //   async function addToWishlist(productId) {
// //     try {
// //       setLoading(true);
// //       let { data } = await axios.post(
// //         "https://ecommerce.routemisr.com/api/v1/wishlist",
// //         { productId },
// //         {
// //           headers,
// //         }
// //       );

// //       setWishlistCount(wishlistCheck.length);
// //       setWishlistCheck(data.data);
// //       toast.success(data.message);
// //     } catch (error) {
// //       setWishlistCount(0);
// //       setWishlistCheck(0);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }
// //   async function removeFromWishlist(productId) {
// //     try {
// //       setLoading(true);
// //       let { data } = await axios.delete(
// //         `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,

// //         {
// //           headers,
// //         }
// //       );

// //       setWishlistCount(wishlistCheck.length);
// //       setWishlistCheck(data.data);
// //       toast.error(data.message);
// //     } catch (error) {
// //       setWishlistCount(0);
// //       setWishlistCheck(0);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   useEffect(() => {
// //     if (localStorage.getItem("userToken")) {
// //       setTokenStatus(true);
// //     } else {
// //       setTokenStatus(false);
// //       setWishlistCount(0);
// //     }

// //     if (tokenStatus) {
// //       getWishlist();
// //     }
// //   }, [tokenStatus]);
// //   return (
// //     <WishlistContext.Provider
// //       value={{
// //         loading,
// //         getWishlist,
// //         wishlist,
// //         wishlistCount,
// //         addToWishlist,
// //         wishlistCheck,
// //         removeFromWishlist,
// //       }}
// //     >
// //       {children}
// //     </WishlistContext.Provider>
// //   );
// // }

// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { CartContext } from './CartContext';
// import Wishlist from "../Components/Wishlist/Wishlist";

// export let WishlistContext = createContext();

// export default function WishlistContextProvider({ children }) {
//   const { setTokenStatus, tokenStatus } = useContext(CartContext);
//   const [loading, setLoading] = useState(false);
//   const [wishlistCount, setWishlistCount] = useState(0);
//   const [wishlistCheck, setWishlistCheck] = useState([]);
//   const [wishlist, setWishlist] = useState(0)
//   let headers = {
//         token: localStorage.getItem("userToken"),
//       };


//       useEffect(() => {
//         // Fetch wishlist when the component mounts or when token status changes
//         async function fetchData(){
//           let { data } = await axios.get(
//             "https://ecommerce.routemisr.com/api/v1/wishlist",
//             {
//             headers,
//          }
//       );}
      
//     if (tokenStatus) {
//       getWishlist();
//      }
// })


//       async function getWishlist() {
//         try {
//           setLoading(true);
//           let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
//             headers: { token: localStorage.getItem("userToken") },
//           });
//           const wishlistIds = data.data.map((item) => item.id);
//           setWishlistCheck(wishlistIds); // Update wishlistCheck
//           setWishlistCount(wishlistIds.length); // Sync count
//         } catch (error) {
//           setWishlistCheck([]);
//           setWishlistCount(0);
//         } finally {
//           setLoading(false);
//         }
//       }


       





//   // async function addToWishlist(productId) {
//   //   try {
//   //     setLoading(true);
//   //     let { data } = await axios.post(
//   //       "https://ecommerce.routemisr.com/api/v1/wishlist",
//   //       { productId },
//   //       { headers: { token: localStorage.getItem("userToken") } }
//   //     );
//   //     const updatedWishlist = data.data.map((item) => item.id);
//   //     setWishlistCheck(updatedWishlist); // Update wishlistCheck
//   //     setWishlistCount(updatedWishlist.length); // Sync count
//   //   } catch (error) {
//   //     console.error(error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }

//   // async function removeFromWishlist(productId) {
//   //   try {
//   //     setLoading(true);
//   //     let { data } = await axios.delete(
//   //       `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
//   //       { headers: { token: localStorage.getItem("userToken") } }
//   //     );
//   //     const updatedWishlist = data.data.map((item) => item.id);
//   //     setWishlistCheck(updatedWishlist); // Update wishlistCheck
//   //     setWishlistCount(updatedWishlist.length); // Sync count
//   //   } catch (error) {
//   //     console.error(error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }


//   async function addToWishlist(productId) {
//     try {
//       setLoading(true);
//       let { data } = await axios.post(
//         "https://ecommerce.routemisr.com/api/v1/wishlist",
//         { productId },
//         { headers }
//       );
  
//       if (data.status === "success") {
//         // Assuming data.data contains the updated wishlist
//         setWishlist(data.data);
//         setWishlistCount(data.data.length); // Update the count
//         setWishlistCheck((prev) => [...prev, productId]); // Add the product ID to wishlistCheck
//         toast.success(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to add to wishlist.");
//     } finally {
//       setLoading(false);
//     }
//   }
  
//   async function removeFromWishlist(productId) {
//     try {
//       setLoading(true);
//       let { data } = await axios.delete(
//         `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
//         { headers }
//       );
  
//       if (data.status === "success") {
//         setWishlist(data.data);
//         setWishlistCount(data.data.length); // Update the count
//         setWishlistCheck((prev) => prev.filter((id) => id !== productId)); // Remove the product ID from wishlistCheck
//         toast.success(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to remove from wishlist.");
//     } finally {
//       setLoading(false);
//     }
//   }
//   // console.log("getWishlist function is available:", getWishlist);


//   return (
//     <WishlistContext.Provider
//       value={{
//         loading,
//         wishlistCount,
//         addToWishlist,
//         removeFromWishlist,
//         wishlistCheck,
//         getWishlist,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// }



import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import toast from "react-hot-toast";

export let WishlistContext = createContext();

export default function WishlistContextProvider({ children }) {
  let { setTokenStatus, tokenStatus } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(null);
  const [wishlist, setWishlist] = useState(null);
  const [wishlistCheck, setWishlistCheck] = useState([]);
  let headers = {
    token: localStorage.getItem("userToken"),
  };

  async function getWishlist() {
    try {
      setLoading(true);
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          headers,
        }
      );

      setWishlistCount(data.count);
      setWishlist(data.data);
      setWishlistCheck(data.data.map((item) => item.id));
    } catch (error) {
      setWishlistCount(0);
      setWishlist(0);
    } finally {
      setLoading(false);
    }
  }
  async function addToWishlist(productId) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        { productId },
        {
          headers,
        }
      );

      setWishlistCount(data.data.length);
      setWishlistCheck(data.data);
      toast.success(data.message);
    } catch (error) {
      setWishlistCount(0);
      setWishlistCheck(0);
    } finally {
      setLoading(false);
    }
  }
  async function removeFromWishlist(productId) {
    try {
      setLoading(true);
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,

        {
          headers,
        }
      );

      setWishlistCount(data.data.length);
      setWishlistCheck(data.data);
      toast.error(data.message);
    } catch (error) {
      setWishlistCount(0);
      setWishlistCheck(0);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setTokenStatus(true);
    } else {
      setTokenStatus(false);
      setWishlistCount(0);
    }

    if (tokenStatus) {
      getWishlist();
    }
  }, [tokenStatus]);
  return (
    <WishlistContext.Provider
      value={{
        loading,
        getWishlist,
        wishlist,
        wishlistCount,
        addToWishlist,
        wishlistCheck,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
