import {FETCH_PRODUCTS,ADD_TO_CART} from "../actions/types";

const initialState = {
    products:[],
    product:[]
}

const productsReducer =   (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case ADD_TO_CART:
            return {
                ...state,
                product: [...state.product, action.payload]
            }    
        default:
            return state    
    }
}

export default productsReducer;
