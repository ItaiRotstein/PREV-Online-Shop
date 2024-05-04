import { ReactNode, createContext, useContext, useReducer } from 'react';

import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import FilterReducer from './FilterReducer';

import { Product, ProductState, ProductActions } from '../types/Product';
import { CartActions } from '../types/Cart';
import { FilterActions, FilterState } from '../types/Filter';

type Props = {
    children: ReactNode;
};

type ShoppingCart = {
    productDispatch: React.Dispatch<ProductActions>;
    cartDispatch: React.Dispatch<CartActions>;
    filterDispatch: React.Dispatch<FilterActions>;
    productState: ProductState;
    cartState: { cart: Product[]; };
    filterState: FilterState;
};

const ShoppingCart = createContext({} as ShoppingCart);

const AppContext = ({ children }: Props) => {

    const [productState, productDispatch] = useReducer(ProductReducer, {
        products: [],
        productsCount: 0
    });

    const [cartState, cartDispatch] = useReducer(CartReducer, {
        cart: []
    });

    const [filterState, filterDispatch] = useReducer(FilterReducer, {
        byStock: false,
        byFastDelivery: false,
        sort: {
            byPrice: '',
            byAlphabet: false,
            byPopularity: false,
        },
        byRating: 0,
        searchQuery: '',
        itemsPerPage: 20,
        isShowFilters: false,
    });

    return (
        <ShoppingCart.Provider value={{
            productState,
            cartState,
            filterState,
            productDispatch,
            cartDispatch,
            filterDispatch,
        }}>
            {children}
        </ShoppingCart.Provider>
    );
};
export default AppContext;

export const AppState = () => {
    return useContext(ShoppingCart);
};

