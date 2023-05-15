import aberturas from "../../assets/img/aberturas.png";
import equipamientos from "../../assets/img/equipamiento.png";
import terminaciones from "../../assets/img/terminaciones.png";
import SideBarComponent from "./SideBarComponent";
import { useState } from "react";
import SideBarMenuItem from "./SideBarMenuItem";

interface TabsType {
  categoryComponent?: JSX.Element;
  productsComponent?: JSX.Element;
  name: string;
  img: string;
}

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sidebarStructure: TabsType[] = [
    {
      name: "Aberturas",
      img: aberturas,
    },
    {
      name: "Equipamientos",
      img: equipamientos,
    },
    {
      name: "Terminaciones",
      img: terminaciones,
    },
  ];

  return (
    <>
      <nav className=" flex h-full min-h-screen w-20 items-center bg-white">
        <ul>
          {sidebarStructure.map((sideBarItem, itemIndex) => (
            <SideBarMenuItem
              key={itemIndex}
              name={sideBarItem.name}
              img={sideBarItem.img}
              onClick={() => {
                setActiveIndex(itemIndex);
              }}
            />
          ))}
        </ul>
      </nav>

      {activeIndex !== null && (
        <SideBarComponent
          closeSideBar={() => setActiveIndex(null)}
          title={sidebarStructure[activeIndex].name}
          categories={[
            {
              categoryName: "Camas",
              items: [
                { name: "simple", img: "simpleIMG" },
                { name: "simple", img: "simpleIMG" },
              ],
            },
            {
              categoryName: "Sillones",
              items: [
                { name: "simple", img: "simpleIMG" },
                { name: "simple", img: "simpleIMG" },
              ],
            },
          ]}
        />
      )}
    </>
  );
};

export default SideBar;
