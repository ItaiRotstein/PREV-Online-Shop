import { useState } from 'react';

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Gender = () => {
    const [isMenuShow, setMenuShow] = useState<boolean>(false);

    return (
        <div
            className='flex justify-between items-center py-2 border-b border-gray-300 text-sm font-medium cursor-pointer'
            onClick={() => setMenuShow(!isMenuShow)}
        >
            Gender
            {isMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}

        </div>
    );
};