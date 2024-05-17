import { memo, useEffect, useRef, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

type Props = {
    isSearchDrawerOpen: boolean;
    setSearchDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SearchDrawer = memo(({ isSearchDrawerOpen, setSearchDrawerOpen }: Props) => {
    const [searchText, setSearchText] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    function handleSubmit() {
        searchParams.set('q', searchText);
        setSearchParams(searchParams);
        setSearchDrawerOpen(false);
    }

    return (
        <div className={`fixed ${isSearchDrawerOpen ? " right-0" : "block -right-full"} shadow-xlg w-[92%] h-full transition-all duration-500 z-20 bg-white text-black`}>
            <div className="relative md:flex grow items-center justify-between md:w-auto" id="navbar-search">
                <form action="."
                    onSubmit={(e) => {
                        handleSubmit();
                        e.preventDefault();
                    }}
                >
                    <input
                        type="search"
                        id="search-drawer"
                        ref={inputRef}
                        className="w-full p-2 text-base text-gray-900 rounded-sm bg-gray-50 outline-none focus:ring-2  focus:ring-blue-500"
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </form>
            </div>
            <IoClose
                className={`text-white absolute -left-8 top-2 w-6 h-7 cursor-pointer transition-all ${isSearchDrawerOpen ? "opacity-100" : "opacity-0"}`}
                onClick={() => setSearchDrawerOpen(false)}
            />
        </div>
    );
});