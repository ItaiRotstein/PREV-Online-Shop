import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

import { AppState } from '../context/AppContext';

import productService from '../services/productService';

import ProductPreview from '../components/ProductPreview';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import { Navbar } from '../components/navbar/Navbar';
import { Filters } from '../components/filters/Filters';
import HomeHeader from '../components/HomeHeader';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    productState: { products },
    filterState,
    productDispatch,
  } = AppState();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await productService.getProducts(filterState);
        productDispatch({
          type: 'GET_PRODUCTS',
          payload: productsData.data
        });
        productDispatch({
          type: 'GET_PRODUCTS_COUNT',
          payload: productsData.metadata.totalCount
        });
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [filterState]);

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <div>
      <Navbar />
      <div>
        <main className='flex relative mx-auto xl:max-w-[1280px]'>
          
            <Filters />
         
          <div className='lg:w-3/4 xl:w-4/5 flex flex-wrap justify-center px-1 md:px-2  mt-3 lg:mt-0'>
            
              <HomeHeader />
            
            {products.map(prod => (
              <ProductPreview prod={{ ...prod }} key={prod._id} />
            ))}
          </div>
        </main>
      </div>
      <Pagination />
      <Footer />
    </div>
  );
};