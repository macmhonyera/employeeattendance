import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editProducts: {},
    isLoadingEditProducts: false,
    errorEditProducts: ''
}

const editProductSlice = createSlice({
    name: 'editProducts',
    initialState,
    reducers:{
        editProductsPending: (state) => {
            state.isLoadingEditEmployees = true;
        },
        editProductsSuccess: (state, {payload}) => {
            state.isLoadingEditEmployees = false;
            state.editProducts = payload;
            state.errorEditProducts = '';
        },
        editProductsFail: (state, {payload}) => {
            state.isLoadingEditProducts = false;
            state.errorEditProducts = payload;
        }
    }
})

export const {editProductsPending, editProductsSuccess, editProductsFail} = editProductSlice.actions

export default editProductSlice.reducer