import banner from "../assets/Rectangle 5.png";
// import banner2 from "../assets/Group 19.png";
// import bg_image from "../assets/image_10.png";

const Banner = () => {
  return (
    <div className="relative mx-48 my-8">
      <img src={banner} className="w-full mb-8" alt="banner" />
      <div
        className="absolute top-0 left-0 w-full h-full rounded-[60px]"
        style={{
          background:
            "linear-gradient(179.57deg, rgba(0, 193, 157, 0) -25.412%, rgba(2, 0, 67, 0.47) 107.111%)",
        }}
      />
    </div>
  );
};

export default Banner;
