import React,{useState} from 'react'
import { connect } from 'react-redux';
import {addProductToCart} from '../redux/actions/productsActions';
import PropTypes from 'prop-types';
import { ADD_TO_CART } from '../redux/actions/types';
import store from "../redux/store"
import ToggleProduct from "../assets/images/ToggleProduct.png";
function Product(props) {

    const {product,productId} = props;
    const {id,imageUrl,name,unit,price} = props.product;

    const [productid, setProductId] = useState();

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
            <img src={product.imageUrl} alt=" product-item" />
            <p>{product.name}</p>
            {/* <p>{product.productDescription}</p> */}
            <p> {product.unit} </p>
            <p> {product.price}</p>
            {productId===productid && props.cartItems.length > 0  ?
             <span className="toggle"><img src={ToggleProduct}/></span> :
            <span className="addTo-cart" onClick={()=>{ setProductId(product.id);addToCart()}}>
            <span className="add-icon">+</span>ADD
            </span>
}
        </div>
    )
}

Product.propTypes = {
    addProductToCart:PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    cartItems: state.products.product
})
;

export default  connect(mapStateToProps,{addProductToCart}) (Product)
