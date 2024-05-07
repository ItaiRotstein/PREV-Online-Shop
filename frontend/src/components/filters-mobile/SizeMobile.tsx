import { AppState } from '../../context/AppContext';

import { FaCheck } from "react-icons/fa6";

type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const SizeMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {

    const {
        filterDispatch,
        filterState: { bySize: { XS, S, M, L, XL } },
        productState: {
            sizeCount: {
                sizeXScount,
                sizeScount,
                sizeMcount,
                sizeLcount,
                sizeXLcount } }
    } = AppState();

    const sizeList: { title: string, count: number, filterState: boolean; }[] = [
        { title: 'XS', count: sizeXScount, filterState: XS },
        { title: 'S', count: sizeScount, filterState: S },
        { title: 'M', count: sizeMcount, filterState: M },
        { title: 'L', count: sizeLcount, filterState: L },
        { title: 'XL', count: sizeXLcount, filterState: XL },
    ];

    function handleClick(size: string) {
        switch (size) {
            case 'XS': filterDispatch({ type: 'FILTER_BY_SIZE_XS' }); break;
            case 'S': filterDispatch({ type: 'FILTER_BY_SIZE_S' }); break;
            case 'M': filterDispatch({ type: 'FILTER_BY_SIZE_M' }); break;
            case 'L': filterDispatch({ type: 'FILTER_BY_SIZE_L' }); break;
            case 'XL': filterDispatch({ type: 'FILTER_BY_SIZE_XL' }); break;
            default: break;
        }
    }

    return (
        <>
            <div className={`py-3 ps-4 ${!activeFilterIdx && 'border-b border-b-gray-300'} ${activeFilterIdx === idx && 'bg-gray-600 text-white'} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Size</p>
            </div>
            {activeFilterIdx === idx && <div className='absolute h-full w-full top-[45px] left-[240px] bg-white border-s transition-all'>
                {sizeList.map((size, idx) =>
                    <div
                        key={size.title + idx}
                        className='flex justify-start py-2 ps-4 font-normal cursor-pointer'
                        onClick={() => handleClick(size.title)}
                    >
                        <span>{size.title} ({size.count})</span>
                        {size.filterState && <FaCheck className='w-5 h-5 ms-2 text-green-600' />}
                    </div>
                )}
            </div>}
        </>
    );
};