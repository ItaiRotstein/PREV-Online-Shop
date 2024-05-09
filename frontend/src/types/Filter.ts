export type FilterState = {
    isSortMenuMobileShow: boolean;
    sort: {
        byPrice: string;
        byAlphabet: boolean;
        byPopularity: boolean;
    };
    byInStock: boolean;
    byNewIn: boolean;
    searchQuery: string;
    itemsPerFetch: number;
    bySize: {
        XS: boolean,
        S: boolean,
        M: boolean,
        L: boolean,
        XL: boolean,
    },
    byMaterial: {
        Cashmere: boolean;
        Cotton: boolean;
        Polyester: boolean;
        Leather: boolean;
        Rubber: boolean;
        Denim: boolean;
        Wool: boolean;
        Acrylic: boolean;
        Silk: boolean;
        Suede: boolean;
        Spandex: boolean;
    },
    byGender: {
        Woman: boolean,
        Man: boolean,
        Older_Boys: boolean,
        Younger_Boys: boolean,
        Unisex: boolean,
    },
};


type SortMenuShow = { type: "SET_SORT_MENU_MOBILE_SHOW", payload: boolean; };
type ClearFilters = { type: "CLEAR_FILTERS"; };
type ByInStock = { type: "FILTER_BY_INSTOCK"; };
type ByNewIn = { type: "FILTER_BY_NEWIN"; };
type BySearchQuery = { type: "FILTER_BY_SEARCH_QUERY"; payload: string; };
type ItemsPerFetch = { type: "SET_ITEMS_PER_FETCH", payload: number; };
//SORT
type SortByPrice = { type: "SORT_BY_PRICE"; payload: string; };
type SortByAlphabet = { type: "SORT_BY_ALPHABET"; };
type SortByPouplarity = { type: "SORT_BY_POPULARITY"; };
//SIZES
type BySize = {
    type: "FILTER_BY_SIZE";
    payload: {
        XS: boolean;
        S: boolean;
        M: boolean;
        L: boolean;
        XL: boolean;
    };
};
//MATERIAL
type ByMaterial = {
    type: "FILTER_BY_MATERIAL";
    payload: {
        Cashmere: boolean;
        Cotton: boolean;
        Polyester: boolean;
        Leather: boolean;
        Rubber: boolean;
        Denim: boolean;
        Wool: boolean;
        Acrylic: boolean;
        Silk: boolean;
        Suede: boolean;
        Spandex: boolean;
    };
};
//GENDER
type ByGender = {
    type: "FILTER_BY_GENDER";
    payload: {
        Woman: boolean;
        Man: boolean;
        Older_Boys: boolean;
        Younger_Boys: boolean;
        Unisex: boolean;
    };
};
export type FilterActions =
    ClearFilters |
    SortMenuShow |
    SortByPrice |
    SortByAlphabet |
    SortByPouplarity |
    BySearchQuery |
    ItemsPerFetch |
    ByInStock |
    ByNewIn |
    BySize |
    ByMaterial |
    ByGender;