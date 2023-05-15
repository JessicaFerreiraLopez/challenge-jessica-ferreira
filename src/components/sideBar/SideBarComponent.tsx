import Button from "../basics/Button";

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
}

const SideBarComponent = ({ title, categories }: SideBarComponentProps) => {
  return (
    <section className="flex w-2/6 flex-col">
      <div className=" h-full bg-gray-100 pl-6 pt-24">
        <h1 className=" text-lg	font-bold text-slate-500">{title}</h1>
        {categories.map((categoryElem, categoryIndex) => (
          <Button
            key={categoryIndex}
            onClick={() => {
              console.log("categoryName has been clicked");
            }}
            text={categoryElem.categoryName}
            classes="w-[95%] my-1.5	h-10 text-left pl-2.5 text-slate-500	"
          />
        ))}
      </div>
      <div>pepepe</div>
    </section>
  );
};

export default SideBarComponent;
