import { ReactNode, createContext, useContext, useReducer } from "react";

import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import FilterReducer from "./FilterReducer";

import { Product, ProductActions, ProductState } from "../types/Product";
import { CartActions } from "../types/Cart";
import { FilterActions, FilterState } from "../types/Filter";

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
    });

    const [cartState, cartDispatch] = useReducer(CartReducer, {
        cart: []
    });

    const [filterState, filterDispatch] = useReducer(FilterReducer, {
        isSortMenuMobileShow: false,
        byInStock: false,
        byNewIn: false,
        searchQuery: "",
        itemsPerFetch: 20,
        sort: {
            byPrice: "",
            byAlphabet: false,
            byPopularity: true,
        },
        bySize: {
            XS: false,
            S: false,
            M: false,
            L: false,
            XL: false,
        },
        byMaterial: {
            Cashmere: false,
            Cotton: false,
            Polyester: false,
            Leather: false,
            Rubber: false,
            Denim: false,
            Wool: false,
            Acrylic: false,
            Silk: false,
            Suede: false,
            Spandex: false,
        },
        byGender: {
            Woman: false,
            Man: false,
            OlderBoys: false,
            YoungerBoys: false,
            Unisex: false,
        },
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

