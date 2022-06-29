import React, { createContext, useContext, useState, useEffect} from 'react';
import toast from 'react-hot-toast';
const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [quantity, setQuantity] = useState(1);


    

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

    const addToCartHandler = (product, quantity) => {
        const checkProductsInCart = cartItems.find((item) => item._id === product._id);

        setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity)
        setTotalQuantity(prevTotalQuantity => prevTotalQuantity + quantity);

        if (checkProductsInCart) {

            const updatedCartItems = cartItems.map((item) => {
                if (item._id === product._id) return {
                    ...item, 
                    quantity: item.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}]);
        }
        toast.success(`${quantity} ${product.name} added to the cart.`);
      };
    
    

    return (
        <Context.Provider
        value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantity,
            quantity,
            incrementQuantity,
            decrementQuantity,
            addToCartHandler
        }}>
            {children}
        </Context.Provider>
    )
}




export const useStateContext = () => useContext(Context);
