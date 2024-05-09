import { AppState } from "../../context/AppContext";
import { FaCheck } from "react-icons/fa6";
import { utilService } from "../../services/util.service";

type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const MaterialMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {

    const {
        filterDispatch,
        filterState: { byMaterial },
        productState: { materialCount }
    } = AppState();



    return (
        <>
            <div className={`py-3 ps-4 ${!activeFilterIdx && "border-b border-b-gray-300"} ${activeFilterIdx === idx && "bg-gray-600 text-white"} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Material</p>
            </div>
            {activeFilterIdx === idx && <div className="absolute h-full w-full top-[45px] left-[240px] bg-white border-s border-s-gray-400">
                {Object.keys(byMaterial).map((material, idx) =>
                    <div
                        key={utilService.makeId()}
                        className="flex justify-start py-2 ps-4 font-normal cursor-pointer"
                        onClick={() => filterDispatch({
                            type: "FILTER_BY_MATERIAL", payload: {
                                ...byMaterial, [material]: !Object.values(byMaterial)[idx]
                            }
                        })}
                    >
                        <span>{material.replace("_", " ")} ({Object.values(materialCount)[idx]})</span>
                        {Object.values(byMaterial)[idx] && <FaCheck className="w-5 h-5 ms-2 text-green-600" />}
                    </div>
                )}
            </div>}
        </>
    );
};