import { Product } from "../types/Product";

type Props = {
    prod: Product;
};

export const ProductPreview = ({ prod }: Props) => {

    return (
        <div className="w-[49%] h-fit md:w-[32%] xl:w-[24%] px-1 md:px-2 rounded-sm overflow-hidden shadow-sm">
            <img className="block w-full h-auto aspect-[2/3]"
                src={prod.previewImg}
            />
            <div className="py-4 max-w-40 sm:max-w-52 md:max-w-56">
                <p className="font-bold md:text-xl mb-2 truncate">
                    {prod.name}
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                    ${prod.price}
                </p>
            </div>
        </div>
    );
};