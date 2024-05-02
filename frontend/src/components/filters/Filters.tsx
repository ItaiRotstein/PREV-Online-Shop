import { Size } from './Size';
import { Gender } from './Gender';
import { Material } from './Material';
import { Category } from './Category';

export const Filters = () => {


    return (
        <aside className='hidden lg:block lg:w-1/4 xl:w-1/5 ps-8 pe-[13px]'>
            <div className='sticky top-[96px] flex justify-between items-end border-b border-gray-300 pt-4 pb-5 font-medium bg-white'>
                <h1 className=''>
                    1700 Products
                </h1>
                <button className='text-sm text-green-700'>
                    Clear All
                </button>
            </div>
            <div className='py-4 border-b border-gray-300'>
                <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">New In(397)</label>
                </div>
                <div className="flex items-center">
                    <input checked id="checked-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">In Stock(214)</label>
                </div>
            </div>
            <Size />
            <Gender />
            <Material />
            <Category />
        </aside>
    );
};

