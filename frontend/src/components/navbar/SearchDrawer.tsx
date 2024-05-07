import { memo, useEffect, useRef } from 'react';
import { AppState } from '../../context/AppContext';

import { IoClose } from "react-icons/io5";

type Props = {
    isSearchDrawerOpen: boolean;
    setSearchDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SearchDrawer = memo(({ isSearchDrawerOpen, setSearchDrawerOpen }: Props) => {

    const {
        filterState: { searchQuery },
        filterDispatch
    } = AppState();

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    });

    return (
        <div className={`fixed ${isSearchDrawerOpen ? ' right-0' : 'block -right-full'} shadow-xlg w-[92%] h-full transition-all duration-500 z-20 bg-white text-black`}>
            <div className="relative md:flex grow items-center justify-between md:w-auto" id="navbar-search">
                <input
                    type="text"
                    id="search-navbar"
                    ref={inputRef}
                    className="w-full p-2 text-sm text-gray-900 rounded-sm bg-gray-50 outline-none focus:ring-2  focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => filterDispatch({
                        type: 'FILTER_BY_SEARCH_QUERY',
                        payload: e.target.value
                    })}
                />
                <div className="absolute inset-y-0 end-2 flex items-center cursor-pointer">
                    <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
            </div>
            <IoClose
                className={`text-white absolute -left-8 top-2 w-6 h-7 cursor-pointer transition-all ${isSearchDrawerOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={() => setSearchDrawerOpen(false)}
            />
        </div>
    );
});