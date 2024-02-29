import { getCategory } from "../../../api/categoryApi";
import { getCategoriesFail, getCategoriesPending, getCategoriesSuccess } from "../CategorySlice/GetCategorySlice";

const getCategoryList=(data)=>async dispatch=>{
    try{
        dispatch(getCategoriesPending());
        const result=await getCategory(data);
        console.log("My results ",result)
        if(result){
            return dispatch(getCategoriesSuccess(result))
        }
    }catch (error){
        dispatch(getCategoriesFail(error));
    }
}
export default getCategoryList