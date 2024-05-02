import { Product } from './Product';

export type Cart = {
    _id: number;
    qty: string;
};

type Add = { type: 'ADD_TO_CART'; payload: Product; };
type Remove = { type: 'REMOVE_FROM_CART'; payload: number; };
type ChangeQty = { type: 'CHANGE_CART_QTY'; payload: Cart; };

export type CartActions =
    Add |
    Remove |
    ChangeQty;