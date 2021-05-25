import React from 'react'
import { connect } from 'react-redux';
import {addProductToCart} from '../redux/actions/productsActions';
import PropTypes from 'prop-types';
import { ADD_TO_CART } from '../redux/actions/types';
import store from "../redux/store"

function Product({product,addProductToCart}) {

    const {id,imageUrl,name,unit,price} = product;

    const addToCart = () =>{
        const productData = {
          id:id,
          imageUrl:imageUrl,
          name:name,
          unit:unit,
          price:price  
        }
        store.dispatch({type:ADD_TO_CART,payload:productData});
    }

    return (
        <div className="product">
            <img src={product.imageUrl} alt=" product-image" />
            <p>{product.name}</p>
            {/* <p>{product.productDescription}</p> */}
            <p> {product.unit} </p>
            <p> {product.price}</p>
            <span className="addTo-cart" onClick={addToCart}><span className="add-icon">+</span>ADD</span>
        </div>
    )
}

Product.propTypes = {
    addProductToCart:PropTypes.func.isRequired
}

export default  connect(null,{addProductToCart}) (Product)
