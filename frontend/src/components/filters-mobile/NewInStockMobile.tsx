import { useSearchParams } from "react-router-dom";
import { AppState } from "../../context/AppContext";

import { FaCheck } from "react-icons/fa6";

export const NewInStockMobile = ({ activeFilterIdx }: { activeFilterIdx: number | null; }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        productState: { inStockCount, newInCount },
    } = AppState();

    function handleInstock() {
        if(searchParams.has('instock','true')) {
            searchParams.delete('instock', 'true');
        }else{
            searchParams.append('instock', 'true');
        }
        setSearchParams(searchParams);
    }

    function handleNewIn() {
        if(searchParams.has('newin','true')) {
            searchParams.delete('newin', 'true');
        }else{
            searchParams.append('newin', 'true');
        }
        setSearchParams(searchParams);
    }

    return (
        <div className="ps-4 border-b border-b-gray-400 font-normal">
            <div className="flex items-center py-2 cursor-pointer"
                onClick={handleNewIn}
            >
                <p> New In ({newInCount}) </p>
                {searchParams.has('newin') && <FaCheck className={`w-5 h-5 ${activeFilterIdx ? "ms-[40px]" : "ms-auto"} me-4 text-green-600`} />}
            </div>
            <div
                className="flex items-center py-2 cursor-pointer"
                inputMode='none'
                onClick={handleInstock}
            >
                <p> In Stock ({inStockCount}) </p>
                {searchParams.has('instock') && <FaCheck className={`w-5 h-5 ${activeFilterIdx ? "ms-[32px]" : "ms-auto"} me-4 text-green-600`} />}
            </div>
        </div>
    );
};