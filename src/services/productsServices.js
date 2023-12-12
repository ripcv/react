import axios from "axios";

export async function getProducts(){
    return await axios.get('https://6577a829197926adf62ea9f8.mockapi.io/api/v1/products/Products')
}