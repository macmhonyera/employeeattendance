import { addProducts } from "../../../api/productApi"
import { addProductFail, addProductSuccess } from "../ProductSlice/AddProductSlice";

const addProduct=(data)=>async (dispatch)=>{
    try{
        const result =await addProducts(data);
        if(result){
            return dispatch(addProductSuccess(result));
        }
    }catch(error){
        dispatch(addProductFail(error))
    }
}
export default addProduct