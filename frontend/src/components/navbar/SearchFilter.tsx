import { memo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchFilter = memo(() => {
    const [searchText, setSearchText] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    function handleSubmit() {
        searchParams.set('q', searchText);
        setSearchParams(searchParams);
    }

    return (
        <div className="relative hidden md:flex grow items-center justify-between md:w-auto" id="navbar-search">
            <form action="."
                className="relative w-3/4"
                onSubmit={(e) => {
                    handleSubmit();
                    e.preventDefault();
                }}
            >
                <input
                    type="search"
                    id="search-filter"
                    className="w-full p-2 text-base text-gray-900 rounded-sm bg-gray-50 outline-none focus:ring-2  focus:ring-blue-500"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <div className="absolute inset-y-0 end-2 flex items-center cursor-pointer" onClick={handleSubmit}>
                    <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
            </form>
        </div>
    );
});