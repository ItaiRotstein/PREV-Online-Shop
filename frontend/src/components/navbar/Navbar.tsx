import { useEffect, useState } from "react";

import { OffCanvas } from "../OffCanvas";
import { SearchDrawer } from "./SearchDrawer";
import { FiltersMobile } from "../filters-mobile/FiltersMobile";
import { SortMobile } from "./SortMobile";
import { NavbarUpper } from "./NavbarUpper";
import { NavbarLower } from "./NavbarLower";

export const Navbar = () => {
    const [isUpperNavbarShow, setUpperNavbarShow] = useState(true);
    const [isSearchDrawerOpen, setSearchDrawerOpen] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    function handleScroll() {
        if (window.scrollY > 1 && window.scrollY > lastScrollY) setUpperNavbarShow(false);
        else setUpperNavbarShow(true);
        setLastScrollY(window.scrollY);
    }

    function closeDrawer() {
        setSearchDrawerOpen(false);
    }

    return (
        <>
            <SearchDrawer isSearchDrawerOpen={isSearchDrawerOpen} setSearchDrawerOpen={setSearchDrawerOpen} />
            <nav className="text-white sticky top-0 xl:bg-black z-10">

                <NavbarUpper isUpperNavbarShow={isUpperNavbarShow} setSearchDrawerOpen={setSearchDrawerOpen} />
                <NavbarLower isUpperNavbarShow={isUpperNavbarShow} />

                <div className={`w-full flex lg:hidden relative ${isUpperNavbarShow ? "top-0" : "-top-12"} md:static bg-white text-black`}>
                    <SortMobile />
                    <FiltersMobile />
                </div>
            </nav>

            {isSearchDrawerOpen && <OffCanvas closeDrawer={closeDrawer} />}
        </>
    );
};