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
        sort: '',
        byRating: 0,
        searchQuery: '',
        itemsPerPage: 20,
        pageNum: 0,
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


// import { faker } from '@faker-js/faker';
// faker.seed(99);
// const items = [...Array(100)].map(() => (
//     {
//         id: faker.string.uuid(),
//         name: faker.commerce.productName(),
//         price: faker.commerce.price(),
//         image: faker.image.url(),
//         fastDelivery: faker.datatype.boolean(),
//         inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
//         rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
//         qty: ''
//     }
// ));
// console.log(items);
