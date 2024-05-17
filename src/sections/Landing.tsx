import { WavyBackground } from "../components/WavyBackground";
import Header from "../components/Header";
import BrandQuote from "../components/BrandQuote";
import Review from "../components/Review";
import { useMediaQuery } from "react-responsive";
import LandingButton from "@/components/LandingButton";

export default function Landing() {
  const isBelowMd = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="h-full overflow-hidden">
      <WavyBackground className="mt-8 h-full w-full">
        <div id="landing">
          <Header
            subtitle="Welcome to RMS Printer and Laptop Services"
            title="Your One-Stop Tech Repair Shop"
          />
          <div className="flex flex-col md:flex-row md:justify-between">
            <BrandQuote />
            {isBelowMd && <Review />}
            <div className="relative flex h-screen items-center justify-center">
              <div className="absolute -bottom-[5rem] flex h-[100vh] w-[80vw] items-center justify-center rounded-full bg-red md:-bottom-[30vh] md:h-[125vh] md:w-[50vw]">
                <img
                  className="absolute bottom-[55vh] w-full sm:w-4/6 md:bottom-[25rem] md:w-[25rem] xl:w-[28rem]"
                  src="/ceo-img.png"
                  alt="CEO Image"
                />
              </div>
            </div>
            {!isBelowMd && <Review />}
          </div>
        </div>
      </WavyBackground>
      <LandingButton />
    </div>
  );
}
