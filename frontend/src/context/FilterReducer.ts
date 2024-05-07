import { FilterActions, FilterState } from '../types/Filter';

const initialState = {
    byInStock: false,
    byNewIn: false,
    searchQuery: '',
    itemsPerFetch: 20,
    sort: {
        byPrice: '',
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
};

const FilterReducer = (state: FilterState, action: FilterActions) => {
    switch (action.type) {
        case 'FILTER_BY_INSTOCK':
            return { ...state, byInStock: !state.byInStock };
        case 'FILTER_BY_NEWIN':
            return { ...state, byNewIn: !state.byNewIn };
        case 'SORT_BY_PRICE':
            return {
                ...state, sort: {
                    ...state.sort,
                    byPrice: action.payload,
                    byAlphabet: false,
                    byPopularity: false
                }
            };
        case 'SORT_BY_ALPHABET':
            return {
                ...state, sort: {
                    ...state.sort,
                    byAlphabet: true,
                    byPopularity: false,
                    byPrice: ''
                }
            };
        case 'SORT_BY_POPULARITY':
            return {
                ...state, sort: {
                    ...state.sort,
                    byPopularity: true,
                    byAlphabet: false,
                    byPrice: ''
                }
            };
        //SIZE
        case `FILTER_BY_SIZE_XS`:
            return { ...state, bySize: { ...state.bySize, XS: !state.bySize.XS } };
        case `FILTER_BY_SIZE_S`:
            return { ...state, bySize: { ...state.bySize, S: !state.bySize.S } };
        case `FILTER_BY_SIZE_M`:
            return { ...state, bySize: { ...state.bySize, M: !state.bySize.M } };
        case `FILTER_BY_SIZE_L`:
            return { ...state, bySize: { ...state.bySize, L: !state.bySize.L } };
        case `FILTER_BY_SIZE_XL`:
            return { ...state, bySize: { ...state.bySize, XL: !state.bySize.XL } };
        //MATERIAL
        case 'FILTER_BY_MATERIAL_CASHMERE':
            return { ...state, byMaterial: { ...state.byMaterial, Cashmere: !state.byMaterial.Cashmere } };
        case 'FILTER_BY_MATERIAL_COTTON':
            return { ...state, byMaterial: { ...state.byMaterial, Cotton: !state.byMaterial.Cotton } };
        case 'FILTER_BY_MATERIAL_POLYESTER':
            return { ...state, byMaterial: { ...state.byMaterial, Polyester: !state.byMaterial.Polyester } };
        case 'FILTER_BY_MATERIAL_LEATHER':
            return { ...state, byMaterial: { ...state.byMaterial, Leather: !state.byMaterial.Leather } };
        case 'FILTER_BY_MATERIAL_RUBBER':
            return { ...state, byMaterial: { ...state.byMaterial, Rubber: !state.byMaterial.Rubber } };
        case 'FILTER_BY_MATERIAL_DENIM':
            return { ...state, byMaterial: { ...state.byMaterial, Denim: !state.byMaterial.Denim } };
        case 'FILTER_BY_MATERIAL_WOOL':
            return { ...state, byMaterial: { ...state.byMaterial, Wool: !state.byMaterial.Wool } };
        case 'FILTER_BY_MATERIAL_ACRYLIC':
            return { ...state, byMaterial: { ...state.byMaterial, Acrylic: !state.byMaterial.Acrylic } };
        case 'FILTER_BY_MATERIAL_SILK':
            return { ...state, byMaterial: { ...state.byMaterial, Silk: !state.byMaterial.Silk } };
        case 'FILTER_BY_MATERIAL_SUEDE':
            return { ...state, byMaterial: { ...state.byMaterial, Suede: !state.byMaterial.Suede } };
        case 'FILTER_BY_MATERIAL_SPANDEX':
            return { ...state, byMaterial: { ...state.byMaterial, Spandex: !state.byMaterial.Spandex } };
        //GENDER
        case 'FILTER_BY_GENDER_WOMAN':
            return { ...state, byGender: { ...state.byGender, Woman: !state.byGender.Woman } };
        case 'FILTER_BY_GENDER_MAN':
            return { ...state, byGender: { ...state.byGender, Man: !state.byGender.Man } };
        case 'FILTER_BY_GENDER_OLDERBOYS':
            return { ...state, byGender: { ...state.byGender, OlderBoys: !state.byGender.OlderBoys } };
        case 'FILTER_BY_GENDER_YOUNGERBOYS':
            return { ...state, byGender: { ...state.byGender, YoungerBoys: !state.byGender.YoungerBoys } };
        case 'FILTER_BY_GENDER_UNISEX':
            return { ...state, byGender: { ...state.byGender, Unisex: !state.byGender.Unisex } };
        case 'FILTER_BY_SEARCH_QUERY':
            return { ...state, searchQuery: action.payload };
        case 'SET_ITEMS_PER_FETCH':
            return { ...state, itemsPerFetch: state.itemsPerFetch + action.payload };
        case 'CLEAR_FILTERS':
            return initialState;
        default:
            return state;
    }
};
export default FilterReducer;