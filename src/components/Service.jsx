import { MdArrowOutward } from "react-icons/md";
import banner3 from "../assets/Rectangle 25.png";
import banner4 from "../assets/Rectangle 26.png";
import banner5 from "../assets/Rectangle 27.png";

const Service = () => {
  return (
    <div className="bg-[#FBFBFB] mx-4 lg:mx-48 mb-40">
      <section className=" lg:flex gap-10 justify-between items-center mb-20">
        {/* first card  */}
        <div className="mb-10">
          <p className="border px-6 py-3 rounded-3xl max-w-[140px] text-blue-950 border-blue-800 mb-5">
            Service
          </p>
          <h2 className="text-blue-950 text-4xl font-bold mx-auto text-center mb-5 lg:text-start">
            Empowering Health, Enriching Lives
          </h2>
          <p className="text-blue-950 mx-auto text-center mb-8 max-w-[470px] lg:text-start">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <button className="text-black font-medium border border-yellow-500 bg-yellow-500 px-6 py-3 flex gap-2 items-center rounded-xl">
            Appointment <MdArrowOutward />
          </button>
        </div>

        {/* second card  */}
        <div className="relative">
          <img
            src={banner3}
            className="w-[745px] h-[515px] rounded-2xl"
            alt="about us"
          />
          <div className="absolute bottom-0 left-0 bg-[#343268] px-4 py-5 w-96 rounded-3xl translate-x-5 -translate-y-1/4 opacity-90 h-fit">
            <h4 className="text-xl font-semibold text-white mb-4">
              Advanced Technology
            </h4>

            <div className="flex justify-between items-center">
              <p className="text-white text-xs mb-4">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
              <button className="text-yellow-400 font-bold border border-yellow-400 bg-yellow-400 p-4 rounded-full">
                <MdArrowOutward className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* second part */}
      <section className=" lg:flex gap-10 justify-between items-center">
        {/* first card  */}
        <div className="relative">
          <img
            src={banner4}
            className="w-[768px] h-[515px] rounded-2xl"
            alt="about us"
          />
          <div className="absolute bottom-0 left-0 bg-[#343268] px-4 py-5 w-96 rounded-3xl translate-x-5 -translate-y-1/4 opacity-90 h-fit">
            <h4 className="text-xl font-semibold text-white mb-4">
              Online Doctor Meet
            </h4>

            <div className="flex justify-between items-center">
              <p className="text-white text-xs mb-4">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <button className="text-yellow-400 font-bold border border-yellow-400 bg-yellow-400 p-4 rounded-full">
                <MdArrowOutward className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* second card  */}
        <div className="relative">
          <img
            src={banner5}
            className="w-[768px] h-[515px] rounded-2xl"
            alt="about us"
          />
          <div className="absolute bottom-0 left-0 bg-[#343268] px-4 py-5 w-96 rounded-3xl translate-x-5 -translate-y-1/4 opacity-90 h-fit">
            <h4 className="text-xl font-semibold text-white mb-4">
              Consultancy your health
            </h4>

            <div className="flex justify-between items-center">
              <p className="text-white text-xs mb-4">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
              <button className="text-yellow-400 font-bold border border-yellow-400 bg-yellow-400 p-4 rounded-full">
                <MdArrowOutward className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
