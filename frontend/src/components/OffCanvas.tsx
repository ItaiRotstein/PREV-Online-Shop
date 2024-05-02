
export const OffCanvas = ({ closeDrawer }: { closeDrawer: () => void; }) => {

    return (
        <div
            className='fixed w-full bg-back-drop m-0 top-0 left-0 h-full z-10 overflow-y-auto transition-all'
            onClick={closeDrawer}>
        </div >);
};
