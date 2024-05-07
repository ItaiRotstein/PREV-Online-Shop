import { AppState } from "../../context/AppContext";

import { FaCheck } from "react-icons/fa6";

export const NewInStockMobile = ({ activeFilterIdx }: { activeFilterIdx: number | null; }) => {

    const {
        productState: { inStockCount, newInCount },
        filterState: { byInStock, byNewIn },
        filterDispatch
    } = AppState();

    return (
        <div className="ps-4 border-b border-b-gray-400 font-normal">
            <div className="flex items-center py-2 cursor-pointer"
                onClick={() => filterDispatch({
                    type: "FILTER_BY_NEWIN"
                })}
            >
                <p> New In ({newInCount}) </p>
                {byNewIn && <FaCheck className={`w-5 h-5 ${activeFilterIdx ? "ms-[128px]": "ms-auto"} me-4 text-green-600`} />}
            </div>
            <div
                className="flex items-center py-2 cursor-pointer"
                onClick={() => filterDispatch({
                    type: "FILTER_BY_INSTOCK"
                })}
            >
                <p> In Stock ({inStockCount}) </p>
                {byInStock && <FaCheck className={`w-5 h-5 ${activeFilterIdx ? "ms-[120px]": "ms-auto"} me-4 text-green-600`} />}
            </div>
        </div>
    );
};