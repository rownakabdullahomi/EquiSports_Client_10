import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
  return (
    <HelmetProvider>
      <div>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "16px",
              fontWeight: "bold",
            },
          }}
        />
        <nav className="bg-base-300 shadow-md sticky top-0 z-50">
          <Navbar></Navbar>
        </nav>
        <main style={{ minHeight: `calc(100vh - 200px)` }}>
          <Outlet></Outlet>
        </main>
        <footer className="">
          <Footer></Footer>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
