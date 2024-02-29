import { updateProduct } from "../../../api/userApi";
import { editProductsFail, editProductsPending, editProductsSuccess } from "../ProductSlice/EditProductSlice";

const editProductData = (data) => async dispatch => {

    try {
        dispatch(editProductsPending());
        const result = await updateProduct(data);
        if(result){
            return dispatch(editProductsSuccess(result))
        }
    } catch (error) {
        dispatch(editProductsFail(error))
    }
} 

export default editProductData