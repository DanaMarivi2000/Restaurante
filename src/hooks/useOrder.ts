// import React from 'react'

import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

const useOrder = () => {
  
    const [order,setOrder]=useState<OrderItem[]>([])
    const [tip,setTip]=useState(0)
    

    const addItem=(item:MenuItem)=>{
        const itemExist=order.find(orderItem=>orderItem.id===item.id)
        if(itemExist){
               const updatedOrder=order.map(orderItem=>orderItem.id===item.id?{...orderItem,quantity:orderItem.quantity+1}:orderItem)         
                setOrder(updatedOrder)
            }else{
            const newItem={...item, quantity:1}
            setOrder([...order,newItem])
        }


        // const newItem={...item, quantity:1}
        console.log(order)
    }

    const removeItem=(item:OrderItem)=>{
          const itemExist=order.find(orderItem=>orderItem.id===item.id)
          if(itemExist){
            const updateItem=order.map(orderItem=>orderItem.id===item.id?{
                ...orderItem, quantity:orderItem.quantity>1?orderItem.quantity-1:0
            }:orderItem)
              setOrder(updateItem.filter(orderItem=>orderItem.quantity>0))
          }
    }

    const placeOrder=()=>{
        setOrder([])
        setTip(0)
    }
    return{
        order,
        addItem,
        removeItem,
        tip,
        setTip,
        placeOrder,

  }
}

export default useOrder
