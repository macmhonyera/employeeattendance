import axios from "axios";
import { Navigate } from "react-router-dom";

export const getProducts = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = sessionStorage.getItem("access_token");
      const res = await axios.get(
        `${process.env.REACT_APP_WAREHOUSE_API_URL}/product/all?page=${data?.page}&perPage=${data?.perPage}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      resolve(res.data);
    } catch (error) {
      if (error.response.data.statusCode === 404) {
        return null;
      }
      if (error.response.data.statusCode === 401) {
        <Navigate replace to="/login" />;
      }
      reject(error);
    }
  });
};

export const addProducts = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = sessionStorage.getItem("access_token");
      const res = await axios.post(
        `${process.env.REACT_APP_WAREHOUSE_API_URL}/product`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      resolve(res.data);
    } catch (error) {
      if (error.response.data.statusCode === 401) {
        <Navigate replace to="/login" />;
      }
      reject(error);
    }
  });
};

export const updateDeductStock = async (data) => {
  return new Promise(async (resolve, reject) => {
      try {
          const token = sessionStorage.getItem('access_token')
          const res = await axios.patch(`${process.env.REACT_APP_WAREHOUSE_API_URL}/product/${data.productcode}/deductstock`, data, {
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
