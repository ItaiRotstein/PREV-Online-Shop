import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AppState } from "../../context/AppContext";
import { utilService } from "../../services/util.service";

export const Gender = () => {
    const [iseMenuShow, setMenuShow] = useState<boolean>(false);

    const {
        filterDispatch,
        filterState: { byGender },
        productState: { genderCount, }
    } = AppState();

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
                {Object.keys(byGender).map((gender, idx) =>
                    <div key={utilService.makeId()} className="flex items-center py-1">
                        <input
                            id={`gender-${gender}`}
                            type="checkbox"
                            checked={Object.values(byGender)[idx]}
                            onChange={() =>
                                filterDispatch({
                                    type: "FILTER_BY_GENDER", payload: {
                                        ...byGender, [gender]: !Object.values(byGender)[idx]
                                    }
                                })
                            }
                            className="w-5 h-5 text-blue-600 bg-gray-100 rounded"
                        />
                        <label htmlFor={`gender-${gender}`} className="ms-2 text-sm font-medium text-gray-900">
                            {gender.replace("_", " ")} ({Object.values(genderCount)[idx]})
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};