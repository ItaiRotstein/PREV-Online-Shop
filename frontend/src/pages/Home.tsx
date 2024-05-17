import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Spinner from "../components/Spinner";

import { AppState } from "../context/AppContext";
import productService from "../services/productService";
import { ProductPreview } from "../components/ProductPreview";
import Footer from "../components/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Filters } from "../components/filters/Filters";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({ sort: 'popular' });

  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const scrollRef = useRef<null | HTMLDivElement>(null);

  const {
    filterState: { fetchItems },
    filterDispatch,
    productState: { products, totalProductsCount },
    productDispatch,
    setSortMenuMobileShow,
  } = AppState();

  function entriesToObject(entries: any) {
    const result: any = {};

    entries.forEach(([key, value]: any) => {
      if (result.hasOwnProperty(key)) {
        if (Array.isArray(result[key])) {
          result[key].push(value);
        } else {
          result[key] = [result[key], value];
        }
      } else {
        result[key] = value;
      }
    });
    return result;
  }


  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await productService.getProducts(entriesToObject(searchParams.entries()), fetchItems);
        productDispatch({
          type: "GET_PRODUCTS",
          payload: data.products
        });
        productDispatch({
          type: "GET_TOTAL_PRODUCTS_COUNT",
          payload: data.totalProductsCount
        });
      } catch (error) {
        console.log("Error fetching products", error);
      } finally {
        setIsFetchingMore(false);
        setIsLoading(false);
      }
    };
    getProducts();
  }, [searchParams, fetchItems]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const data = await productService.getProductsData();
        productDispatch({
          type: "GET_PRODUCTS_DATA",
          payload: data
        });
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    getProductsData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollToBottom);
    return (() => {
      window.removeEventListener("scroll", handleScrollToBottom);
    });
  });

  function handleScrollToBottom() {

    if (
      (window.innerHeight + window.scrollY) >= document.body.offsetHeight
      && (fetchItems < totalProductsCount)
      && !isFetchingMore
    ) {
      setIsFetchingMore(true);
      setIsLoading(true);
      setSearchParams(searchParams);
      filterDispatch({ type: "SET_ITEMS_PER_FETCH" });
    }
  }

  return (
    <div
      onClick={() =>
        setSortMenuMobileShow(false)
      }
      className="h-full"
    >
      <Navbar />
      <div>
        <main className="flex relative mx-auto xl:max-w-[1280px]">
          <Filters />
          <div ref={scrollRef} className="lg:w-3/4 xl:w-4/5 flex flex-wrap justify-center px-1 md:px-2  mt-3 lg:mt-0">
            {/* <HomeHeader /> */}
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