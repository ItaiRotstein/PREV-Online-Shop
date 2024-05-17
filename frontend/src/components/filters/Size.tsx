import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AppState } from "../../context/AppContext";
import { utilService } from "../../services/util.service";

export const Size = () => {
    const [iseMenuShow, setMenuShow] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        productState: { sizeCount, }
    } = AppState();

    const sizeList = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
    ];

    function handleChange(size: string) {
        if (!searchParams.has('size', size)) {
            searchParams.append('size', size);
        } else {
            searchParams.delete('size', size);
        }
        setSearchParams(searchParams);
    }

    return (
        <div className="py-2 border-b border-gray-300">
            <div
                className="flex justify-between items-center text-sm font-bold cursor-pointer"
                onClick={() => setMenuShow(!iseMenuShow)}
            >
                Size
                {iseMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div className={`${iseMenuShow ? "h-[156px] py-2" : "h-0"} transition-all duration-300 overflow-hidden font-normal`}>
                {sizeList.map((size, idx) =>
                    <div key={utilService.makeId()} className="flex items-center py-1">
                        <input
                            id={`size-${size}`}
                            type="checkbox"
                            checked={searchParams.has('size', size)}
                            onChange={() => handleChange(size)}
                            className="w-5 h-5 rounded cursor-pointer"
                        />
                        <label htmlFor={`size-${size}`} className="ms-2 text-sm font-medium text-gray-900 cursor-pointer">
                            {size.replace("_", " ")} ({Object.values(sizeCount)[idx]})
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};