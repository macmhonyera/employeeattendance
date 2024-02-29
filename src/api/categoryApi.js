import axios from "axios";
import { Navigate } from "react-router-dom";

export const getCategory=async (data)=>{
    console.log("Data",data)
    return new Promise(async (resolve, reject) => {
        try {
            const token = sessionStorage.getItem('access_token')
            const res = await axios.get(`${process.env.REACT_APP_WAREHOUSE_API_URL}/category?page=${data?.page}&perPage=${data?.perPage}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            resolve(res.data);
            console.log("Result", res?.data)
           
        } catch (error) {
            if(error.response.data.statusCode === 404){
                return null
             }
             if(error.response.data.statusCode === 401){
                <Navigate replace to="/"/>
             }
            
            
             reject(error)
        }
    })
}