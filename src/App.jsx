import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Foot from "./components/Footer";

function App() {
  return (
    <>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"> </script>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Foot />
    </>
  );
}

export default App;
