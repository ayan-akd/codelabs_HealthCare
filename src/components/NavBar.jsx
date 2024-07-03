import logo from "../assets/logo dark.png";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

const NavBar = () => {
  const links = (
    <>
      <li>Home</li>
      <li>Services</li>
      <li>Blog</li>
      <li>About Us</li>
    </>
  );

  return (
    <div className=" navbar pt-8 lg:px-48">
      <div className="justify-start flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu></AiOutlineMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 px-5 z-[100] p-2 shadow bg-base-200 rounded-box"
          >
            {links}
          </ul>
        </div>

        <div className="">
          <img src={logo} className="w-24" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex justify-between flex-wrap">
        <ul className="menu-horizontal px-1 flex-wrap lg:gap-x-5 xl:gap-x-10 text-blue-950 font-medium">
          {links}
        </ul>
      </div>

      <div className="justify-end  flex-1 ">
        <button className="text-blue-950 font-medium border border-blue-800 px-6 py-2 rounded-xl flex gap-x-1 items-center">
          Appointment{" "}
          <MdArrowOutward className="text-blue-950 font-medium text-lg" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
