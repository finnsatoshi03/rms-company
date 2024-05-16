import { WavyBackground } from "../components/WavyBackground";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import BrandQuote from "../components/BrandQuote";
import Review from "../components/Review";
import { Phone } from "lucide-react";
import { useMediaQuery } from "react-responsive";

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
              <div className="absolute -bottom-[10vh] flex h-[100vh] w-[80vw] items-center justify-center rounded-full bg-red md:-bottom-[30vh] md:h-[125vh] md:w-[50vw]">
                <img
                  className="absolute bottom-[60vh] w-full sm:w-4/6 md:bottom-[25rem]"
                  src="/ceo-img.png"
                  alt="CEO Image"
                />
                {/* <div className="absolute top-56 z-50 flex gap-4 rounded-full bg-white px-3 py-2 md:top-64">
                  <Button variant="default">
                    <Phone size={16} />
                    <a href="#footer">Contact Us</a>
                  </Button>
                  <Button variant="outline">Be One of Us</Button>
                </div> */}
              </div>
            </div>
            {!isBelowMd && <Review />}
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}
