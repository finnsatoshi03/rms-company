import Landing from "../sections/Landing";
import About from "../sections/About";
import Services from "../sections/Services";
import Partners from "../sections/Partners";
import Footer from "../sections/Footer";
import Map from "../sections/Map";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="mx-auto my-8 h-screen w-4/5">
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Partners />
      <Map />
      <Footer />
    </div>
  );
}
