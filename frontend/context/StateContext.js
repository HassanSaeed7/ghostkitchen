import React, { createContext, useContext, useState, useEffect} from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantity, setTotalQuantity] = useState();
    const [quantity, setQuantity] = useState(1);


    const toggleCartHandler = () => {
        setShowCart(!showCart);
    };

    const incrementQuantity = (event) => {
        event.preventDefault();
        setQuantity((prevQuantity) => 
        prevQuantity + 1
        )
    };

    const decrementQuantity = (event)=> {
       event.preventDefault();
        setQuantity( (prevQuantity) => {
            if (prevQuantity - 1 < 1) return 1;
            
            return prevQuantity - 1;
        })
    };

    const addToCartHandler = (event, product, quantity) => {
        event.preventDefault()
    
      };
    
    

    return (
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantity,
            quantity,
            toggleCartHandler,
            incrementQuantity,
            decrementQuantity,
            addToCartHandler
        }}>
            {children}
        </Context.Provider>
    )
}




export const useStateContext = () => useContext(Context);
