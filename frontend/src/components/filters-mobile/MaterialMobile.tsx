import { AppState } from '../../context/AppContext';
import { FaCheck } from 'react-icons/fa6';

type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const MaterialMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {

    const {
        filterDispatch,
        filterState: { byMaterial: {
            Cashmere,
            Cotton,
            Polyester,
            Leather,
            Rubber,
            Denim,
            Wool,
            Acrylic,
            Silk,
            Suede,
            Spandex,
        } },
        productState: {
            materialCount: {
                countCashmere,
                countCotton,
                countPolyester,
                countLeather,
                countRubber,
                countDenim,
                countWool,
                countAcrylic,
                countSilk,
                countSuede,
                countSpandex,
            } }
    } = AppState();

    const materialList: { title: string, count: number, filterState: boolean; }[] = [
        { title: 'Cashmere', count: countCashmere, filterState: Cashmere },
        { title: 'Cotton', count: countCotton, filterState: Cotton },
        { title: 'Polyester', count: countPolyester, filterState: Polyester },
        { title: 'Leather', count: countLeather, filterState: Leather },
        { title: 'Rubber', count: countRubber, filterState: Rubber },
        { title: 'Denim', count: countDenim, filterState: Denim },
        { title: 'Wool', count: countWool, filterState: Wool },
        { title: 'Acrylic', count: countAcrylic, filterState: Acrylic },
        { title: 'Silk', count: countSilk, filterState: Silk },
        { title: 'Suede', count: countSuede, filterState: Suede },
        { title: 'Spandex', count: countSpandex, filterState: Spandex },
    ];

    function handleClick(material: string) {
        switch (material) {
            case 'Cashmere': filterDispatch({ type: 'FILTER_BY_MATERIAL_CASHMERE' }); break;
            case 'Cotton': filterDispatch({ type: 'FILTER_BY_MATERIAL_COTTON' }); break;
            case 'Polyester': filterDispatch({ type: 'FILTER_BY_MATERIAL_POLYESTER' }); break;
            case 'Leather': filterDispatch({ type: 'FILTER_BY_MATERIAL_LEATHER' }); break;
            case 'Rubber': filterDispatch({ type: 'FILTER_BY_MATERIAL_RUBBER' }); break;
            case 'Denim': filterDispatch({ type: 'FILTER_BY_MATERIAL_DENIM' }); break;
            case 'Wool': filterDispatch({ type: 'FILTER_BY_MATERIAL_WOOL' }); break;
            case 'Acrylic': filterDispatch({ type: 'FILTER_BY_MATERIAL_ACRYLIC' }); break;
            case 'Silk': filterDispatch({ type: 'FILTER_BY_MATERIAL_SILK' }); break;
            case 'Suede': filterDispatch({ type: 'FILTER_BY_MATERIAL_SUEDE' }); break;
            case 'Spandex': filterDispatch({ type: 'FILTER_BY_MATERIAL_SPANDEX' }); break;
            default: break;
        }
    }

    return (
        <>
            <div className={`py-3 ps-4 ${!activeFilterIdx && 'border-b border-b-gray-300'} ${activeFilterIdx === idx && 'bg-gray-600 text-white'} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Material</p>
            </div>
            {activeFilterIdx === idx && <div className='absolute h-full w-full top-[45px] left-[240px] bg-white border-s border-s-gray-400'>
                {materialList.map((material, idx) =>
                    <div
                        key={material.title + idx}
                        className='flex justify-start py-2 ps-4 font-normal cursor-pointer'
                        onClick={() => handleClick(material.title)}
                    >
                        <span>{material.title} ({material.count})</span>
                        {material.filterState && <FaCheck className='w-5 h-5 ms-2 text-green-600' />}
                    </div>
                )}
            </div>}
        </>
    );
};