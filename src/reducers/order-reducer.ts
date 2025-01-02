import { MenuItem, OrderItem } from "../types";


export type OrderActions=
{type:'add-item',payload:{item:MenuItem}}|
{type:'remove-item', payload:{id:MenuItem['id']}}|
{type:'place-order'}|
{type:'set-tip', payload:{tip:number}}

export type OrderState={
    order:OrderItem[]
    tip:number
}
export const initialState={
    order:[],
    tip:0
 }

export const orderReducer=(state:OrderState=initialState, action:OrderActions)=>{
  
  
  
  
    if(action.type==='add-item'){

        const itemExist=state.order.find(orderItem=>orderItem.id===action.payload.item.id)
        let order:OrderItem[]=[]
        if(itemExist){
               order=state.order.map(orderItem=>orderItem.id===action.payload.item.id?{...orderItem,quantity:orderItem.quantity+1}:orderItem)          
            }else{
                const newItem:OrderItem={...action.payload.item, quantity:1}
                order=[...state.order,newItem]
        }
        return{
            ...state, order
        }
    }
    if(action.type==='remove-item'){
        const itemExist=state.order.find(orderItem=>orderItem.id===action.payload.id)
        let updateorder:OrderItem[]=[]  
        if(itemExist){
            updateorder=state.order.map(orderItem=>orderItem.id===action.payload.id?{
                ...orderItem, quantity:orderItem.quantity>1?orderItem.quantity-1:0
            }:orderItem)
              updateorder=updateorder.filter(orderItem=>orderItem.quantity>0)
          }
        return{
            ...state,
            order:updateorder
        }
    }
    if(action.type==='place-order'){
        return{
            order:[],
            tip:0
        }
    }
    if(action.type==='set-tip'){
        const tip=action.payload.tip
            return{
                ...state, tip
            }
    }
    return state
        
}