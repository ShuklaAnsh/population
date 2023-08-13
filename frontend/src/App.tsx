import { Outlet } from "react-router-dom";
import { Breadcrumb } from "./components/breadcrumb";

function App() {
  return (
    <main className="container prose mx-auto py-6 md:py-4">
      <h1>Population Data</h1>
      <Breadcrumb />
      <Outlet />
    </main>
  );
}

export default App;
