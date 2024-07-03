import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="bg-[#F5FCFF] font-inter">
      {/* navbar here */}
      <NavBar />

      {/* banner here  */}
      <Banner />
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
