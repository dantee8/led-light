import { Link } from "react-router-dom";
import { categoryLinks } from "../data";
import ShoppingCart from "../components/ShoppingCart";
const NavBarPage = () => {
  return (
    <>
      <div className="flex justify-between text-lg bg-gray-200 py-2 font-light text-gray-400">
        <div></div>
        <div className="flex items-center gap-3 mr-20">
          <div> whatsapp/wechat: +8618028562278 </div>
          <div>Contact Us</div>
          <ShoppingCart />
        </div>
      </div>

      <div className="">
        <input
          type="text"
          placeholder="Search"
          className="border-2 m-auto flex mt-10 pl-2 rounded w-80 h-10 text-sm font-light"
        />
        <img
          src="https://artshow-lighting.com/image/catalog/demo/manufacturer/ARTSHOW LOGO.png"
          title="Artshow  Lighting Co., Limited"
          alt="Artshow  Lighting Co., Limited"
          className="w-[20%] ml-80 -mt-12"
        ></img>
      </div>
      <div className=" bg-blue-400 h-32  my-4 ml-80  w-[70%] rounded grid grid-cols-8 gap-1 text-center items-center  ">
        {categoryLinks.map((category) => {
          return (
            <Link
              className="text-white text-xs hover:border-[1px]   rounded w-36 h-12 px-4 font-light text-nowrap text-center flex items-center m-auto justify-center"
              key={category}
              to={`/category/${category.replace(/\s+/g, "").toLowerCase()}`}
            >
              {category}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NavBarPage;
