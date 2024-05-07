import { AppState } from "../../context/AppContext";
import { FaCheck } from "react-icons/fa6";

type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const GenderMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {

    const {
        filterDispatch,
        filterState: { byGender: {
            Woman,
            Man,
            OlderBoys,
            YoungerBoys,
            Unisex,
        } },
        productState: {
            genderCount: {
                countWoman,
                countMan,
                countOlderBoys,
                countYoungerBoys,
                countUnisex,
            } }
    } = AppState();

    const genderList: { title: string, count: number, filterState: boolean; }[] = [
        { title: "Woman", count: countWoman, filterState: Woman },
        { title: "Man", count: countMan, filterState: Man },
        { title: "Older Boys", count: countOlderBoys, filterState: OlderBoys },
        { title: "Younger Boys", count: countYoungerBoys, filterState: YoungerBoys },
        { title: "Unisex", count: countUnisex, filterState: Unisex },
    ];

    function handleClick(gender: string) {
        switch (gender) {
            case "Woman": filterDispatch({ type: "FILTER_BY_GENDER_WOMAN" }); break;
            case "Man": filterDispatch({ type: "FILTER_BY_GENDER_MAN" }); break;
            case "Older Boys": filterDispatch({ type: "FILTER_BY_GENDER_OLDERBOYS" }); break;
            case "Younger Boys": filterDispatch({ type: "FILTER_BY_GENDER_YOUNGERBOYS" }); break;
            case "Unisex": filterDispatch({ type: "FILTER_BY_GENDER_UNISEX" }); break;
            default: break;
        }
    }

    return (
        <>
            <div className={`py-3  ps-4 ${!activeFilterIdx && "border-b border-b-gray-300"} ${activeFilterIdx === idx && "bg-gray-600 text-white"} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Gender</p>
            </div>
            {activeFilterIdx === idx && <div className="absolute h-full w-full top-[45px] left-[240px] bg-white border-s ">
                {genderList.map((gender, idx) =>
                    <div
                        key={gender.title + idx}
                        className="flex justify-start py-2 ps-4 font-normal cursor-pointer"
                        onClick={() => handleClick(gender.title)}
                    >
                        <span>{gender.title} ({gender.count})</span>
                        {gender.filterState && <FaCheck className="w-5 h-5 ms-2 text-green-600" />}
                    </div>
                )}
            </div>}
        </>
    );
};