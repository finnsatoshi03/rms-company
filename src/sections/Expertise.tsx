import { InfiniteMovingCards } from "@/components/InfiniteMovingCards";
import SectionTitle from "@/components/SectionTitle";

const brands = [
  { imgBrand: "/assets/logo/canon.png" },
  { imgBrand: "/assets/logo/epson.png" },
  // { imgBrand: "/assets/logo/hp.png" },
  { imgBrand: "/assets/logo/lenovo.png" },
  { imgBrand: "/assets/logo/acer.png" },
  { imgBrand: "/assets/logo/brother.png" },
  { imgBrand: "/assets/logo/asus.png" },
  { imgBrand: "/assets/logo/msi.png" },
];

export default function Expertise() {
  return (
    <div id="services" className="flex flex-col items-center justify-center">
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
        <SectionTitle
          section="Skillset"
          title="Our Major Brand Expertise"
          showThe={false}
          className="w-fit"
        />
        <p className="w-full md:w-1/3">
          Our technicians are well-versed in servicing a wide range of major
          printer and laptop brands. This in-depth knowledge allows them to
          diagnose and resolve issues efficiently, regardless of your device's
          manufacturer.
        </p>
      </div>
      <InfiniteMovingCards items={brands} speed="fast" />
    </div>
  );
}
