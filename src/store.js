
import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import {
    cartReducer
} from './reducers/orderReducers'

const reducer = combineReducers({
    cart: cartReducer
})

localStorage.setItem('cartItems', [])

//add cart to localStorage initial state
const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage
    }
}

const middleware = [thunk]

//create store
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store