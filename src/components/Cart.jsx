import React, {useState, useEffect} from "react";
import { FavoriteBorder } from "@material-ui/icons";
import { Clear } from "@material-ui/icons";
import apiService from "./APIService"

function Cart() {

    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() =>{
        apiService.getAllCartItems().then(response =>{
            debugger
            setCartItems(response.data)
        })
    },[]);

  return (
    <div className="cart-items mt-1 ml-1">
      <div className="d-flex align-center">
        <h3>{`Shopping Cart(${cartItems.length} items)`}</h3>
        <p>Clear Cart</p>
      </div>
      <div className="d-flex">
        <div style={{ flex: "0.7" }}>
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
                        <img src={item.imageUrl} />
                      </div>
                      <ul>
                        <li>{item.name}</li>
                        <li>{item.unit}</li>
                        <li className="d-flex align-center justify-center mt-3">
                          <FavoriteBorder /> MOVE TO WISHLIST <Clear /> REMOVE
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
        </div>
        <div className="checkout" style={{ flex: "0.3" }}></div>
      </div>
    </div>
  );
}


export default Cart
