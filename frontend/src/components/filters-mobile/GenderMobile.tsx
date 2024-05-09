import { AppState } from "../../context/AppContext";
import { FaCheck } from "react-icons/fa6";
import { utilService } from "../../services/util.service";

type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const GenderMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {

    const {
        filterDispatch,
        filterState: { byGender },
        productState: { genderCount }
    } = AppState();

    return (
        <>
            <div className={`py-3  ps-4 ${!activeFilterIdx && "border-b border-b-gray-300"} ${activeFilterIdx === idx && "bg-gray-600 text-white"} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Gender</p>
            </div>
            {activeFilterIdx === idx && <div className="absolute h-full w-full top-[45px] left-[240px] bg-white border-s ">
                {Object.keys(byGender).map((gender, idx) =>
                    <div
                        key={utilService.makeId()}
                        className="flex justify-start py-2 ps-4 font-normal cursor-pointer"
                        onClick={() => filterDispatch({
                            type: "FILTER_BY_GENDER", payload: {
                                ...byGender, [gender]: !Object.values(byGender)[idx]
                            }
                        })}
                    >
                        <span>{gender} ({Object.values(genderCount)[idx]})</span>
                        {Object.values(byGender)[idx] && <FaCheck className="w-5 h-5 ms-2 text-green-600" />}
                    </div>
                )}
            </div>}
        </>
    );
};