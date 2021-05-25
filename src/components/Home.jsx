import React, {useEffect} from 'react'
import BlockUi from 'react-block-ui';
import Product from './Product';
import {getAllProducts} from "../redux/actions/productsActions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Home({products,getAllProducts}) {

    useEffect(() =>{
            getAllProducts();
    });
    return (
        <BlockUi blocking={products.length === 0}>
        <div className="products">
           {products.map(product=><Product key={product.id} product={product} />)}
        </div>
         </BlockUi>
    )
}

 Home.propTypes = {
    getAllProducts:PropTypes.func.isRequired,
    products:PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    products: state.products.products
});

export default connect(mapStateToProps,{getAllProducts})  (Home)
