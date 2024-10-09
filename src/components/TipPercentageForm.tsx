import React from "react"

// import React from 'react'
type TipPercentageFormProps={
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip:number
  }

const tipOptions = [
    {
      id: 'tip-10',
      valor: .10,
      etiqueta: '10%'
    },
    {
      id: 'tip-20',
      valor: .20,
      etiqueta: '20%'
    },
    {
      id: 'punta-50',
      valor: .50,
      etiqueta: '50%'
    },
  ]



const TipPercentageForm = ({setTip,tip}:TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl ">Propina: </h3>

      <form>
        {tipOptions.map(tipOption=>(
            <div key={tipOption.id} className="flex gap-2">
                <label htmlFor={tipOption.id}>{tipOption.etiqueta}</label>
                <input id={tipOption.id} type="radio" name="tipOption" value={tipOption.valor} 
                onChange={e=>setTip(+e.target.value)}
                checked={tipOption.valor===tip}/>
            </div>
        ))}
      </form>
    </div>
  )
}

export default TipPercentageForm
