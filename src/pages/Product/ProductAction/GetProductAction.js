import { getProducts } from "../../../api/productApi";
import { getProductsFail, getProductsPending, getProductsSucess } from "../ProductSlice/GetProductsSlice"

const GetProductAction = (data) => async dispatch => {
  try{
    dispatch(getProductsPending());
    const result=await getProducts(data);
    if(result){
        return dispatch(getProductsSucess(result));
    }
  }catch(error){
    dispatch(getProductsFail(error))
  }
}

export default GetProductAction