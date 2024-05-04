import { useState } from 'react';

import { BiSortAlt2 } from "react-icons/bi";
import { AppState } from '../../context/AppContext';
import { FilterActions } from '../../types/Filter';

export const SortMobile = () => {
    const [isSortMenuShow, setSortMenuShow] = useState<boolean>(false);
    const [activeMenuIdx, setActiveMenuIdx] = useState<number | null>(null);

    const {
        filterDispatch,
    } = AppState();
    type SortList = {
        title: string;
        dispatch: FilterActions;
    };
    const sortList: SortList[] = [
        { title: 'Most Popular', dispatch: {type: 'SORT_BY_POPULARITY'}},
        { title: 'Alphabetical', dispatch: {type: 'SORT_BY_ALPHABET'}},
        { title: 'Price: Low - High', dispatch: { type: 'SORT_BY_PRICE', payload: 'lowtohigh' } },
        { title: 'Price: High - Low', dispatch: { type: 'SORT_BY_PRICE', payload: 'hightolow' } },
    ];

    return (
        <button
            className='relative w-1/2 flex justify-center items-center gap-1 border-b border-r border-gray-300 p-4 font-bold text-sm'
            onClick={() => setSortMenuShow(!isSortMenuShow)}
        >
            <BiSortAlt2 className='w-5 h-5' />
            <span>Sort</span>
            {isSortMenuShow &&
                <div className='absolute translate-x-30 translate-y-[160px] z-10' onClick={(e) => e.stopPropagation()}>
                    <span className='arrow-up'></span>
                    <ul className=' bg-white border-t-4 border-black drawer-shadow text-left'>
                        {sortList.map((sortBy, idx) =>
                            <li
                                key={sortBy + idx.toString()}
                                className={`flex gap-3 py-[14px] ${activeMenuIdx === idx ? 'bg-gray-200' : 'bg-white'} hover:brightness-95`}
                                onClick={() => {
                                    setActiveMenuIdx(idx);
                                    filterDispatch(sortBy.dispatch);
                                }}
                            >
                                <div className='w-4 px-1'>
                                    {activeMenuIdx === idx && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fillRule="evenodd"><circle fill="#000" cx="9" cy="9" r="8.727" />
                                            <path d="M12.41 5.727l.955.98-5.422 5.565L4.636 8.85l.96-.976 2.35 2.435z" fill="#fff" />
                                        </svg>
                                    )}
                                </div>
                                <span className='px-4'>
                                    {sortBy.title}
                                </span>
                            </li>
                        )}
                    </ul>
                </div>}
        </button>
    );
};