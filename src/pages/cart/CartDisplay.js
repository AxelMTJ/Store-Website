import React, { useContext } from 'react'
import './Cart.css'
import { cartList } from '../../context/Productcontext'
import { Minus, Plus } from 'phosphor-react';

export default function CartDisplay(props) {
    const { itemState, addItem, minusItem,totalPrice } = useContext(cartList);
    if (itemState[props.product.id] == 0)
        return <></>
    else {
        return (
            <div className='CartContainer'>
                <img className='Cartimg' src={props.product.img} alt='img' />
                <div className='CartContent'>
                    <b className='CartProductName'>{props.product.name}</b>
                    <p className='CartPrice'>${props.product.price} ea</p>
                    <ButtonControl num={itemState[props.product.id]} addItem={addItem} id={props.product.id} minusItem={minusItem}/>
                    
                </div>

            </div>
        )
    }
}

function ButtonControl(props) {
    const {num,id,addItem,minusItem}=props
    if (num === 0) {
        return <button onClick={()=>addItem(id)} className='Button'>Add to Cart</button>
    }
    else {
        return (
            <div className='ButtonZone'>
                <button className='CartPlusButton' onClick={()=>addItem(id)}>
                    <Plus />
                    
                </button>
                <p className='CartPlusNum' >{props.num}</p>
                <button onClick={()=>minusItem(id)}>
                    <Minus />
                </button>
            </div>
        )
    }

}

