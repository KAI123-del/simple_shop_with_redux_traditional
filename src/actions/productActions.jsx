
import axios from 'axios';
import {
  PRODUCT_DETAIL_FAILED,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_LIST_FAILED,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS
 } from '../constants/productConstants'


export const productList = ()=>async (dispatch)=>{
 try {
    dispatch({type:PRODUCT_LIST_REQUEST});
    const {data}=await axios.get("https://innocenti.onrender.com/products");
    dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
 } catch (error) {
    dispatch({type:PRODUCT_LIST_FAILED,payload:error.response && error.response.data.message ? error.response.data.message : error.message})
 }
}

export const productDetail =(id)=> async (dispatch)=>{
    try {
        dispatch({type:PRODUCT_DETAIL_REQUEST})
        const {data}=await axios.get(`https://innocenti.onrender.com/products/${id}`)
        dispatch({type:PRODUCT_DETAIL_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:PRODUCT_DETAIL_FAILED,payload:error.response && error.response.data.message ? error.response.data.message : error.message})   
    }
}