import { ReactNode, createContext, useContext, useReducer, useState } from "react";

import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";

import { Product, ProductActions, ProductState } from "../types/Product";
import { CartActions } from "../types/Cart";

type Props = {
    children: ReactNode;
};

type ShoppingCart = {
    productDispatch: React.Dispatch<ProductActions>;
    cartDispatch: React.Dispatch<CartActions>;
    productState: ProductState;
    cartState: { cart: Product[]; };
    setSortMenuMobileShow: React.Dispatch<React.SetStateAction<boolean>>;
    isSortMenuMobileShow: boolean;
};

const ShoppingCart = createContext({} as ShoppingCart);

const AppContext = ({ children }: Props) => {
    const [isSortMenuMobileShow, setSortMenuMobileShow] = useState(false);

    const [productState, productDispatch] = useReducer(ProductReducer, {
        products: [],
        fetchItems: 20,
        totalProductsCount: 0,
        inStockCount: 0,
        newInCount: 0,
        sizeCount: {
            sizeXScount: 0,
            sizeScount: 0,
            sizeMcount: 0,
            sizeLcount: 0,
            sizeXLcount: 0,
        },
        materialCount: {
            countCashmere: 0,
            countCotton: 0,
            countPolyester: 0,
            countLeather: 0,
            countRubber: 0,
            countDenim: 0,
            countWool: 0,
            countAcrylic: 0,
            countSilk: 0,
            countSuede: 0,
            countSpandex: 0,
        },
        genderCount: {
            countWoman: 0,
            countMan: 0,
            countOlderBoys: 0,
            countYoungerBoys: 0,
            countUnisex: 0,
        },
        categoryCount: {
                Shirts: 0,
                Dresses: 0,
                Jeans: 0,
                Sweaters: 0,
                Hoodies: 0,
                T_Shirts: 0,
                Jackets: 0,
                Blouses: 0,
                Pants: 0,
                Blazers: 0,
                Accessories: 0,
                Socks: 0,
                Bags: 0,
                Vests: 0,
                Hats: 0,
                Shoes: 0,
                Shorts: 0,
                Tops: 0,
                Polos: 0,
        },
    });

    const [cartState, cartDispatch] = useReducer(CartReducer, {
        cart: []
    });

    return (
        <ShoppingCart.Provider value={{
            productState,
            cartState,
            productDispatch,
            cartDispatch,
            setSortMenuMobileShow,
            isSortMenuMobileShow
        }}>
            {children}
        </ShoppingCart.Provider>
    );
};
export default AppContext;

export const AppState = () => {
    return useContext(ShoppingCart);
};

