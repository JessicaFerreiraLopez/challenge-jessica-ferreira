import Controllers from "./components/controllers";
import Header from "./components/header";
import SideBar from "./components/sideBar";

function Layout() {
  return (
    <div className="flex flex-col bg-gray-200  sm:flex-row  	">
      <Header />
      <SideBar />
      <Controllers />
    </div>
  );
}

export default Layout;
