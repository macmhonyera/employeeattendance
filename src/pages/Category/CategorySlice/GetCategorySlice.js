import { createSlice } from "@reduxjs/toolkit";

const initialState={
    category:{},
    isLoadingcategories:false,
    errorGetCategories:''
}

const getCategoriesSlice=createSlice({
    name:"categories",
    initialState,
    reducers:{
        getCategoriesPending:(state)=>{
            state.isLoadingcategories=true;
        },
        getCategoriesSuccess:(state, {payload})=>{
            state.isLoadingcategories=false;
            state.category=payload;
            state.errorGetCategories='';
        },
        getCategoriesFail:(state, {payload})=>{
            state.isLoadingcategories=false;
            state.errorGetCategories=payload;
        }
    }
})
export const {getCategoriesPending,getCategoriesSuccess,getCategoriesFail}=getCategoriesSlice.actions

export default getCategoriesSlice.reducer