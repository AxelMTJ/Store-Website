import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Nav.css'

export default function Nav() {
    return (
        <div className='Navbar'>
            <div className='Links'>
                <Link to='/'>Shop</Link>
                <Link to='/cart'>
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    )
}
