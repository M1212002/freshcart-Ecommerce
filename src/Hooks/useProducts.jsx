import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function useProducts() {
    function getProducts(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/products")
      }
    
    
      let productInfo = useQuery({
        queryKey: ["recentProduct"],
        queryFn: getProducts,
        staleTime: 7000,
        // retry: 7,
        // retryDelay:6000,
        // refetchInterval: 30000,
        // refetchIntervalInBackground:true,
        // refetchOnWindowFocus:true
      })

      return productInfo
}
