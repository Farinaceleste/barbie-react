import { createContext, useState } from "react";
import React from "react";


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
   


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
       
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)

        if (cartUpdated.length === 0) {
   
        }
    }

    const clearCart = () => {

        setCart([])
   

    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalPrice = () => {

        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    }

    const totalQuantity = () => {
        return cart.reduce((acc, itemsActual) => acc + itemsActual.quantity, 0)

    }

    return (

        <CartContext.Provider value={{ addItem, removeItem, clearCart, totalQuantity, totalPrice, cart}}>
            
            {children}
  

        </CartContext.Provider>


    )
}