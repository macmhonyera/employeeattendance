import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    isAuth:false,
    error:''
}

const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        loginPending:(state)=>{
            state.isLoading=true;
        },
        loginSucess:(state)=>{
            state.isLoading=false;
            state.isAuth=true;
            state.error='';
        },
        loginFail:(state,{payload})=>{
            state.isLoading=false;
            state.error=payload;
        }
    }
})
const {reducer, actions}=loginSlice
export const {
    loginSucess,loginFail,loginPending
}=actions;
export default reducer;