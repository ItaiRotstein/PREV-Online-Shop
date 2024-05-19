import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AppState } from "../../context/AppContext";
import { utilService } from "../../services/util.service";
import { useSearchParams } from "react-router-dom";

export const Category = () => {
    const [iseMenuShow, setMenuShow] = useState<boolean>(false);
    const [isViewMore, setViewMore] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        productState: { categoryCount, }
    } = AppState();

    const categoryList = [
        "Shirts",
        "Dresses",
        "Jeans",
        "Sweaters",
        "Hoodies",
        "T-Shirts",
        "Jackets",
        "Blouses",
        "Pants",
        "Blazers",
        "Accessories",
        "Socks",
        "Bags",
        "Vests",
        "Hats",
        "Shoes",
        "Shorts",
        "Tops",
        "Polos",
    ];

    function handleChange(category: string) {
        if (!searchParams.has('category', category)) {
            searchParams.append('category', category);
        } else {
            searchParams.delete('category', category);
        }
        setSearchParams(searchParams);
    }

    return (
        <div className="py-2 border-b border-gray-300">
            <div
                className="flex justify-between items-center text-sm font-bold cursor-pointer"
                onClick={() => setMenuShow(!iseMenuShow)}
            >
                Category
                {iseMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div className={`${iseMenuShow ? `${isViewMore ? "h-[320px] " : "h-[236px] "} py-2` : "h-0"} transition-all duration-300 overflow-hidden font-normal`}>
                {categoryList.map((category, idx) =>
                    <div key={utilService.makeId()} className="flex items-center py-1">
                        <input
                            id={`category-${category}`}
                            type="checkbox"
                            checked={searchParams.has('category', category)}
                            onChange={() => handleChange(category)}
                            className="w-5 h-5 text-blue-600 bg-gray-100 rounded cursor-pointer"
                        />
                        <label htmlFor={`category-${category}`} className="ms-2 text-sm font-medium text-gray-900 cursor-pointer">
                            {category.replace("_", " ")} ({Object.values(categoryCount)[idx]})
                        </label>
                    </div>
                )}
            </div>
            {iseMenuShow && <button
                className="py-2 text-sm font-medium text-green-700"
                onClick={() => setViewMore(!isViewMore)}
            >
                {isViewMore ? "View Less" : "View More"}
            </button>}
        </div>
    );
};;