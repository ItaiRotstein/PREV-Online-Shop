
import { useSearchParams } from "react-router-dom";
import { AppState } from "../../context/AppContext";
import { Sort } from "./Sort";

export function SortHeader() {
    let [searchParams, setSearchParams] = useSearchParams();

    const { productState: { totalProductsCount } } = AppState();

    function handleClaerAllClick() {
        searchParams = new URLSearchParams();
        setSearchParams(searchParams);
    }

    return (
        <div className="hidden lg:flex xl:max-w-[1280px] mx-auto justify-between items-center  px-8 bg-white text-black">
            <div className="flex justify-between items-end lg:w-1/4 xl:w-1/5 pe-7 py-4 font-semibold border-b border-gray-300">
                <h1 className="">
                    {totalProductsCount} Products
                </h1>
                <button
                    className="text-sm text-green-700"
                    onClick={handleClaerAllClick}
                >
                    Clear All
                </button>
            </div>
            <h1 className="font-medium">
                {/* Girls Tops, T-Shirts & Polos */}
            </h1>
            <Sort />
        </div>
    );
};