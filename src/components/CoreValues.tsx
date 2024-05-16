import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "./SectionTitle";
import { useMediaQuery } from "react-responsive";

export default function CoreValues() {
  const isSizeMd = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2 md:flex-row md:gap-4">
      {isSizeMd && (
        <SectionTitle
          section="About"
          title="Core Values"
          className="text-right"
        />
      )}
      <img
        className="h-[50vh] w-full rounded-3xl object-cover grayscale"
        src="/core-values-cover.jpg"
        alt="About Image"
      />
      <div className="content-end">
        {!isSizeMd && (
          <SectionTitle
            section="About"
            title="Core Values"
            className="mb-4 text-right"
          />
        )}
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>MISSION</AccordionTrigger>
            <AccordionContent>
              To provide quality, reliable, and professional technical support
              to our clients. Thereby assisting the growth of their business and
              creating long-term connections.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>VISION</AccordionTrigger>
            <AccordionContent>
              RMS Avisha Enterprise aims to create a reputation that gains the
              trust and loyalty of our present and future customers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
