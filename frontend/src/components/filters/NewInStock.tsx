import { AppState } from "../../context/AppContext";

export const NewInStock = () => {

    const { productState: { totalProductsCount } } = AppState();
    return (
        <>
            <div className="sticky top-[96px] flex justify-between items-end border-b border-gray-300 pt-4 pb-5 font-medium bg-white">
                <h1>
                    {totalProductsCount} Products
                </h1>
                <button className="text-sm text-green-700">
                    Clear All
                </button>
            </div>
            <div className="py-4 border-b border-gray-300">
                <div className="flex items-center mb-4">
                    <input id="new-in" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 rounded" />
                    <label htmlFor="new-in" className="ms-2 text-sm font-medium text-gray-900">New In(397)</label>
                </div>
                <div className="flex items-center">
                    <input id="in-stock" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                    <label htmlFor="in-stock" className="ms-2 text-sm font-medium text-gray-900">In Stock(214)</label>
                </div>
            </div>
        </>
    );
};