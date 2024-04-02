import { createSlice } from "@reduxjs/toolkit";

const LoginSlice=createSlice({
    name:"login",
    initialState:{
        auth:false
    },
    reducers:{
        LogIn:(state)=>{
           state.auth=true
        },
        Logout:(state)=>{
            state.auth=false
        }
      
    }
});
export default LoginSlice.reducer;
export const {LogIn,Logout}=LoginSlice.actions;