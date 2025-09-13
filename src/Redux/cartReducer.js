import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // product to push is the argument here
        addToCart: (state, action) => {
            const newItem = action.payload
            const isExist = state.cartItems.find(item => item.id == newItem.id)
            if (isExist) {
                isExist.quantity++
            } else {
                state.cartItems.push({ ...newItem, quantity: 1 })
            }
            state.totalQuantity = state.cartItems.length
            state.totalAmount += newItem.price
        },
        // need here to send product id 
        removeItem: (state, action) => {
            const id = action.payload
            const itemExist = state.cartItems.find(item => item.id == id)
            console.log(state.cartItems.find(item => item.id == id))
            if (itemExist) {
                // decrease quantity
                if (itemExist.quantity > 1) {
                    itemExist.quantity--
                    state.totalQuantity--
                    state.totalAmount -= itemExist.price
                } else {
                    // remove item
                    state.cartItems = state.cartItems.filter(item => item.id != id)
                    state.totalQuantity--
                    state.totalAmount -= itemExist.price
                }
            }
        },
        // for checkout and empty cart
        clearCart: (state) => {
            state.cartItems = []
            state.totalAmount = 0
            state.totalQuantity = 0
        }

    }
})

export const { addToCart, removeItem, clearCart } = cartReducer.actions
export default cartReducer.reducer