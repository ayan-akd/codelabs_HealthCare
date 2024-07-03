import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import BottomBanner from "./components/BottomBanner";
import Care from "./components/Care";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="bg-[#F5FCFF] font-inter">
      {/* navbar here */}
      <NavBar />

      {/* banner here  */}
      <Banner />
      <Care></Care>
      <AboutUs></AboutUs>
      <Service></Service>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <BottomBanner></BottomBanner>
      <Footer></Footer>
    </div>
  );
}

export default App;
