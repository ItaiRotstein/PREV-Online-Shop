
type Props = {
    isUpperNavbarShow: boolean;
};

export const NavbarLower = ({ isUpperNavbarShow }: Props) => {

    const linksList = [
        'GIRLS',
        'BOYS',
        'BABY',
        'WOMAN',
        'MAN',
        'SHOES',
        'HOME',
        'BRANDS',
    ];

    return (
        <ul className={`relative ${isUpperNavbarShow ? 'top-0' : '-top-12'} md:static flex gap-6 justify-between xl:max-w-[1280px] xl:mx-auto px-3 md:px-8 py-2 text-sm font-bold overflow-x-auto no-scrollbar bg-navbar-black lg:bg-black`}>
            {linksList.map((item, idx) =>
                <li key={item + idx}>{item}</li>
            )}
        </ul>
    );
};