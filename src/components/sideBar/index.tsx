import aberturas from "../../assets/img/aberturas.png";
import equipamientos from "../../assets/img/equipamiento.png";
import terminaciones from "../../assets/img/terminaciones.png";
import SideBarComponent from "./SideBarComponent";
import { useState } from "react";
import SideBarMenuItem from "./SideBarMenuItem";
import { getEquipamientoData, getTerminacionesData } from "../../api/apiCalls";
import { getAberturasData } from "../../api/apiCalls";
import { CategoryDTO } from "../../api/types";

interface TabsType {
  categoryComponent?: JSX.Element;
  productsComponent?: JSX.Element;
  name: string;
  img: string;
  getInfo: () => Promise<CategoryDTO[]>;
}

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sidebarStructure: TabsType[] = [
    {
      name: "Aberturas",
      img: aberturas,
      getInfo: getAberturasData,
    },
    {
      name: "Equipamientos",
      img: equipamientos,
      getInfo: getEquipamientoData,
    },
    {
      name: "Terminaciones",
      img: terminaciones,
      getInfo: getTerminacionesData,
    },
  ];

  return (
    <>
      <nav className=" flex h-full min-h-screen w-20 items-center bg-white">
        <ul className="bg-gray-100">
          {sidebarStructure.map((sideBarItem, itemIndex) => (
            <SideBarMenuItem
              key={itemIndex}
              name={sideBarItem.name}
              img={sideBarItem.img}
              onClick={() => {
                setActiveIndex(itemIndex);
              }}
              isActive={activeIndex === itemIndex}
            />
          ))}
        </ul>
      </nav>

      {activeIndex !== null && (
        <SideBarComponent
          closeSideBar={() => setActiveIndex(null)}
          title={sidebarStructure[activeIndex].name}
          getInfo={sidebarStructure[activeIndex].getInfo}
        />
      )}
    </>
  );
};

export default SideBar;
