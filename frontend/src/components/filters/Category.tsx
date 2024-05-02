import { useState } from 'react';

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Category = () => {
    const [iseMenuShow, setMenuShow] = useState<boolean>(false);
    const [isViewMore, setViewMore] = useState<boolean>(false);

    const categoryList = [
        { category: 'Shirts' },
        { category: 'Dresses' },
        { category: 'Jeans' },
        { category: 'Sweaters' },
        { category: 'Hoodies' },
        { category: 'T-Shirts' },
        { category: 'Jackets' },
        { category: 'Blouses' },
        { category: 'Pants' },
        { category: 'Blazers' },
        { category: 'Accessories' },
        { category: 'Socks' },
        { category: 'Bags' },
        { category: 'Vests' },
        { category: 'Hats' },
        { category: 'Shoes' },
        { category: 'Shorts' },
        { category: 'Tops' },
        { category: 'Polos' },
    ];

    return (
        <div className='py-2 border-b border-gray-300'>
            <div
                className='flex justify-between items-center text-sm font-bold cursor-pointer'
                onClick={() => {
                    setMenuShow(!iseMenuShow);
                    setViewMore(false);
                }}
            >
                Category
                {iseMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div className={`${iseMenuShow ? `${isViewMore ? 'h-[540px] ' : 'h-[236px] '} py-2` : 'h-0'} transition-all duration-300 overflow-hidden font-normal`}>
                {categoryList.map((item) =>
                    <div className="flex items-center py-1">
                        <input id="size-sm" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="size-sm" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {item.category}
                        </label>
                    </div>
                )}
            </div>
            {iseMenuShow && <button
                className='py-2 text-sm font-medium text-green-700'
                onClick={() => setViewMore(!isViewMore)}
            >
                {isViewMore ? 'View Less' : 'View More'}
            </button>}
        </div>
    );
};;