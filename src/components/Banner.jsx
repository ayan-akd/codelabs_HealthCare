import banner from "../assets/Rectangle 5.png";
import banner2 from "../assets/Group 19.png";
// import bg_image from "../assets/image_10.png";

const Banner = () => {
  return (
    <div 
    // style={{ backgroundImage: `url(${bg_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="mx-48 my-8">
      <img src={banner} className="w-full mb-8" alt="banner" />
      <img src={banner2} className="w-full mb-8" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
