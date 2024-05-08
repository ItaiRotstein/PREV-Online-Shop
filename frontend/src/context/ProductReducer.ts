import { ProductActions, ProductState } from "../types/Product";

const ProductReducer = (state: ProductState, action: ProductActions) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_TOTAL_PRODUCTS_COUNT":
      return { ...state, totalProductsCount: action.payload };
    case "GET_PRODUCTS_DATA":
      return {
        ...state,
        inStockCount: action.payload.inStockCount,
        newInCount: action.payload.newInCount,
        //SIZE COUNT
        sizeCount: {
          ...state.sizeCount,
          sizeXScount: action.payload.sizeCount.sizeXScount,
          sizeScount: action.payload.sizeCount.sizeScount,
          sizeMcount: action.payload.sizeCount.sizeMcount,
          sizeLcount: action.payload.sizeCount.sizeLcount,
          sizeXLcount: action.payload.sizeCount.sizeXLcount,
        },
        //MATERIAL COUNT
        materialCount: {
          ...state.materialCount,
          countCashmere: action.payload.materialCount.countCashmere,
          countCotton: action.payload.materialCount.countCotton,
          countPolyester: action.payload.materialCount.countPolyester,
          countLeather: action.payload.materialCount.countLeather,
          countRubber: action.payload.materialCount.countRubber,
          countDenim: action.payload.materialCount.countDenim,
          countWool: action.payload.materialCount.countWool,
          countAcrylic: action.payload.materialCount.countAcrylic,
          countSilk: action.payload.materialCount.countSilk,
          countSuede: action.payload.materialCount.countSuede,
          countSpandex: action.payload.materialCount.countSpandex,
        },
        //GENDER COUNT
        genderCount: {
          ...state.genderCount,
          countWoman: action.payload.genderCount.countWoman,
          countMan: action.payload.genderCount.countMan,
          countOlderBoys: action.payload.genderCount.countOlderBoys,
          countYoungerBoys: action.payload.genderCount.countYoungerBoys,
          countUnisex: action.payload.genderCount.countUnisex,
        },
      };
    default:
      return state;
  }
};
export default ProductReducer;