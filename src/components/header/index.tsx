import logo from "../../assets/img/logo.png";
const Header = () => (
  <header>
    <nav className="flex h-20 items-center justify-around bg-[#262626] text-white">
      <img className="h-16" alt="Logo" src={logo} />
      <div>Guardar y salir</div>
    </nav>
  </header>
);

export default Header;
