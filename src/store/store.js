import {configureStore} from "@reduxjs/toolkit";
import loginReducer from '../pages/Login/LoginSlice'
import GetProductsReducer from "../pages/Product/ProductSlice/GetProductsSlice";
import AddProductReducer from "../pages/Product/ProductSlice/AddProductSlice";
import GetCategoryReducer from "../pages/Category/CategorySlice/GetCategorySlice";
import IssueStockReducer from "../pages/Issued/IssueStockSlice/IssueStockSlice";
import EditProductReducer from "../pages/Product/ProductSlice/EditProductSlice";

export default configureStore({
reducer:{
    login:loginReducer,
    products:GetProductsReducer,
    addProducts:AddProductReducer,
    categories:GetCategoryReducer,
    issueStocks:IssueStockReducer,
    editProduct:EditProductReducer
}
})