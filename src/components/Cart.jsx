import React, {useEffect} from "react";
import { FavoriteBorder} from "@material-ui/icons";
import { Clear } from "@material-ui/icons";
import apiService from "./APIService"
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Cart({basketItems}) {

    // const [cartItems, setCartItems] = useState([]);

    const getAllCartItems =()=>{
     return apiService.getAllCartItems().then(response =>{
      // setCartItems(response.data)
    })
  }
const basketTotal = basketItems?.length !== 0 && basketItems.reduce((amount,item)=>item.price + amount,0)
    
    useEffect(() =>{
      getAllCartItems();
    },[]);

    const onRemoveItem = (item) => {
      apiService.removeCartItem(item.id).then(response =>{
        getAllCartItems();
      });
    }

  return (
    
    basketItems?.length === 0 ?<h3>No products added to the cart.</h3> :
    <div className="cart-items mt-1 ml-1">
      <div className="d-flex align-center">
        <h3>{`Shopping Cart(${basketItems?.length} items) `}</h3>
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
              {basketItems.map((item) => (
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
            <p>{basketTotal}</p>
            </div>
          <div className="d-flex space-between" style={{borderBottom:"1px solid silver"}}>
            <p style={{opacity:"0.5"}}>Total Saving</p>
            <p>{40/100*basketTotal}</p>
          </div>
          <div className="d-flex space-between">
            <p>Amount Payable</p>
            <p>{basketTotal}</p>
          </div>
          <button className="btn-primary checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
   
  );
}

const mapStateToProps = (state) => ({
  basketItems:state.products.product
});

export default connect(mapStateToProps,null) (Cart)
