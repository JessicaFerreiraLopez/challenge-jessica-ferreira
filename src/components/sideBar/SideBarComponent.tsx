import Button from "../basics/Button";
import closeIcon from "../../assets/img/activo.png";
import useFetchApi from "../../utils/hooks/useFetchApi";
import { useEffect } from "react";
import { CategoryDTO } from "../../api/types";

export interface CategoryItemProps {
  name: string;
  img: string;
}

export interface CategoryProps {
  categoryName: string;
  items: CategoryItemProps[];
}

export interface SideBarComponentProps {
  title: string;
  categories: CategoryProps[];
  closeSideBar: () => void;
  getInfo: () => Promise<CategoryDTO[]>;
}

const SideBarComponent = ({
  title,
  categories,
  closeSideBar,
  getInfo,
}: SideBarComponentProps) => {
  const { data, isLoading, error, fetchData } =
    useFetchApi<CategoryDTO[]>(getInfo);

  useEffect(() => {
    fetchData();
  }, [getInfo]);

  return (
    <section className="flex w-full flex-row pt-20">
      <div className=" h-full w-2/6  bg-gray-100 pl-6 ">
        <h1 className="pt-5 text-lg	font-bold text-slate-500">{title}</h1>
        {data?.map((categoryElem, categoryIndex) => (
          <Button
            key={categoryIndex}
            onClick={() => {
              console.log("categoryName has been clicked");
            }}
            text={categoryElem.name}
            classes="w-[95%] my-1.5	h-10 text-left pl-2.5 text-slate-500"
            includeArrow
          />
        ))}
      </div>
      <div className=" flex items-center py-1" onClick={closeSideBar}>
        <img
          className="h-9 rounded-r-lg bg-gray-100  px-1 py-1 "
          alt="Logo"
          src={closeIcon}
        />
      </div>
    </section>
  );
};

export default SideBarComponent;
