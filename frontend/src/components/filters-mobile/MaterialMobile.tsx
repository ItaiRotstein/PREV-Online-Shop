
type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const MaterialMobile = ({idx, activeFilterIdx, setActiveFilterIdx}: Props) => {

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

    return (
        <>
            <div className={`py-3 ps-4 ${!activeFilterIdx && 'border-b border-b-gray-300'} ${activeFilterIdx === idx && 'bg-gray-600 text-white'} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Material</p>
            </div>
            {activeFilterIdx === idx && <div className='absolute h-full w-full top-[45px] left-[240px] bg-white border-s border-s-gray-400'>
                {materialList.map((material, idx) =>
                    <div key={material + idx} className='py-2 ps-4 font-normal cursor-pointer'>
                        <span>{material}</span>
                    </div>
                )}
            </div>}
        </>
    );
};