import Landing from "../sections/Landing";
import About from "../sections/About";
import Services from "../sections/Services";
import Partners from "../sections/Partners";
import Footer from "../sections/Footer";
import Map from "../sections/Map";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="mt-8 w-screen bg-black">
      <div className="h-[130dvh] w-full overflow-hidden rounded-b-[10vw] bg-white md:h-[100vh]">
        <div className="mx-auto h-full w-4/5">
          <Navbar />
          <Landing />
        </div>
      </div>
      <div className="w-full bg-black ">
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
