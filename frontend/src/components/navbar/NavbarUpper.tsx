import { BsBag, BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import { SearchFilter } from "./SearchFilter";
import { Link } from "react-router-dom";
import flag_israel from "../../assets/img/flag_israel.png";
import { AppState } from "../../context/AppContext";

type Props = {
    isUpperNavbarShow: boolean;
    setSearchDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const NavbarUpper = ({ isUpperNavbarShow, setSearchDrawerOpen }: Props) => {
    const {
        cartState: { cart },
    } = AppState();
    const buttonStyle = cart.length > 0 ? (
        "hidden md:flex items-center justify-center min-w-28 py-4 bg-green-500 hover:bg-green-600 text-sm rounded"
    ) : (
        "hidden md:flex items-center justify-center min-w-28 py-4 bg-green-500 brightness-50 cursor-default text-sm rounded"
    );

    return (
        <div className={`relative ${isUpperNavbarShow ? "top-0" : "-top-14"} md:static flex justify-between items-center xl:max-w-[1280px] xl:mx-auto bg-black px-3 md:px-8 py-2 md:py-3`}>
            <div className="w-1/2 lg:w-3/5 flex items-center gap-8">
                <div className="font-merriweather text-2xl">P R E V</div>
                <SearchFilter />
            </div>
            <div className="w-1/2 lg:w-2/5 flex justify-end items-center gap-3 sm:gap-5 [&>*]:w-5 [&>*]:h-5 md:[&>*]:w-6 md:[&>*]:h-6">
                <BsSearch
                    onClick={() => setSearchDrawerOpen(true)}
                    className="md:hidden cursor-pointer"
                />
                <BsPerson />
                <BsHeart />
                <Link to="/cart" className="relative">
                    <BsBag className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="absolute top-1 left-1.5 md:top-1.5 md:left-2 text-xs">{cart.length}</span>
                </Link>
                <button className={buttonStyle}>CHECKOUT</button>
                <img src={flag_israel} alt="Israeli flag" className="rounded-full outline outline-1 outline-white" />
            </div>
        </div>
    );
};