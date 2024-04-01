import { Link, Outlet } from "react-router-dom";
import Carusel from "../components/Carusel";
import NavBarPage from "./NavBarPage";
import FeaturedProducts from "../components/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <NavBarPage />
      <div className="w-[70%] ml-80">
        <Carusel />
        <div className="mt-10">
          <h2 className="text-3xl font-light mb-4">Featured</h2>
          <FeaturedProducts />
        </div>
        <Outlet />
      </div>
      <footer className=" bg-cyan-900 w-full h-[300px] mt-20 ">
        <div
          className="ml-80 flex text-white flex-col h-full justify-between 
         "
        >
          <div className="flex gap-40">
            <div>
              <ul className="flex flex-col font-light text-sm mt-2">
                <h3 className="text-xl font-normal">Information</h3>
                <Link to="about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/contact">Warranty</Link>
                <Link to="/contact">Delivery Information</Link>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col font-light text-sm mt-2">
                <h3 className="text-xl font-normal">Customer Service</h3>
                <Link to="about">Who we are</Link>
                <Link to="/contact">Location Map </Link>
              </ul>
            </div>
          </div>
          <div className=" mb-10">
            <hr className="w-[84%] " />
            <span>Powered By ArtShow Artshow Lighting Co., Limited © 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
