import { WavyBackground } from "../components/WavyBackground";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import BrandQuote from "../components/BrandQuote";
import Review from "../components/Review";
import { Phone } from "lucide-react";

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
                <div className="absolute top-56 md:top-64 z-50 bg-white px-3 py-2 rounded-full flex gap-4">
                  <Button variant="default">
                    <Phone size={16} />
                    <a href="#footer">Contact Us</a>
                  </Button>
                  <Button variant="outline">Be One of Us</Button>
                </div>
              </div>
            </div>
            <Review />
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}
