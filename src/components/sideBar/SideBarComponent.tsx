import Button from "../basics/Button";
import closeIcon from "../../assets/img/activo.png";
import useFetchApi from "../../utils/hooks/useFetchApi";
import { useEffect, useState } from "react";
import { CategoryDTO } from "../../api/types";
import Loader from "../basics/Loader";
import ErrorAlert from "../basics/ErrorAlert";
import CategoriesList from "./CategoriesList";
import ProductsList from "./ProductsList";

export interface SideBarComponentProps {
  title: string;
  closeSideBar: () => void;
  getInfo: () => Promise<CategoryDTO[]>;
}

const SideBarComponent = ({
  title,
  closeSideBar,
  getInfo,
}: SideBarComponentProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { data, isLoading, error, fetchData } =
    useFetchApi<CategoryDTO[]>(getInfo);

  useEffect(() => {
    fetchData();
    setActiveIndex(null);
  }, [getInfo]);

  return (
    <section className="flex  w-[85%]   flex-row	pt-20 sm:w-3/5	">
      <div className=" h-full w-full bg-gray-100 pl-6 ">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorAlert error={error} />
        ) : activeIndex === null ? (
          <CategoriesList
            title={title}
            data={data}
            setActiveIndexFunction={(categoryIndex: number) => {
              setActiveIndex(categoryIndex);
            }}
          />
        ) : (
          <ProductsList
            title={title}
            data={data}
            setActiveIndexFunction={() => {
              setActiveIndex(null);
            }}
            categoryIndex={activeIndex}
          />
        )}
      </div>
      <div className="flex items-center py-1">
        <Button
          onClick={closeSideBar}
          img={closeIcon}
          classes="h-16 bg-gray-100"
          imgClasses="h-7 rounded-r-lg bg-gray-100 px-1 py-1 "
        />
      </div>
    </section>
  );
};

export default SideBarComponent;
