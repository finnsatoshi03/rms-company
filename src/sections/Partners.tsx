import { InfiniteMovingCards } from "@/components/InfiniteMovingCards";
import { LampContainer } from "@/components/Lamp";
import SectionTitle from "@/components/SectionTitle";

const partners1 = [
  { imgBrand: "/assets/partners/brunos-barbers.png" },
  { imgBrand: "/assets/partners/cebuana-lhuillier.png" },
];

export default function Partners() {
  return (
    <div id="partners" className="w-full">
      <LampContainer>
        <div className="w-full flex justify-center bg-gradient-to-br from-white to-red py-4 bg-clip-text text-transparent">
          <SectionTitle
            className="text-center w-full md:w-3/4"
            section="Trusted By Leaders"
            title="Our Valued Clients"
            titleColor="transparent"
            showThe={false}
          />
        </div>
        <div className="md:w-3/4 w-full text-center">
          We're proud to partner with a variety of businesses and individuals
          who trust our expertise to keep their technology running smoothly.
        </div>
        <div>
          <InfiniteMovingCards />
        </div>
      </LampContainer>
    </div>
  );
}
