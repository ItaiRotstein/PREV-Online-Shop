import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AppState } from "../../context/AppContext";
import { utilService } from "../../services/util.service";

export const Gender = () => {
    const [iseMenuShow, setMenuShow] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        productState: { genderCount, }
    } = AppState();

    const genderList = [
        'Woman',
        'Man',
        'Older_Boys',
        'Younger_Boys',
        'Unisex',
    ];

    function handleChange(gender: string) {
        if (!searchParams.has('gender', gender)) {
            searchParams.append('gender', gender);
        } else {
            searchParams.delete('gender', gender);
        }
        setSearchParams(searchParams);
    }

    return (
        <div className="py-2 border-b border-gray-300">
            <div
                className="flex justify-between items-center text-sm font-bold cursor-pointer"
                onClick={() => setMenuShow(!iseMenuShow)}
            >
                Gender
                {iseMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div className={`${iseMenuShow ? "h-[156px] py-2" : "h-0"} transition-all duration-300 overflow-hidden font-normal`}>
                {genderList.map((gender, idx) =>
                    <div key={utilService.makeId()} className="flex items-center py-1">
                        <input
                            id={`gender-${gender}`}
                            type="checkbox"
                            checked={searchParams.has('gender', gender)}
                            onChange={() => handleChange(gender)}
                            className="w-5 h-5 text-blue-600 bg-gray-100 rounded cursor-pointer"
                        />
                        <label htmlFor={`gender-${gender}`} className="ms-2 text-sm font-medium text-gray-900 cursor-pointer">
                            {gender.replace("_", " ")} ({Object.values(genderCount)[idx]})
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};