import React from 'react'
import products from '../../products'
import ProductsDisplay from './ProductsDisplay'
import './Shop.css'

export default function Shop() {
    return (
        <>
            <h1 className='Title'>Welcome to Axel's shop</h1>
            <div className='Container-grid'>
                {products.map((product) => <ProductsDisplay product={product} />)}
            </div>
        </>
    )
}
