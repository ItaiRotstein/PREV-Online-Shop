import axios from 'axios';

const API_URL = (process.env.NODE_ENV === 'production')
    ? '/api'
    : 'http://localhost:5000/api';

//--Get products--
const getProducts = async (searchParams: any, fetchItems: number) => {
    const config = {
        params: {...searchParams, fetchItems}
    };
    const response = await axios.get(`${API_URL}/products`, config);
    return await response.data;
};

//--Get products data--
const getProductsData = async () => {
    const response = await axios.get(`${API_URL}/products/data`,);
    return await response.data;
};

const productService = {
    getProducts,
    getProductsData,
};

export default productService;