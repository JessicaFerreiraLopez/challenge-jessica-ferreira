import { CategoryDTO } from "../../api/types";
import Button from "../basics/Button";

export interface CategoriesListProps {
  title: string;
  data: CategoryDTO[] | undefined;
  setActiveIndexFunction: (categoryIndex: number) => void;
}

const CategoriesList = ({
  title,
  data,
  setActiveIndexFunction,
}: CategoriesListProps) => {
  return (
    <>
      <h1 className="pt-5 text-lg	font-bold text-slate-500">{title}</h1>
      {data?.map((categoryElem, categoryIndex) => (
        <Button
          key={categoryIndex}
          onClick={() => {
            setActiveIndexFunction(categoryIndex);
          }}
          text={categoryElem.name}
          classes="w-[95%] my-1.5	h-10 text-left pl-2.5 text-slate-500 bg-white"
          includeArrow
        />
      ))}
    </>
  );
};

export default CategoriesList;
