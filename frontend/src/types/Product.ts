export type Product = {
        _id: string;
        name: string;
        price: string;
        colors: string[];
        sizes: string[];
        material: string[];
        gender: string[];
        use: string[];
        newIn: boolean;
        inStock: boolean;
        popularity: number;
        previewImg: string;
        images: string[];
        qty: string;
};

export type ProductActions = { type: 'GET_PRODUCTS_DATA'; payload: ProductState; };

export type ProductState = {
        products: Product[];
        totalProductsCount: number;
        inStockCount: number;
        newInCount: number;
        sizeCount: {
                sizeXScount: number;
                sizeScount: number;
                sizeMcount: number;
                sizeLcount: number;
                sizeXLcount: number;
        };
        materialCount: {
                countCashmere: number;
                countCotton: number;
                countPolyester: number;
                countLeather: number;
                countRubber: number;
                countDenim: number;
                countWool: number;
                countAcrylic: number;
                countSilk: number;
                countSuede: number;
                countSpandex: number;
        };
        genderCount: {
                countWoman: number;
                countMan: number;
                countOlderBoys: number;
                countYoungerBoys: number;
                countUnisex: number;
        },
};
