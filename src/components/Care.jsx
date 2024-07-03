import pieChart from "../assets/pie-chart.png";
import contract from "../assets/contract.png";
import video from "../assets/video-message.png";
import coin from "../assets/coin.png";
import user1 from "../assets/image_user1.png";
import user2 from "../assets/image_user2.png";
import user3 from "../assets/image_user3.png";
import user4 from "../assets/image_user4.png";
import { FaStar } from "react-icons/fa";

const Care = () => {
  return (
    <div className="mx-4 lg:mx-48 mb-24 2xl:flex gap-4 max-h-[370px] items-center">
      {/* first column  */}
      <div className="px-5 text-[#FBFBFB] shadow-xl rounded-2xl border-2 pb-4 w-[350px]">
        <p className="text-black text-5xl font-bold mb-2 mt-4">90%</p>
        <p className="text-black text-sm mb-4 max-w-40">
          Patient satisfaction rate, reflecting our commitment.
        </p>
        <img src={pieChart} className="w-40 mx-auto" alt="pie chart" />
      </div>

      {/* second column */}
      <div className="mx-auto mb-8">
        {/* title here  */}
        <h2 className="text-black text-5xl font-bold mx-auto text-center mb-4 my-4 max-w-[660px] lg:w-auto">
          Comprehensive Care For Every Patient
        </h2>
        <div className="md:flex gap-8 px-auto justify-around">
          {/* 1st card  */}
          <div className="bg-[#FFFFF5] rounded-2xl border-2 px-5 py-2 min-w-52 mx-auto">
            <p className="text-black text-5xl font-bold mb-2 mt-4">500+</p>
            <p className="text-black text-sm mb-4 text-start">
              Board-certified doctors
            </p>
            <div className="flex flex-col items-end">
              <img src={contract} className="w-20 " alt="contract" />
            </div>
          </div>

          {/* second card  */}
          <div className="bg-[#FBFBFB] rounded-2xl border-2 px-5 py-2 h-fit mt-auto min-w-52 mx-auto">
            <p className="text-black text-5xl font-bold mb-2 mt-4 flex gap-2 items-center">
              4.8 <FaStar className="text-yellow-400" />
            </p>
            <p className="text-black text-sm mb-4 text-start">
              Over 20,000 patient
            </p>
            <div className="flex items-center justify-center">
              <img src={user1} className="w-8 rounded-full" alt="contract" />
              <img src={user2} className="w-8 rounded-full" alt="contract" />
              <img src={user3} className="w-8 rounded-full" alt="contract" />
              <img src={user4} className="w-8 rounded-full" alt="contract" />
            </div>
          </div>

          {/* third card  */}
          <div className="bg-[#FFFFF5] rounded-2xl border-2 px-5 py-2 min-w-52 mx-auto">
            <p className="text-black text-5xl font-bold mb-2 mt-4">$5000</p>
            <p className="text-black text-sm mb-4 text-start">
              Money spend for poor patient
            </p>
            <div className="flex flex-col items-end">
              <img src={coin} className="w-20 " alt="contract" />
            </div>
          </div>
        </div>
      </div>

      {/* third column */}
      <div className="px-5 text-[#FBFBFB] shadow-xl rounded-2xl border-2 py-4 w-[350px]">
        <p className="text-black text-5xl font-bold mb-2 mt-4">50+</p>
        <p className="text-black text-sm mb-4">
          Free lesion video for patient.
        </p>
        <img src={video} className="w-40 mx-auto" alt="pie chart" />
      </div>
    </div>
  );
};

export default Care;
