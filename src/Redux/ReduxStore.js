import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import LoginSlice from './LoginSlice';

export const ReduxStore=configureStore({
    reducer:{
        Cart:CartSlice,
        login:LoginSlice
    }
});
