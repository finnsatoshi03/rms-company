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
            subtitle="Welcome to RMS Avisha Enterprise"
            title="Your One-Stop Tech Repair Shop"
          />
          <div className="flex flex-col justify-between gap-16 md:flex-row md:gap-0">
            <BrandQuote />
            {isBelowMd && <Review />}
            <img
              className="w-full md:w-[50vw]"
              src="/assets/RMS-Logo.png"
              alt="Company Logo"
            />
            {/* </div>
            <div className="relative flex h-screen items-center justify-center">
              <div className="absolute -bottom-[5rem] flex h-[100vh] w-[80vw] items-center justify-center rounded-full md:-bottom-[30vh] md:h-[125vh] md:w-[50vw]">
            </div> */}
            {!isBelowMd && <Review />}
          </div>
        </div>
      </WavyBackground>
      <LandingButton />
    </div>
  );
}
