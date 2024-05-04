export type FilterState = {
    byStock: boolean;
    byFastDelivery: boolean;
    byRating: number;
    sort: {
        byPrice: string;
        byAlphabet: boolean;
        byPopularity: boolean;
    };
    searchQuery: string;
    itemsPerPage: number;
    isShowFilters: boolean;
};

type SortByPrice = { type: 'SORT_BY_PRICE'; payload: string; };
type SortByAlphabet = { type: 'SORT_BY_ALPHABET'; };
type SortByPouplarity = { type: 'SORT_BY_POPULARITY'; };
type ByRating = { type: 'FILTER_BY_RATING'; payload: number; };
type ByFastDelivery = { type: 'FILTER_BY_DELIVERY'; };
type ByStock = { type: 'FILTER_BY_STOCK'; };
type ClearFilters = { type: 'CLEAR_FILTERS'; };
type BySearch = { type: 'FILTER_BY_SEARCH'; payload: string; };
type ItemsPerPage = { type: 'SET_ITEMS_PER_PAGE'; };
type OpenFilters = { type: 'SET_OPEN_FILTERS'; };
type CloseFilters = { type: 'SET_CLOSE_FILTERS'; };

export type FilterActions =
    SortByPrice |
    SortByAlphabet |
    SortByPouplarity |
    ByRating |
    ByFastDelivery |
    ByStock |
    ClearFilters |
    BySearch |
    ItemsPerPage |
    OpenFilters |
    CloseFilters;