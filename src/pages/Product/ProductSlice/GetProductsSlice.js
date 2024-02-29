import { createSlice } from "@reduxjs/toolkit";

const initialState={
    product:{},
    isLoadingProducts:false,
    errorGetProducts:''
}

const getProductSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        getProductsPending:(state)=>{
            state.isLoadingProducts=true;
        },
        getProductsSucess:(state, {payload})=>{
            state.isLoadingProducts=false;
            state.products=payload;
            state.errorGetProducts='';
        },
        getProductsFail:(state, {payload})=>{
            state.isLoadingProducts=false;
            state.errorGetProducts=payload;
        }
    }
})
export const {getProductsPending,getProductsSucess,getProductsFail}=getProductSlice.actions

export default getProductSlice.reducer