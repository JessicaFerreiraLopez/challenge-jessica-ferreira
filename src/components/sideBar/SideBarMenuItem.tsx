export interface SideBarItemProps {
  name: string;
  img: string;
  onClick?: () => void;
  isActive: boolean;
}

const SideBarMenuItem = ({
  name,
  img,
  onClick,
  isActive,
}: SideBarItemProps) => {
  const activeClassName: string = isActive ? "bg-gray-100" : "bg-white";
  return (
    <>
      <li
        className={` ${activeClassName}  flex flex-col items-center px-1`}
        onClick={onClick}
      >
        <img className="h-10" alt="item icon" src={img} />
        <p className="text-[11px] text-slate-500">{name}</p>
      </li>
    </>
  );
};

export default SideBarMenuItem;
