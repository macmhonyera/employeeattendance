import { createSlice } from "@reduxjs/toolkit";
 const initialState={
    issueStock:{},
    errorIssueStock:''
 }

 const issueStockSlice=createSlice({
    name:'issueStocks',
    initialState,
    reducers:{
        issueStockSuccess:(state,{payload})=>{
            state.issueStock=payload;
            state.errorIssueStock='';
        },
        issueStockFail:(state, {paylaod})=>{
            state.errorIssueStock='';
        }
    }
 })
 export  const {issueStockSuccess, issueStockFail}=issueStockSlice.actions
 export default issueStockSlice.reducer
