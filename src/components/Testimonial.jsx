/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import sarah from "../assets/image_11.png";
import michael from "../assets/image_12.png";
import david from "../assets/image_13.png";
import jhon from "../assets/image_14.png";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="mx-48 my-20 text-black">
      <button className="border border-black rounded-[32px] px-6 py-2">
        Testimonial
      </button>
      <h2 className="font-semibold text-4xl mt-4 mb-8">
        What they say about us
      </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[#FFFFF5] rounded-2xl px-6 py-10">
            <h2 className="text-start font-semibold text-xl mb-3">
              Expertise and Compassion Combined
            </h2>
            <p className="text-start text-xs text-[#4D4C7B]">
              I can't thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex gap-6 mt-5">
              <div className="w-10">
                <img className="rounded-full" src={sarah} alt="" />
              </div>
              <div>
                <p className="text-[#4D4C7B] text-xs">
                  {" "}
                  <span className="font-semibold text-black">Sarah D,</span> IT
                  Professional
                </p>
                <div className="flex text-yellow-300">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                  <FaStar></FaStar> <FaStar></FaStar>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-[#FFFFF5] rounded-2xl px-6 py-10">
            <h2 className="text-start font-semibold text-xl mb-3">
              Life-Saving Care, Life-Changing Experience
            </h2>
            <p className="text-start text-xs text-[#4D4C7B]">
              My experience at [Healthcare Provider Name] was life-changing. The
              prompt and accurate diagnosis, coupled with the advanced
              treatments they provided, saved my life.
            </p>
            <div className="flex gap-6 mt-5">
              <div className="w-10">
                <img className="rounded-full" src={michael} alt="" />
              </div>
              <div>
                <p className="text-[#4D4C7B] text-xs">
                  {" "}
                  <span className="font-semibold text-black">
                    Michael R,{" "}
                  </span>{" "}
                  Business Executive{" "}
                </p>
                <div className="flex text-yellow-300">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                  <FaStar></FaStar>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-[#FFFFF5] rounded-2xl px-6 py-10">
            <h2 className="text-start font-semibold text-xl mb-3">
            A Partner in Health and
            Wellness
            </h2>
            <p className="text-start text-xs text-[#4D4C7B]">
            As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and
            </p>
            <div className="flex gap-6 mt-5">
              <div className="w-10">
                <img className="rounded-full" src={david} alt="" />
              </div>
              <div>
                <p className="text-[#4D4C7B] text-xs">
                  {" "}
                  <span className="font-semibold text-black">David S,</span> Lawyer
                </p>
                <div className="flex text-yellow-300">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                  <FaStar></FaStar> <FaStar></FaStar>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-[#FFFFF5] rounded-2xl px-6 py-10">
            <h2 className="text-start font-semibold text-xl mb-3">
              Expertise and Compassion Combined
            </h2>
            <p className="text-start text-xs text-[#4D4C7B]">
              I can't thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex gap-6 mt-5">
              <div className="w-10">
                <img className="rounded-full" src={jhon} alt="" />
              </div>
              <div>
                <p className="text-[#4D4C7B] text-xs">
                  {" "}
                  <span className="font-semibold text-black">
                    Jhon R,
                  </span>{" "}
                  Business Executive
                </p>
                <div className="flex text-yellow-300">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                  <FaStar></FaStar> <FaStar></FaStar>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFFFF5] rounded-2xl px-6 py-10">
            <h2 className="text-start font-semibold text-xl mb-3">
              Expertise and Compassion Combined
            </h2>
            <p className="text-start text-xs text-[#4D4C7B]">
              I can't thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex gap-6 mt-5">
              <div className="w-10">
                <img className="rounded-full" src={sarah} alt="" />
              </div>
              <div>
                <p className="text-[#4D4C7B] text-xs">
                  {" "}
                  <span className="font-semibold text-black">Sarah D,</span> IT
                  Professional
                </p>
                <div className="flex text-yellow-300">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>{" "}
                  <FaStar></FaStar> <FaStar></FaStar>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
