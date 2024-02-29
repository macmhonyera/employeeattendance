import { updateDeductStock } from "../../../api/productApi";
import { issueStockFail, issueStockSuccess } from "../IssueStockSlice/IssueStockSlice";

const issueStockAction=(data)=>async (dispatch)=>{
    try{
        const result =await updateDeductStock(data);
        if(result){
            return dispatch(issueStockSuccess(result));
        }
    }catch(error){
        dispatch(issueStockFail(error))
    }
}
export default issueStockAction