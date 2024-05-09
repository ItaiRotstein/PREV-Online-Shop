import { AppState } from "../../context/AppContext";

import { FaCheck } from "react-icons/fa6";
import { utilService } from "../../services/util.service";

type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const SizeMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {

    const {
        filterDispatch,
        filterState: { bySize },
        productState: { sizeCount, }
    } = AppState();

    return (
        <>
            <div className={`py-3 ps-4 ${!activeFilterIdx && "border-b border-b-gray-300"} ${activeFilterIdx === idx && "bg-gray-600 text-white"} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Size</p>
            </div>
            {activeFilterIdx === idx && <div className="absolute h-full w-full top-[45px] left-[240px] bg-white border-s transition-all">
                {Object.keys(bySize).map((size, idx) =>
                    <div
                        key={utilService.makeId()}
                        className="flex justify-start py-2 ps-4 font-normal cursor-pointer"
                        onClick={() => filterDispatch({
                            type: "FILTER_BY_SIZE", payload: {
                                ...bySize, [size]: !Object.values(bySize)[idx]
                            }
                        })}
                    >
                        <span>{size} ({Object.values(sizeCount)[idx]})</span>
                        {Object.values(bySize)[idx] && <FaCheck className="w-5 h-5 ms-2 text-green-600" />}
                    </div>
                )}
            </div>}
        </>
    );
};