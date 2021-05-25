import React from 'react'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import "./styles.css"
import PropTypes from "prop-types";

function Header({product}) {
    return (
        <header className="header">
            <Link to="/" className="mr-1 pr-1">Home</Link>
            <Link to="/cart">{`Cart (${product.length})`} </Link>
        </header>
    )
}

Header.propTypes = {
    product: PropTypes.array.isRequired,
}
const mapStateToProps = (state) => ({
    product:state.products.product
});

export default connect(mapStateToProps,null)(Header)
