import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR } from '../constants/orderConstants' 

export const addToCart = (product) => async (dispatch, getState) => {
    
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            id: product.id,
            name: product.name,
            price: product.price,
            type: product.type
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    // remove redux cart storage
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    //update localStorage cart
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const clearCart = () => (dispatch, getState) => {
    // remove redux cart storage
    dispatch({type: CART_CLEAR})

    //update localStorage cart
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}