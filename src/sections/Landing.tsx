import { WavyBackground } from "../components/WavyBackground";
import Header from "../components/Header";
import BrandQuote from "../components/BrandQuote";
import Review from "../components/Review";

export default function Landing() {
  return (
    <div className="h-full overflow-hidden">
      <WavyBackground className="mt-8 h-full w-full">
        <div id="landing">
          <Header
            subtitle="Welcome to RMS Printer and Laptop Services"
            title="Your One-Stop Tech Repair Shop"
          />
          <div className="flex flex-col justify-between md:flex-row">
            <BrandQuote />
            <div className="relative flex items-center justify-center">
              <div className="bg-red absolute top-60 flex size-[80vw] items-center justify-center rounded-full md:top-16 md:size-[60vw]">
                <img
                  className="absolute -top-16 "
                  src="/ceo-img.png"
                  alt="CEO Image"
                />
              </div>
            </div>
            <Review />
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}
