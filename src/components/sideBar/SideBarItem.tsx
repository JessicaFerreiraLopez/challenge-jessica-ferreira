export interface SideBarItemProps {
  name: string;
  img: string;
}

const SideBarItem = ({ name, img }: SideBarItemProps) => (
  <>
    <li className="flex flex-col items-center px-1">
      <img className="h-10" alt="item icon" src={img} />
      <p className="text-[11px] text-slate-500">{name}</p>
    </li>
  </>
);

export default SideBarItem;
