import React, { 
  createContext, 
  useContext, 
  useState, 
  useEffect
} from 'react';
import toast from 'react-hot-toast';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Context = createContext();


export const StateContext = ({children}) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    reEnterPassword: '',
    dob: '',
    agree: false,
  })
    const initialCart = [];
    const initialTotalQuantity = 0;
    const initialTotalPrice = 0;
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage("cart", initialCart);
    const [totalPrice, setTotalPrice] = useLocalStorage("totalPrice", initialTotalPrice);
    const [totalQuantity, setTotalQuantity] = useLocalStorage("quantity", initialTotalQuantity);
    const [quantity, setQuantity] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage(false);
    let foundProduct;
    let index;

    //product page functions
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
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
        
        if(checkProductInCart) {
          const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
          })
    
          setCartItems(updatedCartItems);
        } else {
          product.quantity = quantity;
          setCartItems([...cartItems, { ...product }]);
        }

        toast.success(`${quantity} ${product.name} added to the cart.`);
        setQuantity(1);

    };


      
        //cart functions
      const toggleCartItemsQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id);
        if (value === 'inc') {
            let updatedCartItems = [ ...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }];
            setCartItems(updatedCartItems)
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
            setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity - 1}]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
            setTotalQuantity((previousTotalQuantity) => previousTotalQuantity - 1);
            }
        }
      }

        const onCartItemRemoval = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantity((previousTotalQuantity) => previousTotalQuantity - foundProduct.quantity);
        setCartItems(newCartItems);
        };




       

        //persist cart items
        // useEffect(() => {
        // const cartData = JSON.parse(localStorage.getItem('cart'));
        //     if (cartData) {
        //         setCartItems(cartData);
        //     }
        // }, [])


        // useEffect(() => {
        //     if (cartItems !== initialCart) {
        //         localStorage.setItem('cart', JSON.stringify(cartItems));
        //     }
        // }, [cartItems])

        // useEffect(() => {
        // const quantityData = JSON.parse(localStorage.getItem('quantity'));
        // if (quantityData) {   
        //     setQuantity(quantityData);
        // }
        // }, [])
        

        // useEffect(() => {
        // if (totalQuantity !== initialTotalQuantity) {
        //     localStorage.setItem('quantity', JSON.stringify(totalQuantity));
        // }
        // },[totalQuantity])
    

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
            addToCartHandler,
            toggleCartItemsQuantity,
            onCartItemRemoval,
            isLoggedIn,
            setIsLoggedIn,
            user,
            setUser
        }}>
            {children}
        </Context.Provider>
    )
}




export const useStateContext = () => useContext(Context);
