export type FilterState = {
    byStock: boolean;
    byFastDelivery: boolean;
    byRating: number;
    sort: string;
    searchQuery: string;
    itemsPerPage: number;
    isShowFilters: boolean;
};

type ByRating = { type: 'FILTER_BY_RATING'; payload: number; };
type BySort = { type: 'SORT_BY_PRICE'; payload: string; };
type ByFastDelivery = { type: 'FILTER_BY_DELIVERY'; };
type ByStock = { type: 'FILTER_BY_STOCK'; };
type ClearFilters = { type: 'CLEAR_FILTERS'; };
type BySearch = { type: 'FILTER_BY_SEARCH'; payload: string; };
type ItemsPerPage = { type: 'SET_ITEMS_PER_PAGE';};
type OpenFilters = { type: 'SET_OPEN_FILTERS'; };
type CloseFilters = { type: 'SET_CLOSE_FILTERS'; };

export type FilterActions =
    ByRating |
    BySort |
    ByFastDelivery |
    ByStock |
    ClearFilters |
    BySearch |
    ItemsPerPage |
    OpenFilters |
    CloseFilters;