import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [productosCarrito, setCarrito] = useState([]);

    return(
        <CartContext.Provider value={{productosCarrito, setCarrito}}>
            {children}
        </CartContext.Provider>
    )
}