import { FilterActions, FilterState } from '../types/Filter';

const initialState = {
    byStock: false,
    byFastDelivery: false,
    sort: '',
    byRating: 0,
    searchQuery: '',
    itemsPerPage: 20,
    pageNum: 0,
    isShowFilters: false,
};

const FilterReducer = (state: FilterState, action: FilterActions) => {
    switch (action.type) {
        case 'SORT_BY_PRICE':
            return { ...state, sort: action.payload };
        case 'FILTER_BY_STOCK':
            return { ...state, byStock: !state.byStock };
        case 'FILTER_BY_DELIVERY':
            return { ...state, byFastDelivery: !state.byFastDelivery };
        case 'FILTER_BY_RATING':
            return { ...state, byRating: action.payload };
        case 'FILTER_BY_SEARCH':
            return { ...state, searchQuery: action.payload };
        case 'CLEAR_FILTERS':
            return initialState;
        case 'SET_ITEMS_PER_PAGE':
            return { ...state, itemsPerPage: action.payload };
        case 'SET_PAGE_NUM':
            return { ...state, pageNum: action.payload };
        case 'SET_OPEN_FILTERS':
            return { ...state, isShowFilters: state.isShowFilters = true };
        case 'SET_CLOSE_FILTERS':
            return { ...state, isShowFilters: state.isShowFilters = false };
        default:
            return state;
    }
};
export default FilterReducer;