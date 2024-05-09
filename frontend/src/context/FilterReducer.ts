import { FilterActions, FilterState } from "../types/Filter";

const initialState = {
    isSortMenuMobileShow: false,
    sort: {
        byPrice: "",
        byAlphabet: false,
        byPopularity: true,
    },
    byInStock: false,
    byNewIn: false,
    searchQuery: "",
    itemsPerFetch: 20,
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
        Older_Boys: false,
        Younger_Boys: false,
        Unisex: false,
    },
};

const FilterReducer = (state: FilterState, action: FilterActions) => {
    switch (action.type) {
        case "SET_SORT_MENU_MOBILE_SHOW":
            return { ...state, isSortMenuMobileShow: action.payload };
        case "SORT_BY_PRICE":
            return {
                ...state, sort: {
                    ...state.sort,
                    byPrice: action.payload,
                    byAlphabet: false,
                    byPopularity: false
                }
            };
        case "SORT_BY_ALPHABET":
            return {
                ...state, sort: {
                    ...state.sort,
                    byAlphabet: true,
                    byPopularity: false,
                    byPrice: ""
                }
            };
        case "SORT_BY_POPULARITY":
            return {
                ...state, sort: {
                    ...state.sort,
                    byPopularity: true,
                    byAlphabet: false,
                    byPrice: ""
                }
            };
        case "FILTER_BY_SEARCH_QUERY":
            return { ...state, searchQuery: action.payload };
        case "SET_ITEMS_PER_FETCH":
            return { ...state, itemsPerFetch: state.itemsPerFetch + action.payload };
        case "FILTER_BY_INSTOCK":
            return { ...state, byInStock: !state.byInStock };
        case "FILTER_BY_NEWIN":
            return { ...state, byNewIn: !state.byNewIn };
        case "FILTER_BY_SIZE":
            return { ...state, bySize: action.payload };
        case "FILTER_BY_MATERIAL":
            return { ...state, byMaterial: action.payload };
        case "FILTER_BY_GENDER":
            return { ...state, byGender: action.payload };
        case "CLEAR_FILTERS":
            return initialState;
        default:
            return state;
    }
};
export default FilterReducer;