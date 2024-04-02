import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"Cart",
    initialState:{
        arrProducts:[]
    },
    reducers:{
        addProduct:(state,action)=>{
                state.arrProducts.push({...action.payload,count:1});
        },
        removeProduct:(state,action)=>{
            state.arrProducts.splice(action.payload,1)
        },
        incCount:(state,action)=>{
            state.arrProducts[action.payload].count+=1
        },
        decCount:(state,action)=>{
            if (state.arrProducts[action.payload].count>1) {
                state.arrProducts[action.payload].count-=1
            }
        }
    }
});
export default CartSlice.reducer;
export const {addProduct,removeProduct,incCount,decCount}=CartSlice.actions;