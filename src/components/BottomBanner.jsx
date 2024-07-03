import bg_image from "../assets/Rectangle 32.png";
import logo from "../assets/logo light.png";
import { MdArrowOutward } from "react-icons/md";

const BottomBanner = () => {
  return (
    <div
      className="mx-48 h-[550px] bg-no-repeat rounded-[32px] mb-40"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(2, 0, 67, 1), rgba(2, 0, 67, 0.3) 100%), url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-end pr-20 pt-16">
        <img className="w-32" src={logo} alt="Logo" />
      </div>
      <div className="pl-20 pt-20">
        <h2 className="text-white text-5xl font-semibold ">
          Get Your <br /> First Appointment <br /> at 50% Off!
        </h2>
        <div className="flex gap-6 mt-6">
          <button className="text-black font-bold border border-yellow-500 bg-yellow-500 px-6 py-3 flex gap-2 items-center rounded-xl">
            Appointment <MdArrowOutward />
          </button>
          <button className="text-white font-medium border border-white px-6 py-2 rounded-xl flex gap-x-1 items-center">
            Learn More{" "}
            <MdArrowOutward className="text-white font-medium text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
