import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AppState } from "../../context/AppContext";
import { utilService } from "../../services/util.service";

export const Material = () => {
    const [iseMenuShow, setMenuShow] = useState<boolean>(false);
    const [isViewMore, setViewMore] = useState<boolean>(false);

    const {
        filterDispatch,
        filterState: { byMaterial },
        productState: { materialCount, }
    } = AppState();

    return (
        <div className="py-2 border-b border-gray-300">
            <div
                className="flex justify-between items-center text-sm font-bold cursor-pointer"
                onClick={() => setMenuShow(!iseMenuShow)}
            >
                Material
                {iseMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div className={`${iseMenuShow ? `${isViewMore ? "h-[320px] " : "h-[236px] "} py-2` : "h-0"} transition-all duration-300 overflow-hidden font-normal`}>
            {Object.keys(byMaterial).map((material, idx) =>
                    <div key={utilService.makeId()} className="flex items-center py-1">
                        <input
                            id={`material-${material}`}
                            type="checkbox"
                            checked={Object.values(byMaterial)[idx]}
                            onChange={() =>
                                filterDispatch({
                                    type: "FILTER_BY_MATERIAL", payload: {
                                        ...byMaterial, [material]: !Object.values(byMaterial)[idx]
                                    }
                                })
                            }
                            className="w-5 h-5 text-blue-600 bg-gray-100 rounded"
                        />
                        <label htmlFor={`material-${material}`} className="ms-2 text-sm font-medium text-gray-900">
                            {material.replace("_", " ")} ({Object.values(materialCount)[idx]})
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