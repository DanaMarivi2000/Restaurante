import {OrderItem } from "../types"
// import React from 'react'
import formatCurrency from '../helpers/index'
import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"


type OrderContentsProps={
    order:OrderItem[]
    dispatch:Dispatch<OrderActions>
}
const OrderContents = ({order, dispatch}:OrderContentsProps) => {
  return (
    <div>
      <h2 className='font-black text-4xl'>Consumo</h2>
    
    <div className="space-y-3 mt-5"> 
        {order.map(item=>(<div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type>border-b">
            <div>
            <p>{item.name} {formatCurrency(item.price)}</p>
        <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.quantity*item.price)}</p>
        </div>
        <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black" onClick={()=>dispatch({type:'remove-item',payload:{id:item.id}})}>x</button>
       </div>
        ))}
       </div>
    
    
    </div>
  )
}

export default OrderContents
