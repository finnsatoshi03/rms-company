import { InfiniteMovingCards } from "@/components/InfiniteMovingCards";
import { LampContainer } from "@/components/Lamp";
import SectionTitle from "@/components/SectionTitle";

const partners1 = [
  { imgBrand: "/assets/partners/1.png" },
  { imgBrand: "/assets/partners/2.png" },
  { imgBrand: "/assets/partners/3.png" },
  { imgBrand: "/assets/partners/4.png" },
  { imgBrand: "/assets/partners/5.png" },
  { imgBrand: "/assets/partners/6.png" },
  { imgBrand: "/assets/partners/7.png" },
  { imgBrand: "/assets/partners/8.png" },
  { imgBrand: "/assets/partners/9.png" },
  { imgBrand: "/assets/partners/10.png" },
];

const partners2 = [
  { imgBrand: "/assets/partners/11.png" },
  { imgBrand: "/assets/partners/12.png" },
  { imgBrand: "/assets/partners/13.png" },
  { imgBrand: "/assets/partners/14.png" },
  { imgBrand: "/assets/partners/15.png" },
  { imgBrand: "/assets/partners/16.webp" },
  { imgBrand: "/assets/partners/17.png" },
  { imgBrand: "/assets/partners/18.png" },
  { imgBrand: "/assets/partners/19.webp" },
  { imgBrand: "/assets/partners/20.png" },
  { imgBrand: "/assets/partners/21.png" },
];

export default function Partners() {
  return (
    <div id="partners" className="w-full">
      <LampContainer className="md:translate-y-[3rem]">
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
      </LampContainer>
      <div className="md:-translate-y-[12rem] -translate-y-[22rem]">
        <InfiniteMovingCards
          items={partners1}
          speed="normal"
          background={true}
        />
        <InfiniteMovingCards
          items={partners2}
          speed="normal"
          direction="right"
          background={true}
        />
      </div>
    </div>
  );
}
