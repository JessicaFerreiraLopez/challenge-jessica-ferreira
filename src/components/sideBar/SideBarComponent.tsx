import Button from "../basics/Button";
import closeIcon from "../../assets/img/activo.png";
import useFetchApi from "../../utils/hooks/useFetchApi";
import { useEffect, useState } from "react";
import { CategoryDTO } from "../../api/types";
import Loader from "../basics/Loader";
import ErrorAlert from "../basics/ErrorAlert";

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
          <>
            <h1 className="pt-5 text-lg	font-bold text-slate-500">{title}</h1>
            {data?.map((categoryElem, categoryIndex) => (
              <Button
                key={categoryIndex}
                onClick={() => {
                  setActiveIndex(categoryIndex);
                }}
                text={categoryElem.name}
                classes="w-[95%] my-1.5	h-10 text-left pl-2.5 text-slate-500"
                includeArrow
              />
            ))}
          </>
        ) : (
          <>
            <h1
              className="pt-5 text-xs font-bold text-slate-400"
              onClick={() => {
                setActiveIndex(null);
              }}
            >{`< ${title}`}</h1>
            <h1 className=" text-lg	font-bold text-slate-500">
              {data?.[activeIndex].name}
            </h1>
            <div className="flex ">
              {data?.[activeIndex].items.map((item, itemIndex) => (
                <div className="flex basis-1/3 flex-col">
                  <img
                    alt="item"
                    className="h-40	w-full pr-5	"
                    src={item.img}
                    loading="lazy"
                  />
                  <p className="pt-5 text-center text-xs  text-slate-400">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </>
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
