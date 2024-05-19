import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";

export default function LandingButton() {
  const isBelowMd = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="absolute -bottom-[calc(17rem+3rem)] z-50 flex w-4/5 items-center justify-center md:bottom-[2rem]">
      <div className="relative">
        <div className="absolute -left-16 -top-6 z-[80] size-16 sm:-left-24 sm:-top-10 sm:size-24">
          <img src="/assets/arrow-icon.png" alt="Arrow Icon" />
        </div>
      </div>
      <div className="flex gap-2 rounded-full bg-white px-3 py-2 md:gap-4">
        <Button variant="default" size={isBelowMd ? "sm" : "default"}>
          <Phone size={16} />
          <a href="#footer">Contact Us</a>
        </Button>
        <Button variant="outline" size={isBelowMd ? "sm" : "default"}>
          Be One of Us
        </Button>
      </div>
    </div>
  );
}
