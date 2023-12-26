import React, { useContext } from 'react'
import './Cart.css'
import products from '../../products'
import CartDisplay from './CartDisplay'
import { cartList } from '../../context/Productcontext'

export default function Cart() {
  const { itemState } = useContext(cartList);
  
  let totalPrice = 0;
  for (let i = 0; i < products.length ; i++) {
    //console.log(i)
    totalPrice = totalPrice+(itemState[i+1] * products[i].price);
   console.log(itemState[i])
   console.log(products[i].price)
  }
  return (
    <div >
      {products.map((product) => <CartDisplay product={product} />)}
      <b>{totalPrice}</b>
    </div>
  )
}
