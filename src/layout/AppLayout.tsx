import Landing from "../sections/Landing";
import About from "../sections/About";
import Services from "../sections/Services";
import Partners from "../sections/Partners";
import Footer from "../sections/Footer";
import Map from "../sections/Map";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="my-8 h-screen w-screen bg-black">
      <div className="h-full w-full rounded-b-[10vw] bg-white">
        <div className="mx-auto h-full w-4/5">
          <Navbar />
          <Landing />
        </div>
      </div>
      <div className="relative z-50 w-full bg-black ">
        <div className="mx-auto w-4/5 text-white">
          <About />
          <Services />
          <Partners />
          <Map />
          <Footer />
        </div>
      </div>
    </div>
  );
}
