import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>       
      <nav className="bg-base-300 shadow-md px-4 lg:px-6">
        <Navbar></Navbar>
      </nav>
      <main >
        <Outlet></Outlet>
      </main>
      <footer className="px-4 lg:px-6">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
