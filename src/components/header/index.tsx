import logo from "../../assets/img/logo.png";
import Select from "../basics/Select";
const Header = () => (
  <header>
    <nav className="flex h-20 items-center justify-around bg-[#262626] text-white">
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
