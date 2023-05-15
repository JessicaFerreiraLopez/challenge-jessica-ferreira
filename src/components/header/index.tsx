import logo from "../../assets/img/logo.png";
import Select from "../basics/Select";
const Header = () => (
  <header>
    <nav className="fixed top-0	 flex	 h-20 w-full	items-center justify-around bg-[#262626] pl-24">
      <img className="h-16" alt="Logo" src={logo} />

      <Select
        options={[
          { value: "saveAndClose", labelText: "Guardar y salir" },
          { value: "exitWithoutSaving", labelText: "Salir sin guardar" },
          { value: "saveAndContinue", labelText: "Guardar y continuar" },
        ]}
        defaultOption="saveAndClose"
      />
    </nav>
  </header>
);

export default Header;
