import { fetchUser } from "../../api/userApi";
import {getUserPending, getUserSuccess, getUserFail } from "./userSlice";

export const getUserProfile=()=>async dispatch=>{
    try{
        dispatch(getUserPending());
        const result=await fetchUser();
        if(result){
            return dispatch(getUserSuccess(result))
        }
    }catch(error){
        dispatch(getUserFail(error))
    }
}