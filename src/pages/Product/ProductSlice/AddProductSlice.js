import { createSlice } from "@reduxjs/toolkit";
 const initialState={
    addProducts:{},
    errorAddProduct:''
 }

 const addProductSlice=createSlice({
    name:'addProducts',
    initialState,
    reducers:{
        addProductSuccess:(state,{payload})=>{
            state.addProducts=payload;
            state.errorAddProduct='';
        },
        addProductFail:(state, {paylaod})=>{
            state.errorAddProduct='';
        }
    }
 })
 export  const {addProductSuccess, addProductFail}=addProductSlice.actions
 export default addProductSlice.reducer
