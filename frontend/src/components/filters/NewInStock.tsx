import { AppState } from "../../context/AppContext";

export const NewInStock = () => {

    const {
        productState: { totalProductsCount, newInCount, inStockCount },
        filterState: {
            byInStock,
            byNewIn
        },
        filterDispatch,
    } = AppState();
    return (
        <>
            <div className="sticky top-[96px] flex justify-between items-end border-b border-gray-300 pt-4 pb-5 font-medium bg-white">
                <h1>
                    {totalProductsCount} Products
                </h1>
                <button
                    className="text-sm text-green-700"
                    onClick={() => filterDispatch({
                        type: "CLEAR_FILTERS"
                    })}
                >
                    Clear All
                </button>
            </div>
            <div className="py-4 border-b border-gray-300">
                <div className="flex items-center mb-4">
                    <input
                        id="new-in"
                        type="checkbox"
                        checked={byNewIn}
                        onChange={() => filterDispatch({ type: "FILTER_BY_NEWIN" })}
                        className="w-5 h-5 text-blue-600 bg-gray-100 rounded cursor-pointer"
                    />
                    <label htmlFor="new-in" className="ms-2 text-sm font-medium text-gray-900 cursor-pointer">New In ({newInCount})</label>
                </div>
                <div className="flex items-center">
                    <input
                        id="in-stock"
                        type="checkbox"
                        checked={byInStock}
                        onChange={() => filterDispatch({ type: "FILTER_BY_INSTOCK" })}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
                    />
                    <label htmlFor="in-stock" className="ms-2 text-sm font-medium text-gray-900 cursor-pointer">In Stock ({inStockCount})</label>
                </div>
            </div>
        </>
    );
};