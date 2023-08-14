import { Outlet } from "react-router-dom";
import { Breadcrumb } from "./components/breadcrumb";

function App() {
  return (
    <div>
      <header className="bg-pd-green">
        <div className="container mx-auto flex flex-col p-6 md:p-4">
          <div className="prose flex ">
            <img
              className="m-0 mr-4"
              width="40px"
              src={"population-data-logo.svg"}
            ></img>
            <h1 className="font-medium">
              <span className="text-white">Population</span>{" "}
              <span className="text-pd-amber">Data</span>
            </h1>
          </div>

          <Breadcrumb />
        </div>
      </header>
      <main className="container mx-auto p-6 md:p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
