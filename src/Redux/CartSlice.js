import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"Cart",
    initialState:{
        arrProducts:[]
    },
    reducers:{
        addProduct:(state,action)=>{
                state.arrProducts.push({...action.payload,addCount:1});
                alert("Course added Successfully...!!!")
        },
        removeProduct:(state,action)=>{
            state.arrProducts.splice(action.payload,1)
        },
        incCount:(state,action)=>{
            state.arrProducts[action.payload].addCount+=1
        }
    }
});
export default CartSlice.reducer;
export const {addProduct,removeProduct}=CartSlice.actions;