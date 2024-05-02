import { CartActions } from '../types/Cart';
import { Product } from '../types/Product';

type State = {
  cart: Product[];
};
const CartReducer = (state: State, action: CartActions) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: '1' }]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item._id !== action.payload)
      };
    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter(product =>
          product._id === action.payload._id ?
            product.qty = action.payload.qty : product.qty)
      };
    default:
      return state;
  }

};
export default CartReducer;