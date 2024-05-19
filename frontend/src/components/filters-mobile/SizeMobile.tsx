import { useSearchParams } from "react-router-dom";

import { AppState } from "../../context/AppContext";
import { utilService } from "../../services/util.service";

import { FaCheck } from "react-icons/fa6";

type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const SizeMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        productState: { sizeCount, }
    } = AppState();

    const sizeList = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
    ];

    function handleClick(size: string) {
        if (!searchParams.has('size' , size)) {
            searchParams.append('size', size);
        } else {
            searchParams.delete('size', size);
        }
        setSearchParams(searchParams);
    }

    return (
        <>
            <div className={`py-3 ps-4 ${!activeFilterIdx && "border-b border-b-gray-300"} ${activeFilterIdx === idx && "bg-gray-600 text-white"} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Size</p>
            </div>
            {activeFilterIdx === idx && <div className="absolute h-full w-full top-[45px] left-[160px] bg-white border-s transition-all">
                {sizeList.map((size, idx) =>
                    <div
                        key={utilService.makeId()}
                        className="flex justify-start py-2 ps-4 font-normal cursor-pointer"
                        onClick={() => handleClick(size)}
                    >
                        <span>{size.replace("_", " ")} ({Object.values(sizeCount)[idx]})</span>
                        {searchParams.has('size', size) && <FaCheck className="w-5 h-5 ms-2 text-green-600" />}
                    </div>
                )}
            </div>}
        </>
    );
};