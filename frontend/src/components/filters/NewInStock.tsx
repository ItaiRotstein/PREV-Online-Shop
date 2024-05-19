import { useSearchParams } from "react-router-dom";
import { AppState } from "../../context/AppContext";

export const NewInStock = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const {
        productState: {
            inStockCount,
            newInCount
        },
    } = AppState();

    function handleInstock() {
        if (searchParams.has('instock', 'true')) {
            searchParams.delete('instock', 'true');
        } else {
            searchParams.append('instock', ['true'].toString());
        }
        setSearchParams(searchParams);
    }

    function handleNewIn() {
        if (searchParams.has('newin', 'true')) {
            searchParams.delete('newin', 'true');
        } else {
            searchParams.append('newin', 'true');
        }
        setSearchParams(searchParams);
    }

    return (
        <>
            <div className="py-4 border-b border-gray-300">
                <div className="flex items-center mb-4">
                    <input
                        id="new-in"
                        type="checkbox"
                        checked={searchParams.has('newin')}
                        onChange={handleNewIn}
                        className="w-5 h-5 text-blue-600 bg-gray-100 rounded cursor-pointer"
                    />
                    <label htmlFor="new-in" className="ms-2 text-sm font-medium text-gray-900 cursor-pointer">New In ({newInCount})</label>
                </div>
                <div className="flex items-center">
                    <input
                        id="in-stock"
                        type="checkbox"
                        checked={searchParams.has('instock')}
                        onChange={handleInstock}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
                    />
                    <label htmlFor="in-stock" className="ms-2 text-sm font-medium text-gray-900 cursor-pointer">In Stock ({inStockCount})</label>
                </div>
            </div>
        </>
    );
};