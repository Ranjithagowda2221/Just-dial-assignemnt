import {FETCH_PRODUCTS, ADD_TO_CART} from './types';
import apiService from "../../components/APIService";

export const getAllProducts = () => dispatch => {
    apiService.getAllProducts().then(response =>
        {
        dispatch({
            type:FETCH_PRODUCTS,
            payload:response.data.products
        })
    })
    .catch(err =>console.log(err));
}

export const addProductToCart = () => dispatch => {
    debugger;
    dispatch({ type:ADD_TO_CART})
}