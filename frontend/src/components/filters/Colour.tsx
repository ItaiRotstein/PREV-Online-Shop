import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Colour = () => {
    const [iseMenuShow, setMenuShow] = useState<boolean>(false);

    const colourList = [
        "Red",
        "Green",
        "Blue",
        "White",
        "Gray",
        "Navy",
    ];

    return (
        <div className="py-2 border-b border-gray-300">
            <div
                className="flex justify-between items-center text-sm font-bold cursor-pointer"
                onClick={() => setMenuShow(!iseMenuShow)}
            >
                Colour
                {iseMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div className={`${iseMenuShow ? "h-[180px] py-2" : "h-0"} transition-all duration-300 overflow-hidden font-normal`}>
                {colourList.map((colour, idx) =>
                    <div key={colour + idx} className="flex items-center py-1">
                        <input id={`colour-${colour}`} type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 rounded" />
                        <label htmlFor={`colour-${colour}`} className="ms-2 text-sm font-medium text-gray-900">
                            {colour}
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};;