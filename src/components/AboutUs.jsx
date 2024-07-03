import { MdArrowOutward } from "react-icons/md";
import banner2 from "../assets/Rectangle 24.png";

const AboutUs = () => {
  return (
    <div className="mx-4 lg:mx-48 lg:flex justify-between items-center mb-48">

      <div className="mb-3">
        <p className="border px-6 py-3 rounded-3xl max-w-[140px] text-blue-950 border-blue-800 mb-5">
          Who we are
        </p>
        <h2 className="text-blue-950 text-4xl font-bold mx-auto text-center mb-5 lg:text-start">
          We Help To Get Solutions
        </h2>
        <p className="text-blue-950 mx-auto text-center mb-8 max-w-[470px] lg:text-start">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="text-black font-medium border border-yellow-500 bg-yellow-500 px-6 py-3 flex gap-2 items-center rounded-xl">
          Learn more <MdArrowOutward />
        </button>
      </div>

      <div className="relative">
        <img src={banner2} className="w-[768px] h-[515px]" alt="about us" />
        <div className="absolute bottom-0 left-0 bg-[#343268] px-6 py-7 w-96 h-48 rounded-3xl -translate-x-1/2 translate-y-1/4">
          <h4 className="text-xl font-medium text-white mb-4">
            Our mission is simple
          </h4>
          <p className="text-white mb-4">
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
