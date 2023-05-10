import React from 'react'
import '../Itemcount/Itemcount.css'
import { useState } from 'react'

const Itemcount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button1' onClick={decrement}></button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button2" onClick={increment}></button>
            </div>
        <button className="Carrito" onClick={()=> onAdd(quantity)} disabled={!stock}>
            agregar al carrito
        </button>
        </div>
        
    )

}


export default Itemcount;