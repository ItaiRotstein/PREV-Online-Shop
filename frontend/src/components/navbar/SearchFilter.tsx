import { memo } from "react";
import { FilterActions } from "../../types/Filter";

type Props = {
    searchQuery: string;
    filterDispatch: React.Dispatch<FilterActions>;
};
export const SearchFilter = memo(({ searchQuery, filterDispatch }: Props) => {

    return (
        <div className="relative hidden md:flex grow items-center justify-between md:w-auto" id="navbar-search">
            <input
                type="text"
                id="search-navbar"
                className="w-full p-2 text-sm text-gray-900 rounded-sm bg-gray-50 outline-none focus:ring-2  focus:ring-blue-500"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => filterDispatch({
                    type: "FILTER_BY_SEARCH_QUERY",
                    payload: e.target.value
                })}
            />
            <div className="absolute inset-y-0 end-2 flex items-center cursor-pointer">
                <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
        </div>
    );
});