import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { utilService } from "../../services/util.service";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

type sortBy = {
    idx: number | null;
    title: string;
};

export const Sort = () => {
    const [activeMenuSortBy, setActiveMenuSortBy] = useState<sortBy>({ title: "Most Popular", idx: null });
    const [isSortMenuShow, setSortMenuShow] = useState<boolean>(false);
    let [searchParams, setSearchParams] = useSearchParams();

    const sortByList: { title: string; paramKey: string; }[] = [
        { title: "Most Popular", paramKey: 'popular' },
        { title: "Alphabetical", paramKey: 'alphabet' },
        { title: "Price: Low - High", paramKey: 'price' },
        { title: "Price: High - Low", paramKey: 'price-rev' },
    ];

    function handleClick(title: string, paramKey: string, idx: number) {
        setActiveMenuSortBy({ title, idx });
        setSortMenuShow(false);
        searchParams.set('sort', paramKey);
        setSearchParams(searchParams);
    }
    return (
        <div className="relative">
            <>
                <div
                    className={`w-[220px] flex items-center justify-between border border-gray-300 hover:border-black active:border-black p-2 rounded ${isSortMenuShow ? "cursor-default" : "cursor-pointer"} text-sm`}
                    onClick={() => setSortMenuShow(!isSortMenuShow)}
                >
                    <span className="grow">
                        {activeMenuSortBy.title}
                    </span>
                    {isSortMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {
                    isSortMenuShow &&
                    <ul className="absolute w-[220px] top-[38px] bg-white drawer-shadow rounded text-left text-sm">
                        {sortByList.map((sortBy, idx) =>
                            <li
                                key={utilService.makeId(6)}
                                className={`flex gap-3 py-[6px] px-4 ${activeMenuSortBy.idx === idx ? "bg-gray-100" : "bg-white"} hover:bg-gray-600 hover:text-white cursor-pointer first:rounded-t last:rounded-b`}
                                onClick={() => handleClick(sortBy.title, sortBy.paramKey, idx)}
                            >
                                {sortBy.title}
                            </li>
                        )}
                    </ul>
                }
            </>
        </div>
    );
};