import React, {useState, useEffect} from "react";
import { FavoriteBorder, SpaTwoTone } from "@material-ui/icons";
import { Clear } from "@material-ui/icons";
import apiService from "./APIService"
import { Link } from "react-router-dom";

function Cart() {

    const [cartItems, setCartItems] = useState([]);

    const getAllCartItems =()=>{
     return apiService.getAllCartItems().then(response =>{
      setCartItems(response.data)
  })
}
    
    useEffect(() =>{
      getAllCartItems();
    },[]);

    const onRemoveItem = (item) => {
      apiService.removeCartItem(item.id).then(response =>{
        debugger
        getAllCartItems();
      });
    }

  return (
    <div className="cart-items mt-1 ml-1">
      <div className="d-flex align-center">
        <h3>{`Shopping Cart(${cartItems.length} items) `}</h3>
        <p>Clear Cart</p>
      </div>
      <div className="d-flex">
        <div style={{ flex: "0.8" }}>
          <table>
            <thead>
              <tr>
                <th align="left">Item Details</th>
                <th align="center">Quantity</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td width="40%">
                    <div className="d-flex align-center justify-center mt-1">
                      <div style={{width:"25%"}} className="mr-1">
                        <img src={item.imageUrl} alt="cart-items" />
                      </div>
                      <ul>
                        <li>{item.name}</li>
                        <li>{item.unit}</li>
                        <li className="d-flex align-center justify-center mt-3">
                          <span className="d-flex align-center justify-center mr-1 font-small"><FavoriteBorder /> MOVE TO WISHLIST</span>
                          <span className="d-flex align-center justify-center font-small"> <Clear  onClick={()=>onRemoveItem(item)} /> REMOVE</span>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td width="20%" align="center">
                      <select>
                          <option value={item.cartQuantity}>{item.cartQuantity}</option>
                      </select>
                      </td>
                  <td width="20%" align="center">
                      <ul>
                          <li>38</li>
                          <li style={{textDecorationLine:"line-through"}}>70</li>
                          <li style={{color:"green"}}>40%</li>
                      </ul>
                  </td>
                  <td width="20%" align="center">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Link to="/"><button className="btn-secondary shopping-btn">Continue Shopping</button></Link>
        </div>
        <div className="checkout" style={{ flex: "0.2" }}>
          <div className="d-flex space-between">
            <p  style={{opacity:"0.5"}}>Order Worth</p>
            <p>184</p>
            </div>
          <div className="d-flex space-between" style={{borderBottom:"1px solid silver"}}>
            <p style={{opacity:"0.5"}}>Total saving</p>
            <p>106</p>
          </div>
          <div className="d-flex space-between">
            <p>Amount Payable</p>
            <p>184</p>
          </div>
          <button className="btn-primary checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}


export default Cart
