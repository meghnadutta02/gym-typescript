import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Benefits from "./components/Benefits";
import OurClasses from "./components/OurClasses";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import ContactUs from "./components/ContactUs";
function App() {
  const [selectedPage, setSelectedPage] = useState<string>("Home");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY ===0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      else {
        setIsTopOfPage(false);
      }
    }
      window.addEventListener("scroll", handleScroll);
      return () =>{ window.removeEventListener("scroll", handleScroll);}

  }, []);
  return (
    <div className="bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  );
}

export default App;
