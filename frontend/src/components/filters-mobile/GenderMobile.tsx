
type Props = {
    idx: number;
    activeFilterIdx: number | null;
    setActiveFilterIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

export const GenderMobile = ({ idx, activeFilterIdx, setActiveFilterIdx }: Props) => {
    const genderList = [
        'Woman',
        'Man',
        'Older Boys',
        'Younger Boys',
        'Unisex',
    ];

    return (
        <>
            <div className={`py-3  ps-4 ${!activeFilterIdx && 'border-b border-b-gray-300'} ${activeFilterIdx === idx && 'bg-gray-600 text-white'} cursor-pointer`}>
                <p onClick={() => setActiveFilterIdx(idx)}>Gender</p>
            </div>
            {activeFilterIdx === idx && <div className='absolute h-full w-full top-[45px] left-[240px] bg-white border-s '>
                {genderList.map((gender, idx) =>
                    <div key={gender + idx} className='py-2 ps-4 font-normal cursor-pointer'>
                        <span>{gender}</span>
                    </div>
                )}
            </div>}
        </>
    );
};