import { MdDeleteForever } from "react-icons/md";
import { Product } from "../types/Product";
import { CartActions } from "../types/Cart";

type Props = {
    product: Product;
    cartDispatch: React.Dispatch<CartActions>;
};

const CartItem = ({ product, cartDispatch }: Props) => {
    return (
        <li className="w-full flex justify-between items-center gap-4 md:px-8 lg:px-24 py-2 border-b rounded-t-lg">
            <img src={product.previewImg} className="w-20 md:w-32 rounded-sm" />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <select
            className="focus:outline-none"
                id="qty"
                name="qty"
                value={product.qty}
                onChange={(e) => cartDispatch(
                    {
                        type: "CHANGE_CART_QTY",
                        payload: { _id: product._id, qty: e.target.value }
                    }
                )}>
                {[...Array(product.inStock).keys()].map((stock) => (
                    <option key={stock}> {stock + 1}</option>
                ))}
            </select>
            <MdDeleteForever
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={() => cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product._id
                })}
            />
        </li>
    );
};
export default CartItem;