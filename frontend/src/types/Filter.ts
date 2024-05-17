export type FilterState = {
    fetchItems: number;
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


type ClearFilters = { type: "CLEAR_FILTERS"; };
type FetchItems = { type: "SET_ITEMS_PER_FETCH" };
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
    FetchItems |
    BySize |
    ByMaterial |
    ByGender;