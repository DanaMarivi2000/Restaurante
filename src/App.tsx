import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from "./components/TipPercentageForm"
import { useReducer } from "react"
import { initialState, orderReducer } from "./reducers/order-reducer"


function App() {
  
  // const {order,addItem,removeItem,tip,setTip,placeOrder}=useOrder()
  const [state, dispatch]=useReducer(orderReducer,initialState)
  return (
    <>
      <header className="bg-teal-400 py-5"> 
      <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
      <div className="p-5">
      <h2 className="text-4xl font-black">Menú</h2>
      <div className="space-y-3 mt-10">
        {menuItems.map(item=>(
          <MenuItem key={item.id}
          item={item}
          dispatch={dispatch}
          />
        ))}
      </div>
      </div>
    <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
      
      {state.order.length>0?(
    <>  
      <OrderContents
      order={state.order}
      dispatch={dispatch}
     />
     <TipPercentageForm
     dispatch={dispatch}
     tip={state.tip}
     />
     <OrderTotals 
     order={state.order}
     tip={state.tip}
     dispatch={dispatch}
     />
 </>
      ):
      (
        <p className="text-center">La orden está vacía</p>
      )}
      </div>


    </main>


    </>
  )
}

export default App
