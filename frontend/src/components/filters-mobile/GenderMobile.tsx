import { useSearchParams } from "react-router-dom";

import { AppState } from "../../context/AppContext";
import { utilService } from "../../services/util.service";

import { FaCheck } from "react-icons/fa6";

type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const GenderMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        productState: { genderCount }
    } = AppState();

    const genderList = [
        'Woman',
        'Man',
        'Older_Boys',
        'Younger_Boys',
        'Unisex',
    ];

    function handleClick(gender: string) {
        if (!searchParams.has('gender', gender)) {
            searchParams.append('gender', gender);
        } else {
            searchParams.delete('gender', gender);
        }
        setSearchParams(searchParams);
    }

    return (
        <>
            <div className={`py-3  ps-4 ${!activeFilterIdx && "border-b border-b-gray-300"} ${activeFilterIdx === idx && "bg-gray-600 text-white"} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Gender</p>
            </div>
            {activeFilterIdx === idx && <div className="absolute h-full w-full top-[45px] left-[160px] bg-white border-s ">
                {genderList.map((gender, idx) =>
                    <div
                        key={utilService.makeId()}
                        className="flex justify-start py-2 ps-4 font-normal cursor-pointer"
                        onClick={() => handleClick(gender)}
                    >
                        <span>{gender.replace("_", " ")} ({Object.values(genderCount)[idx]})</span>
                        {searchParams.has('gender', gender) && <FaCheck className="w-5 h-5 ms-2 text-green-600" />}
                    </div>
                )}
            </div>}
        </>
    );
};