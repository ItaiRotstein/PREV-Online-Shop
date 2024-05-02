import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AppState } from '../../context/AppContext';
import { OffCanvas } from '../OffCanvas';
import { SearchDrawer } from './SearchDrawer';
import { SearchFilter } from './SearchFilter';

import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsBag } from "react-icons/bs";

import flag_israel from '../../assets/img/flag_israel.png';
import { SortFilterBtns } from './SortFilterBtns';

export const Navbar = () => {
    const [isUpperNavbarShow, setUpperNavbarShow] = useState(true);
    const [isSearchDrawerOpen, setSearchDrawerOpen] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const {
        filterState: { searchQuery },
        cartState: { cart },
        filterDispatch
    } = AppState();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    function handleScroll() {
        if (window.scrollY > lastScrollY) setUpperNavbarShow(false);
        else setUpperNavbarShow(true);
        setLastScrollY(window.scrollY);
    }

    function closeDrawer() {
        setSearchDrawerOpen(false);
    }

    const buttonStyle = cart.length > 0 ? (
        'hidden md:flex items-center justify-center min-w-28 py-4 bg-green-500 hover:bg-green-600 text-sm rounded'
    ) : (
        'hidden md:flex items-center justify-center min-w-28 py-4 bg-green-500 brightness-50 cursor-default text-sm rounded'
    );

    return (
        <>
            <SearchDrawer isSearchDrawerOpen={isSearchDrawerOpen} setSearchDrawerOpen={setSearchDrawerOpen} />
            <nav className='text-white sticky top-0 xl:bg-black z-10'>
                {/* UPPER NAVBAR */}
                <div className={`relative ${isUpperNavbarShow ? 'top-0' : '-top-14'} md:static flex justify-between items-center xl:max-w-[1280px] xl:mx-auto bg-black px-3 md:px-8 py-2 md:py-3`}>
                    <div className='w-1/2 lg:w-3/5 flex items-center gap-8'>
                        <div className='font-merriweather text-2xl'>P R E V</div>
                        <SearchFilter searchQuery={searchQuery} filterDispatch={filterDispatch} />
                    </div>
                    <div className='w-1/2 lg:w-2/5 flex justify-end items-center gap-3 sm:gap-5 [&>*]:w-5 [&>*]:h-5 md:[&>*]:w-6 md:[&>*]:h-6'>
                        <BsSearch
                            onClick={() => setSearchDrawerOpen(true)}
                            className='md:hidden cursor-pointer'
                        />
                        <BsPerson />
                        <BsHeart />
                        <Link to='/cart' className='relative'>
                            <BsBag className='w-5 h-5 md:w-6 md:h-6' />
                            <span className='absolute top-1 left-1.5 md:top-1.5 md:left-2 text-xs'>{cart.length}</span>
                        </Link>
                        <button className={buttonStyle}>CHECKOUT</button>
                        <img src={flag_israel} alt="Israeli flag" className='rounded-full outline outline-1 outline-white' />
                    </div>
                </div>
                {/* LOWER NAVBAR */}
                <ul className={`relative ${isUpperNavbarShow ? 'top-0' : '-top-12'} md:static flex gap-6 justify-between xl:max-w-[1280px] xl:mx-auto px-3 md:px-8 py-2 text-sm font-bold overflow-x-auto no-scrollbar bg-navbar-black lg:bg-black`}>
                    <li>GIRLS</li>
                    <li>BOYS</li>
                    <li>BABY</li>
                    <li>WOMAN</li>
                    <li>MAN</li>
                    <li>SHOES</li>
                    <li>HOME</li>
                    <li>BRANDS</li>
                </ul>
                <SortFilterBtns isUpperNavbarShow={isUpperNavbarShow} />
            </nav>

            {isSearchDrawerOpen && <OffCanvas closeDrawer={closeDrawer} />}
        </>
    );
};