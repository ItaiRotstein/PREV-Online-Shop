import { useEffect, useState } from "react";

import { OffCanvas } from "../OffCanvas";
import { SearchDrawer } from "./SearchDrawer";
import { FiltersMobile } from "../filters-mobile/FiltersMobile";
import { SortMobile } from "./SortMobile";
import { NavbarUpper } from "./NavbarUpper";
import { NavbarLower } from "./NavbarLower";
import { SortHeader } from "./SortHeader";

export const Navbar = () => {
    const [isUpperNavbarShow, setUpperNavbarShow] = useState(true);
    const [isSearchDrawerOpen, setSearchDrawerOpen] = useState(false);
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

    return (
        <>
            <SearchDrawer isSearchDrawerOpen={isSearchDrawerOpen} setSearchDrawerOpen={setSearchDrawerOpen} />
            <OffCanvas isSearchDrawerOpen={isSearchDrawerOpen} setSearchDrawerOpen={setSearchDrawerOpen} />
            <nav className="text-white sticky top-0 z-10">
                <div className="xl:bg-black">
                    <NavbarUpper isUpperNavbarShow={isUpperNavbarShow} setSearchDrawerOpen={setSearchDrawerOpen} />
                    <NavbarLower isUpperNavbarShow={isUpperNavbarShow} />
                </div>
                <SortHeader />
                <div className={`w-full flex lg:hidden relative ${isUpperNavbarShow ? "top-0" : "-top-12"} md:static bg-white text-black`}>
                    <SortMobile />
                    <FiltersMobile />
                </div>
            </nav>
        </>
    );
};