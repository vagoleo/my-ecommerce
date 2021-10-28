import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    const isInCart = (id) => {
        return items.some(item => item.id === id);
    }

    const addItem = (item, qty) => {
        
        if(isInCart(item.id)){
            let idx = items.findIndex(i => i.id === item.id);
            items[idx].quantity += qty;
            setItems([...items]);
        }else {
            item.quantity = qty;
            setItems([...items, item]);
        }
    }

    const removeItem = (id) => {
        let auxArr = items.filter(item => item.id !== id);
        setItems(auxArr);
    }

    const clearCart = () => setItems([])

    


    return(
        <CartContext.Provider value={[ items, setItems, addItem, removeItem, clearCart]}>
            { children }
        </CartContext.Provider>
    )
}


