import axios from 'axios';
import { FilterState } from '../types/Filter';

const API_URL = (process.env.NODE_ENV === 'production')
    ? '/api'
    : 'http://localhost:5000/api';

//--Get products--
const getProducts = async (filterState: FilterState) => {
    const config = {
        params: filterState
    };
    const response = await axios.get(`${API_URL}/products`, config);
    return await response.data.products;
};

// //--Get product by ID--
// const getProductById = async (productId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.get(API_URL + productId, config);
//   return response.data;
// };

// //--Add product--
// const addProduct = async (product, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.post(API_URL, product, config);
//   return response.data;
// };

// //--Update product--
// const updateProduct = async (product, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.put(API_URL + product._id, product, config);
//   return response.data;
// };

// //--Delete product--
// const deleteProduct = async (productId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.delete(API_URL + productId, config);
//   return response.data;
// };

const productService = {
    getProducts,
    //   getProductById,
    //   addProduct,
    //   updateProduct,
    //   deleteProduct,
};

export default productService;