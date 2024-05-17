import { FilterActions, FilterState } from "../types/Filter";

const initialState = {
    fetchItems: 20,
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
    console.log(action);
    
    switch (action.type) {
        case "SET_ITEMS_PER_FETCH":
            return { ...state, fetchItems: state.fetchItems + 20 };
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