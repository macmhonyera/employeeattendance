import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

export const userLogin=async (data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const res=await axios.post(`${process.env.REACT_APP_WAREHOUSE_API_URL}/auth/login`,data);
            resolve(res.data);
            if(res.status===201){
                sessionStorage.setItem("access_token",res.data.access_token);
                localStorage.setItem("refreshToken", res.data.refreshToken);
            }
        }catch(error){
            reject(error)
        }
    })
}

export const fetchUser=async (data)=>{
    return new Promise(async(resolve, reject)=>{
      try{
        const token=sessionStorage.getItem('access_token')
        const decoded=jwtDecode(token);
        console.log(decoded)
        const res=await axios.get(`${process.env.REACT_APP_WAREHOUSE_API_URL}/user/${decoded.userId}`,data,{
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        })
        resolve(res.data);
      }
      catch(error){
        if(error.response.data.statusCode===404){
          return null
        }
        if(error.response.data.statusCode===401){
          <Navigate replace to="/"/>
        }
        reject(error)
      }
    })
  }
  export const updateProduct = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const token = sessionStorage.getItem('access_token')
            const res = await axios.patch(`${process.env.REACT_APP_WAREHOUSE_API_URL}product/${data.productcode}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            resolve(res.data);

        } catch (error) {
            if(error.response.data.statusCode === 401){          
                <Navigate replace to="/"/>
             }
            reject(error)
        }
    })
}