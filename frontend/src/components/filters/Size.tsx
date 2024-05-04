import { useState } from 'react';

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Size = () => {
    const [iseMenuShow, setMenuShow] = useState<boolean>(false);

    const sizeList = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
    ];

    return (
        <div className='py-2 border-b border-gray-300'>
            <div
                className='flex justify-between items-center text-sm font-bold cursor-pointer'
                onClick={() => setMenuShow(!iseMenuShow)}
            >
                Size
                {iseMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div className={`${iseMenuShow ? 'h-[156px] py-2' : 'h-0'} transition-all duration-300 overflow-hidden font-normal`}>
                {sizeList.map((size, idx) =>
                    <div key={size + idx} className="flex items-center py-1">
                        <input id={`size-${size}`} type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor={`size-${size}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {size}
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};;