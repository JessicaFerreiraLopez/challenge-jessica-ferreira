import { CategoryDTO } from "../../api/types";

export interface ProductsListProps {
  title: string;
  data: CategoryDTO[] | undefined;
  setActiveIndexFunction: (categoryIndex: number | null) => void;
  categoryIndex: number;
}

const ProductsList = ({
  title,
  data,
  setActiveIndexFunction,
  categoryIndex,
}: ProductsListProps) => {
  return (
    <>
      <h1
        className="pt-5 text-xs font-bold text-slate-400"
        onClick={() => {
          setActiveIndexFunction(null);
        }}
      >{`< ${title}`}</h1>
      <h1 className=" text-lg	font-bold text-slate-500">
        {data?.[categoryIndex].name}
      </h1>
      <div className="flex ">
        {data?.[categoryIndex].items.map((item, itemIndex) => (
          <div className="flex basis-1/3 flex-col" key={itemIndex}>
            <img
              alt="item"
              className="h-40 w-full pr-5"
              src={item.img}
              loading="lazy"
            />
            <p className="pt-5 text-center text-xs text-slate-400">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
