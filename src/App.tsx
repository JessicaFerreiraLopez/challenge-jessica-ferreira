import "./App.css";
import Controllers from "./components/controllers";
import Header from "./components/header";
import SideBar from "./components/sideBar";

function App() {
  return (
    <div className="bg-gray-200	">
      <Header />
      <SideBar />
      <Controllers />
    </div>
  );
}

export default App;
