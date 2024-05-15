import Header from "../components/Header";
import { WavyBackground } from "../components/WavyBackground";

export default function Landing() {
  return (
    <div className="h-full overflow-hidden">
      {/* <WavyBackground className="mt-8 h-full w-full"> */}
      <div id="landing">
        <Header
          subtitle="Welcome to RMS Printer and Laptop Services"
          title="Your One-Stop Tech Repair Shop"
        />
        <div className="relative flex items-center justify-center">
          <div className="bg-red absolute top-16 flex size-[80vw] items-center justify-center rounded-full md:size-[60vw]">
            <img
              className="absolute -top-16 "
              src="/ceo-img.png"
              alt="CEO Image"
            />
          </div>
        </div>
        <div></div>
      </div>
      {/* </WavyBackground> */}
    </div>
  );
}
