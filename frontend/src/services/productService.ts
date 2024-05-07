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
    
    return await response.data;
};

const productService = {
    getProducts,
};

export default productService;