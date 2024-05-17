import { memo, useState } from "react";

import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { SizeMobile } from "./SizeMobile";
import { MaterialMobile } from "./MaterialMobile";
import { GenderMobile } from "./GenderMobile";
import { NewInStockMobile } from "./NewInStockMobile";
import { AppState } from "../../context/AppContext";
import { useSearchParams } from "react-router-dom";

export const FiltersMobile = memo(() => {
    const [isFiltertMenuShow, setFilterMenuShow] = useState<boolean>(false);
    const [activeFilterIdx, setActiveFilterIdx] = useState<number | null>(null);
    let [searchParams, setSearchParams] = useSearchParams();

    const {
        productState: { totalProductsCount },
    } = AppState();

    //disable page scrolling when filter menu show
    document.body.style.overflow = isFiltertMenuShow ? "hidden" : "auto";

    function handleClearAll() {
        searchParams = new URLSearchParams()
        searchParams.append('sort', 'popular' )
        setSearchParams(searchParams)
    }
    return (
        <>
            <button
                className="w-1/2 flex justify-center items-center gap-1 border-b border-gray-300 p-4 font-bold text-sm"
                onClick={() => {
                    setFilterMenuShow(true);
                    setActiveFilterIdx(null);
                }}
            >
                <TbAdjustmentsHorizontal className="w-5 h-5" />
                Filter
            </button>
            {isFiltertMenuShow && <div className={`fixed top-0 ${isFiltertMenuShow ? "right-0" : "-right-full"} w-full h-full transition-all duration-500 z-20 bg-white text-black text-sm font-medium`}>
                <div className="flex justify-between items-center py-3 ps-3 pe-5 border-b border-b-gray-400 bg-[rgb(247,247,247)]">
                    <div className="flex items-center gap-3">
                        <IoClose
                            className="w-5 h-5 cursor-pointer"
                            onClick={() => { setFilterMenuShow(false); }}
                        />
                        <h1>Filter Products</h1>
                    </div>
                    <button
                        className="text-green-700"
                        onClick={handleClearAll}
                    >
                        Clear All
                    </button>
                </div>
                <NewInStockMobile activeFilterIdx={activeFilterIdx} />
                <div className={`w-full h-full ${activeFilterIdx ? "bg-gray-100" : "bg-white"}`}>
                    <SizeMobile idx={1} activeFilterIdx={activeFilterIdx} setActiveFilterIdx={setActiveFilterIdx} />
                    <MaterialMobile idx={2} activeFilterIdx={activeFilterIdx} setActiveFilterIdx={setActiveFilterIdx} />
                    <GenderMobile idx={3} activeFilterIdx={activeFilterIdx} setActiveFilterIdx={setActiveFilterIdx} />
                </div>
                <div className="fixed bottom-0 p-4 w-full flex justify-center bg-gray-100 border-t">
                    {
                        totalProductsCount > 0 ? (
                            <button
                                className="bg-green-600 text-white rounded py-3 w-full font-semibold text-base"
                                onClick={() => {
                                    setFilterMenuShow(false);
                                }}
                            >
                                View {totalProductsCount} Products
                            </button>
                        ) : (
                            <button className="bg-gray-300 text-gray-500 rounded py-3 w-full font-semibold text-base cursor-not-allowed">
                                No Products Matching Your Filters
                            </button>
                        )
                    }
                </div>
            </div>}
        </>
    );
});