import { Product, ProductActions } from '../types/Product';
type ProductState = {
  products: Product[];
  productsCount: number;
}
const ProductReducer = (state: ProductState, action: ProductActions) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    case 'GET_PRODUCTS_COUNT':
      return {
        ...state,
        productsCount: action.payload
      };
    default:
      return state;
  }

};
export default ProductReducer;