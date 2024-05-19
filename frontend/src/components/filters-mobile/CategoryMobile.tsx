import { AppState } from "../../context/AppContext";
import { FaCheck } from "react-icons/fa6";
import { utilService } from "../../services/util.service";
import { useSearchParams } from "react-router-dom";

type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const CategoryMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        productState: { categoryCount }
    } = AppState();

    const categoryList = [
        "Shirts",
        "Dresses",
        "Jeans",
        "Sweaters",
        "Hoodies",
        "T-Shirts",
        "Jackets",
        "Blouses",
        "Pants",
        "Blazers",
        "Accessories",
        "Socks",
        "Bags",
        "Vests",
        "Hats",
        "Shoes",
        "Shorts",
        "Tops",
        "Polos",
    ];

    function handleClick(category: string) {
        if (!searchParams.has('category', category)) {
            searchParams.append('category', category);
        } else {
            searchParams.delete('category', category);
        }
        setSearchParams(searchParams);
    }
    return (
        <>
            <div className={`py-3 ps-4 ${!activeFilterIdx && "border-b border-b-gray-300"} ${activeFilterIdx === idx && "bg-gray-600 text-white"} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Category</p>
            </div>
        {
            activeFilterIdx === idx &&
            <div className="absolute h-full w-full top-[45px] left-[160px] bg-white border-s border-s-gray-400">
                {categoryList.map((category, idx) =>
                    <div
                        key={utilService.makeId()}
                        className="flex justify-start py-2 ps-4 font-normal cursor-pointer"
                        onClick={() => handleClick(category)}
                    >
                        <span>{category.replace("_", " ")} ({Object.values(categoryCount)[idx]})</span>
                        {searchParams.has('category', category) && <FaCheck className="w-5 h-5 ms-2 text-green-600" />}
                    </div>
                )}
            </div>
        }
        </>
    );
};