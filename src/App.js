import Header, { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Timeline from "./Components/Timeline";

import "./Styles/app.scss"
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";


function App() {
  // const [menuOpen, setMenuOpen]= useState(false);
  //const [ratio, setRatio] = useState(window.innerWidth/window.innerHeight)

  //useEffect(() => {
  //  const resizeRatio=()=>{
   //   setRatio(window.innerWidth/window.innerHeight)
   // }
   // window.addEventListener("resize", resizeRatio)
  
   // return () => {
    //  window.removeEventListener("resize", resizeRatio)
   // }
  //}, [ratio])ratio<2?
  
  return  (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home ratio={ratio}/>
    <Work />
    <Timeline />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
    <Toaster />
    </>
  )
    //:<em id="customMessage">Please change the ration to view!</em>
}

export default App;
