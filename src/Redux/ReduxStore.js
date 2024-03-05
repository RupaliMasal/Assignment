import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './CartSlice';

export const ReduxStore=configureStore({
    reducer:{
        Cart:CartSlice
    }
});
