import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FilterActions } from "../types/Filter";
import { AppState } from "../context/AppContext";

type sortBy = {
    idx: number | null;
    title: string;
};

function HomeHeader() {
    const [activeMenuSortBy, setActiveMenuSortBy] = useState<sortBy>({ title: "Most Relevant", idx: null });
    const [isSortMenuShow, setSortMenuShow] = useState<boolean>(false);

    const { filterDispatch } = AppState();

    const sortByList: { title: string; dispatch: FilterActions; id: number; }[] = [
        { id: 11, title: "Most Popular", dispatch: { type: "SORT_BY_POPULARITY" } },
        { id: 22, title: "Alphabetical", dispatch: { type: "SORT_BY_ALPHABET" } },
        { id: 33, title: "Price: Low - High", dispatch: { type: "SORT_BY_PRICE", payload: "lowtohigh" } },
        { id: 44, title: "Price: High - Low", dispatch: { type: "SORT_BY_PRICE", payload: "hightolow" } },
    ];

    return (
        <div className="sticky top-[96px] hidden lg:flex justify-between items-center w-full py-3 px-6 bg-white">
            <h1 className="font-medium">
                Girls Tops, T-Shirts & Polos
            </h1>
            <div
                className={`w-[220px] flex items-center justify-between border border-gray-300 hover:border-black active:border-black p-2 rounded ${isSortMenuShow ? "cursor-default" : "cursor-pointer"} text-sm`}
                onClick={() => setSortMenuShow(!isSortMenuShow)}
            >
                <span className="grow">
                    {activeMenuSortBy.title}
                </span>
                {isSortMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isSortMenuShow &&
                <ul className="absolute w-[219px] right-[25px] top-[51px] bg-white drawer-shadow rounded text-left text-sm">
                    {sortByList.map((sortBy, idx) =>
                        <li
                            key={sortBy.title + sortBy.id}
                            className={`flex gap-3 py-[6px] px-4 ${activeMenuSortBy.idx === idx ? "bg-gray-100" : "bg-white"} hover:bg-gray-600 hover:text-white cursor-pointer`}
                            onClick={() => {
                                setActiveMenuSortBy({ title: sortBy.title, idx });
                                filterDispatch(sortBy.dispatch);
                                setSortMenuShow(false);
                            }}
                        >
                            {sortBy.title}
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}
export default HomeHeader;