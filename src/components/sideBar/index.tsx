import SideBarItem, { SideBarItemProps } from "./SideBarItem";
import aberturas from "../../assets/img/aberturas.png";
import equipamientos from "../../assets/img/equipamiento.png";
import terminaciones from "../../assets/img/terminaciones.png";
import SideBarComponent from "./SideBarComponent";

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

const SideBar = () => (
  <>
    <nav
      className=" flex h-full min-h-screen w-20 items-center bg-white
"
    >
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
    <SideBarComponent
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
  </>
);

export default SideBar;
