import { useEffect, useRef, useState } from "react";
import Spinner from "../components/Spinner";

import { AppState } from "../context/AppContext";
import productService from "../services/productService";
import { ProductPreview } from "../components/ProductPreview";
import Footer from "../components/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Filters } from "../components/filters/Filters";
import HomeHeader from "../components/HomeHeader";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const scrollRef = useRef<null | HTMLDivElement>(null);

  const {
    filterState,
    filterState: { itemsPerFetch },
    filterDispatch,
    productState: { products, totalProductsCount },
    productDispatch,
  } = AppState();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await productService.getProducts(filterState);
        productDispatch({
          type: "GET_PRODUCTS_DATA",
          payload: data
        });
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setIsFetchingMore(false);
        setIsLoading(false);
      }
    };
    getProducts();
  }, [filterState]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollToBottom);
    return (() => {
      window.removeEventListener("scroll", handleScrollToBottom);
    });
  });

  function handleScrollToBottom() {

    if (
      (window.innerHeight + window.scrollY) >= document.body.offsetHeight
      && (itemsPerFetch < totalProductsCount)
      && !isFetchingMore
    ) {
      setIsFetchingMore(true);
      setIsLoading(true);
      filterDispatch({
        type: "SET_ITEMS_PER_FETCH",
        payload: itemsPerFetch
      });
    }
  }

  return (
    <div
      onClick={() =>
        filterDispatch({ type: 'SET_SORT_MENU_MOBILE_SHOW', payload: false })
      }
      className="h-full"
    >
      <Navbar />
      <div>
        <main className="flex relative mx-auto xl:max-w-[1280px]">
          <Filters />
          <div ref={scrollRef} className="lg:w-3/4 xl:w-4/5 flex flex-wrap justify-center px-1 md:px-2  mt-3 lg:mt-0">
            <HomeHeader />
            {products.map(prod => (
              <ProductPreview prod={{ ...prod }} key={prod._id} />
            ))}
          </div>
        </main>
      </div>
      {isLoading && <Spinner isLoading={isLoading} />}
      <Footer />
    </div>
  );
};