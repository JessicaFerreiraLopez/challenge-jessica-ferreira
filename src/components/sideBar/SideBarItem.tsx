export interface SideBarItemProps {
  name: string;
  img: string;
}

const SideBarItem = ({ name, img }: SideBarItemProps) => (
  <li>
    <p>{name}</p>
  </li>
);

export default SideBarItem;
