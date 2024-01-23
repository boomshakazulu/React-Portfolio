import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Foot from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Foot />
    </>
  );
}

export default App;
