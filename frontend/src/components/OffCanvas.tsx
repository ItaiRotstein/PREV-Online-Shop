import { useEffect, useState } from "react";

type Props = {
    isSearchDrawerOpen: boolean;
    setSearchDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const OffCanvas = ({ isSearchDrawerOpen, setSearchDrawerOpen }: Props) => {
    let [divZindex, setDivZindex] = useState('-z-10');

    //Smooth transtion for z-index and opacity
    useEffect(() => {
        isSearchDrawerOpen ? (
            setDivZindex('z-20')
        ) : (
            setTimeout(() => {
                setDivZindex('-z-10');
            }, 200)
        );
    }, [isSearchDrawerOpen]);
    const divOpacity = isSearchDrawerOpen ? 'opacity-100' : 'opacity-0';

    return (
        <div
            className={`fixed w-full bg-back-drop m-0 top-0 left-0 h-full ${divOpacity} ${divZindex} overflow-y-auto transition-opacity duration-400`}
            onClick={() => setSearchDrawerOpen(false)}>
        </div >);
};
