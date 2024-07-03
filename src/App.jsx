import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-[#F5FCFF] font-inter">
      {/* navbar here */}
      <NavBar />

      {/* banner here  */}
      <Banner />
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
