import { useState } from 'react';

import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { SizeMobile } from './SizeMobile';
import { MaterialMobile } from './MaterialMobile';
import { GenderMobile } from './GenderMobile';
import { NewInStockMobile } from './NewInStockMobile';

export const FiltersMobile = () => {

    const [isFiltertMenuShow, setFilterMenuShow] = useState<boolean>(false);
    const [activeFilterIdx, setActiveFilterIdx] = useState<number | null>(null);

    document.body.style.overflow = isFiltertMenuShow ? 'hidden' : 'auto';

    return (
        <>
            <button
                className='w-1/2 flex justify-center items-center gap-1 border-b border-gray-300 p-4 font-bold text-sm'
                onClick={() => {
                    setFilterMenuShow(true);
                    setActiveFilterIdx(null);
                }}
            >
                <TbAdjustmentsHorizontal className='w-5 h-5' />
                <span>Filter</span>
            </button>
            <div className={`fixed top-0 ${isFiltertMenuShow ? 'right-0' : '-right-full'} w-full h-full transition-all duration-500 z-20 bg-white text-black text-sm font-medium`}>
                <div className='flex justify-between items-center py-3 ps-3 pe-5 border-b border-b-gray-400 bg-[rgb(247,247,247)]'>
                    <div className='flex items-center gap-3'>
                        <IoClose
                            className='w-5 h-5 cursor-pointer'
                            onClick={() => {
                                setFilterMenuShow(false);
                            }}
                        />
                        <h1>Filter Products</h1>
                    </div>
                    <button className='text-green-700'>Clear All</button>
                </div>
                <NewInStockMobile />
                <div className={`h-full ${activeFilterIdx ? 'bg-gray-100' : 'bg-white'}`}>
                    <SizeMobile idx={1} activeFilterIdx={activeFilterIdx} setActiveFilterIdx={setActiveFilterIdx} />
                    <MaterialMobile idx={2} activeFilterIdx={activeFilterIdx} setActiveFilterIdx={setActiveFilterIdx} />
                    <GenderMobile idx={3} activeFilterIdx={activeFilterIdx} setActiveFilterIdx={setActiveFilterIdx} />
                </div>
                <div className='fixed bottom-0 p-4 w-full flex justify-center bg-gray-100 border-t'>
                    <button
                        className='bg-green-600 text-white rounded py-3 w-full font-semibold text-base'
                        onClick={() => {
                            setFilterMenuShow(false);
                        }}
                    >
                        View 395 Products
                    </button>
                </div>
            </div>
        </>
    );
};