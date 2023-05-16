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
    <section className="flex w-full flex-row pt-20">
      <div className=" h-full w-2/6  bg-gray-100 pl-6 ">
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
      <div className="flex items-center py-1" onClick={closeSideBar}>
        <img
          className="h-9 rounded-r-lg bg-gray-100 px-1 py-1 "
          alt="Close sidebar Icon"
          src={closeIcon}
        />
      </div>
    </section>
  );
};

export default SideBarComponent;
