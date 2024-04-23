import { createContext, useContext, useEffect, useState } from 'react';
import Web from './Web';

const CartContext = createContext();

const useCart = () => {
    return useContext(CartContext);
}

const CartProvider = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartPricing, setCartPricing] = useState({});

    useEffect(() => {
        let tempPricing = cartItems.reduce((acc, currVal) => {
            let x = parseInt(currVal.quantity);
            let y = parseInt(currVal.price);
            let totalSumThis = x * y;
            return (
                acc = acc + totalSumThis
            )
        }, 0)

        let tempDiscount = tempPricing * 6 / 100;
        setCartPricing((prevVal) => {
            return { ...prevVal, totalPrice: tempPricing, discount: tempDiscount }
        })
    }, [cartItems])

    // add fn from menucom
    const placeInCart = (foodItem) => {
        let newfoodObject = { ...foodItem, quantity: 1 }

        let isPresent = cartItems.reduce((acc, currVal) => {
            return (
                currVal.id !== newfoodObject.id ? acc : acc = true
            )
        }, false);

        isPresent ? setCartItems((prevCartItems) => [...prevCartItems]) : setCartItems((prevCartItems) => [...prevCartItems, newfoodObject]);
    };

    //remove fn from cartcom
    const removeFromCart = (matchId) => {
        const filteredArray = cartItems.filter(item => item.id !== matchId);
        setCartItems(() => [...filteredArray])
    }

    //increase quantity
    const increaseQuantity = (matchId) => {
        let updateItem = cartItems.map((currData) => {
            if (currData.id === matchId) {
                return { ...currData, quantity: currData.quantity + 1 }
            }
            else {
                return currData;
            }
        })

        setCartItems(updateItem);
    };

    //decrease quantity
    const decreaseQuantity = (matchId) => {
        let updateItem = cartItems.map((currData) => {
            if (currData.id === matchId) {
                return { ...currData, quantity: currData.quantity - 1 }
            }
            return currData;
        }).filter((currVal) => {
            return currVal.quantity >= 1
        })

        setCartItems(updateItem);
    };



    return (
        <CartContext.Provider value={{ cartItems, cartPricing, placeInCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            <Web />
        </CartContext.Provider>
    );
}

export { CartProvider, useCart };