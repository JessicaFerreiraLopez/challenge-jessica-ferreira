import SideBarItem, { SideBarItemProps } from "./SideBarMenuItem";
import aberturas from "../../assets/img/aberturas.png";
import equipamientos from "../../assets/img/equipamiento.png";
import terminaciones from "../../assets/img/terminaciones.png";
import SideBarComponent from "./SideBarComponent";
import { useState } from "react";

const SideBar = () => {
  const [tabPanelIsOpen, setTabPanelIsOpen] = useState<boolean>(false);

  const sidebarStructure: SideBarItemProps[] = [
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
            <SideBarItem
              key={itemIndex}
              name={sideBarItem.name}
              img={sideBarItem.img}
              onClick={() => {
                setTabPanelIsOpen(true);
              }}
            />
          ))}
        </ul>
      </nav>

      {tabPanelIsOpen && (
        <SideBarComponent
          closeSideBar={() => setTabPanelIsOpen(false)}
          title="Aberturas"
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
