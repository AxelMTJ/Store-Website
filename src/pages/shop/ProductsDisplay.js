import React, { useContext } from 'react'
import './Shop.css'
import { cartList } from '../../context/Productcontext'
import { Minus, Plus } from 'phosphor-react';

export default function ProductsDisplay(props) {
    const { itemState, addItem,minusItem } = useContext(cartList);
    return (
        <div className='Container'>
            <div >
                <img src={props.product.img} alt={props.product.name} />
            </div>
            <b className='ProductName'>{props.product.name}</b>
            <p className='Price'>${props.product.price}</p>
            <ButtonControl num={itemState[props.product.id]} addItem={addItem} id={props.product.id} minusItem={minusItem}/>
           
        </div>
    )
}

function ButtonControl(props) {
    const {num,id,addItem,minusItem}=props
    if (num === 0) {
        return <button onClick={()=>addItem(id)} className='Button'>Add to Cart</button>
    }
    else {
        return (
            <div className='ButtonZone'>
                <button onClick={()=>addItem(id)}>
                    <Plus />
                    
                </button>
                <p>{props.num}</p>
                <button onClick={()=>minusItem(id)}>
                    <Minus />
                </button>
            </div>
        )
    }

}