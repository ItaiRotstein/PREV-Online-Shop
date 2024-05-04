
type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const SizeMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {
    const sizeList = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
    ];

    return (
        <>
            <div className={`py-3 ps-4 ${!activeFilterIdx && 'border-b border-b-gray-300'} ${activeFilterIdx === idx && 'bg-gray-600 text-white'} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Size</p>
            </div>
            {activeFilterIdx === idx && <div className='absolute h-full w-full top-[45px] left-[240px] bg-white border-s transition-all'>
                {sizeList.map((size, idx) =>
                    <div key={size + idx} className='py-2 ps-4 font-normal cursor-pointer'>
                        <span>{size}</span>
                    </div>
                )}
            </div>}
        </>
    );
};