import SideBarItem, { SideBarItemProps } from "./SideBarItem";

const sidebarStructure: SideBarItemProps[] = [
  {
    name: "Aberturas",
    img: "Aberturas",
  },
  {
    name: "Equipamientos",
    img: "Equipamientos",
  },
  {
    name: "Terminaciones",
    img: "Terminaciones",
  },
];

const SideBar = () => (
  <nav>
    <ul>
      {sidebarStructure.map((sideBarItem, itemIndex) => (
        <SideBarItem
          key={itemIndex}
          name={sideBarItem.name}
          img={sideBarItem.img}
        />
      ))}
    </ul>
  </nav>
);

export default SideBar;
