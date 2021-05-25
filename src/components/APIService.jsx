import axios from "axios";

axios.defaults.baseURL = "http://omega.jdomni.com/omni-automation-tools/training/";

class APIService {

  auth_key = "6c55fa36a2138b23a52e74619bfdae147fa0c3e1";

  getAllProducts = () => {
    const url ="getAllProducts?auth_key=" + this.auth_key +
      "&pageNo=1&itemsPerPage=50";
    return axios.get(url);
  };

  editCartQuantity = (id,quantity) => {
    const url = "cartApi";
    const config = {
      headers: { Authorization: "-", "Content-Type": "application/json" },
    };
    const jsonBody = { product_id: id, auth_key: this.auth_key, quantity: quantity };
    return axios.put(url, config, jsonBody);
  };

  getAllCartItems = () => {
      const url ="getAllCartItems?auth_key=" + this.auth_key;
      return axios.get(url);
  }

}

var apiService = new APIService();

export default apiService;
