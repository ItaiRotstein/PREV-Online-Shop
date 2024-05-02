export type Product = {
        _id: number;
        name: string;
        price: string;
        previewImg: string;
        fastDelivery: boolean;
        inStock: number;
        rating: number;
        qty: string;
};

type GetProducts = { type: 'GET_PRODUCTS'; payload: []; };
type GetProductsCount = { type: 'GET_PRODUCTS_COUNT'; payload: number; };

export type ProductActions = GetProducts | GetProductsCount;

export type ProductState = {
        products: Product[];
        productsCount: number;
}
