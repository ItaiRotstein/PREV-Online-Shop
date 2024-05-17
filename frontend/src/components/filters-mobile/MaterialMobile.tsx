import { AppState } from "../../context/AppContext";
import { FaCheck } from "react-icons/fa6";
import { utilService } from "../../services/util.service";
import { useSearchParams } from "react-router-dom";

type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const MaterialMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        productState: { materialCount }
    } = AppState();

    const materialList = [
        'Cashmere',
        'Cotton',
        'Polyester',
        'Leather',
        'Rubber',
        'Denim',
        'Wool',
        'Acrylic',
        'Silk',
        'Suede',
        'Spandex',
    ];
    function handleClick(material: string) {
        if (!searchParams.has('material', material)) {
            searchParams.append('material', material);
        } else {
            searchParams.delete('material', material);
        }
        setSearchParams(searchParams);
    }
    return (
        <>
            <div className={`py-3 ps-4 ${!activeFilterIdx && "border-b border-b-gray-300"} ${activeFilterIdx === idx && "bg-gray-600 text-white"} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Material</p>
            </div>
            {activeFilterIdx === idx && <div className="absolute h-full w-full top-[45px] left-[240px] bg-white border-s border-s-gray-400">
                {materialList.map((material, idx) =>
                    <div
                        key={utilService.makeId()}
                        className="flex justify-start py-2 ps-4 font-normal cursor-pointer"
                        onClick={() => handleClick(material)}
                    >
                        <span>{material.replace("_", " ")} ({Object.values(materialCount)[idx]})</span>
                        {searchParams.has('material', material) && <FaCheck className="w-5 h-5 ms-2 text-green-600" />}
                    </div>
                )}
            </div>}
        </>
    );
};