import React, { createContext, useState } from 'react';
import products from '../products';

export const cartList = createContext(null);

export function CartProvider(props) {
    const [itemState, setItem] = useState(initPro(products));
    let itemUpdate = {};
    const addItem = (Id) => {
        setItem((prev) => {
            itemUpdate = { ...prev };
            itemUpdate[Id]++;
            return itemUpdate
        });
    }
    const minusItem = (id) => {
        setItem((prev) => {
            itemUpdate = { ...prev };
            itemUpdate[id]--;
            return itemUpdate;
        })
    }


    const contextValue = { itemState, addItem, minusItem };
    return (
        <cartList.Provider value={contextValue}>{props.children}</cartList.Provider>
    )
}


function initPro(product) {
    const itemslist = {};
    for (let i = 1; i < product.length + 1; i = i + 1) {
        itemslist[i] = 1;
    }
    return itemslist;
}