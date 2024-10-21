import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export let CartContext = createContext()


export default function CartContextProvider(props){

    let headers = {token:localStorage.getItem("userToken")}
    const [cartId, setcartId] = useState(0)
    const [numberItems, setnumberItems] = useState(0)
    const [cart, setcart] = useState(null)
    const [cartCount, setcartCount] = useState(null)
    const [laoding, setlaoding] = useState(false)
    const [tokenStatus, setTokenStatus] = useState(false)

    // async function addProductToCart(productId){
    //     return await axios.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:productId},{headers})
    //     .then((res)=>res)
    //     .catch((err)=>err)
    // }

    async function addProductToCart(productId) {
        try {
            const response = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", 
            { productId: productId }, 
            { headers });
    
            toast.success('Product added to cart!');
            setnumberItems(numberItems + 1)
            return response; 
        } catch (error) {
            toast.error('Failed to add product to cart.');
            return error;
        }
    }

    async function getLoggedUserCart(){
        return await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{headers})
        .then((res)=>{
            setnumberItems(res.data.numOfCartItems)
            setcartId(res.data.data._id)
            return res 
        })
        .catch((err)=>err)
    }

    async function updateCartProductQuantity(productId,newCount){
        return await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count: newCount},{headers})
        .then((res)=>res)
        .catch((err)=>err)
    }

    async function deleteCartItem(productId){
        return await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers})
        .then((res)=>res)
        .catch((err)=>err)
    }

    async function checkout(cartId,url,formData){
        return await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,{shippingAddress: formData},{headers})
        .then((res)=>res)
        .catch((err)=>err)
    }

    async function clearCart(){
        try{
            setlaoding(true)
            let {data} = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{headers})
            setcart(null)
            setcartCount(0)
        }
        catch(err){
            console.log(err)
        }
        finally{
           setlaoding(false)
        }
    }

    useEffect(()=>{
        getLoggedUserCart()
    },[])

    return <CartContext.Provider value={{deleteCartItem,updateCartProductQuantity,addProductToCart,getLoggedUserCart,checkout,cartId,setnumberItems,numberItems,clearCart,setTokenStatus,tokenStatus,cartCount,setcartCount,laoding,cart}}>
        {props.children}
    </CartContext.Provider>
}