export type FilterState = {
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
        OlderBoys: boolean,
        YoungerBoys: boolean,
        Unisex: boolean,
    },
    sort: {
        byPrice: string;
        byAlphabet: boolean;
        byPopularity: boolean;
    };
};

type ByInStock = { type: 'FILTER_BY_INSTOCK'; };
type ByNewIn = { type: 'FILTER_BY_NEWIN'; };
type BySearchQuery = { type: 'FILTER_BY_SEARCH_QUERY'; payload: string; };
type ItemsPerFetch = { type: 'SET_ITEMS_PER_FETCH', payload: number; };
//SORT
type SortByPrice = { type: 'SORT_BY_PRICE'; payload: string; };
type SortByAlphabet = { type: 'SORT_BY_ALPHABET'; };
type SortByPouplarity = { type: 'SORT_BY_POPULARITY'; };
//SIZES
type BySizeXS = { type: 'FILTER_BY_SIZE_XS'; };
type BySizeS = { type: 'FILTER_BY_SIZE_S'; };
type BySizeM = { type: 'FILTER_BY_SIZE_M'; };
type BySizeL = { type: 'FILTER_BY_SIZE_L'; };
type BySizeXL = { type: 'FILTER_BY_SIZE_XL'; };
//MATERIAL
type ByCashmere = { type: 'FILTER_BY_MATERIAL_CASHMERE'; };
type ByCotton = { type: 'FILTER_BY_MATERIAL_COTTON'; };
type ByPolyester = { type: 'FILTER_BY_MATERIAL_POLYESTER'; };
type ByLeather = { type: 'FILTER_BY_MATERIAL_LEATHER'; };
type ByRubber = { type: 'FILTER_BY_MATERIAL_RUBBER'; };
type ByDenim = { type: 'FILTER_BY_MATERIAL_DENIM'; };
type ByWool = { type: 'FILTER_BY_MATERIAL_WOOL'; };
type ByAcrylic = { type: 'FILTER_BY_MATERIAL_ACRYLIC'; };
type BySilk = { type: 'FILTER_BY_MATERIAL_SILK'; };
type BySuede = { type: 'FILTER_BY_MATERIAL_SUEDE'; };
type BySpandex = { type: 'FILTER_BY_MATERIAL_SPANDEX'; };
//GENDER
type Woman = { type: 'FILTER_BY_GENDER_WOMAN'; };
type Man = { type: 'FILTER_BY_GENDER_MAN'; };
type OlderBoys = { type: 'FILTER_BY_GENDER_OLDERBOYS'; };
type YoungerBoys = { type: 'FILTER_BY_GENDER_YOUNGERBOYS'; };
type Unisex = { type: 'FILTER_BY_GENDER_UNISEX'; };

type ClearFilters = { type: 'CLEAR_FILTERS'; };

export type FilterActions =
    BySearchQuery |
    ItemsPerFetch |
    ByInStock |
    ByNewIn |
    //SORT
    SortByPrice |
    SortByAlphabet |
    SortByPouplarity |
    //SIZE
    BySizeXS |
    BySizeS |
    BySizeM |
    BySizeL |
    BySizeXL |
    //MATERIAL
    ByCashmere |
    ByCotton |
    ByPolyester |
    ByLeather |
    ByRubber |
    ByDenim |
    ByWool |
    ByAcrylic |
    BySilk |
    BySuede |
    BySpandex |
    //GENDER
    Woman |
    Man |
    OlderBoys |
    YoungerBoys |
    Unisex |
    ClearFilters;