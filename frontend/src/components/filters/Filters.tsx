import { Size } from './Size';
import { Gender } from './Gender';
import { Material } from './Material';
import { Category } from './Category';
import { Colour } from './Colour';
import { Use } from './Use';
import { Price } from './Price';
import { NewInStock } from './NewInStock';

export const Filters = () => {

    return (
        <aside className='hidden lg:block lg:w-1/4 xl:w-1/5 ps-8 pe-[13px]'>
            <NewInStock />
            <Size />
            <Gender />
            <Material />
            <Category />
            <Colour />
            <Use />
            <Price />
        </aside>
    );
};

