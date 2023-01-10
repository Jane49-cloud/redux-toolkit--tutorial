import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "./cartslise";



export const store = configureStore({
    reducer:{
    cart:cartReducer
    }
})


