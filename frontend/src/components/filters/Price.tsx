import { useState, useEffect, useRef } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Price = () => {
    const min = 0;
    const max = 870;
    const step = 10;

    const [iseMenuShow, setMenuShow] = useState<boolean>(false);

    const progressRef = useRef<HTMLInputElement | null>(null);
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    const handleMin = (value: number) => {
        if (value < maxValue) setMinValue(value);

    };

    const handleMax = (value: number) => {
        if (value > minValue) setMaxValue(value);
    };

    useEffect(() => {
        progressRef.current && (progressRef.current.style.left = (minValue / max) * 100 + "%");
        progressRef.current && (progressRef.current.style.right = 100 - (maxValue / max) * 100 + "%");
    }, [minValue, maxValue]);

    return (
        <>
            <div className='py-2 border-b border-gray-300'>
                <div
                    className='flex justify-between items-center text-sm font-bold cursor-pointer'
                    onClick={() => setMenuShow(!iseMenuShow)}
                >
                    Price
                    {iseMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <div className={`${iseMenuShow ? 'h-[90px] py-2' : 'h-0'} transition-all duration-300 overflow-hidden font-normal`}>
                    <div className='text-center pb-4 text-sm'>
                        Price Range: <span className='font-bold'>${minValue} - ${maxValue}</span>
                    </div>

                    <div className="mb-4">
                        <div className="slider relative h-1 rounded-md bg-gray-300">
                            <div
                                className="progress absolute h-1 bg-gray-800 rounded"
                                ref={progressRef}
                            ></div>
                        </div>

                        <div className="relative">
                            <input
                                onChange={(e) => handleMin(Number(e.target.value))}
                                type="range"
                                min={min}
                                step={step}
                                max={max}
                                value={minValue}
                                className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
                            />

                            <input
                                onChange={(e) => handleMax(Number(e.target.value))}
                                type="range"
                                min={min}
                                step={step}
                                max={max}
                                value={maxValue}
                                className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
                            />
                        </div>
                        <div className='flex justify-between pt-4 font-medium text-[0.9rem]'>
                            <span> ${min}</span>
                            <span className='ms'> ${max}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
