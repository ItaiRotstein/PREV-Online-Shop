import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

type sortBy = {
    idx: number | null;
    title: string;
};

function HomeHeader() {
    const [activeMenuSortBy, setActiveMenuSortBy] = useState<sortBy>({ title: "Most Relevant", idx: null });
    const [isSortMenuShow, setSortMenuShow] = useState<boolean>(false);
    const sortByList = [
        { title: "Most Relevant" },
        { title: "Most Popular" },
        { title: "Alphabetical" },
        { title: "Price: Low - High" },
        { title: "Price: High - Low" },
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
                    {sortByList.map((item, idx) =>
                        <li
                            key={item + idx.toString()}
                            className={`flex gap-3 py-[6px] px-4 ${activeMenuSortBy.idx === idx ? "bg-gray-100" : "bg-white"} hover:bg-gray-600 hover:text-white cursor-pointer`}
                            onClick={() => {
                                setActiveMenuSortBy({ title: item.title, idx });
                                setSortMenuShow(false);
                            }}
                        >
                            {item.title}
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}
export default HomeHeader;