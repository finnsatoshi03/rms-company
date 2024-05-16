import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    title: "Printer Repair",
    description:
      "Fix printing problems like faint lines, paper jams, and error messages. Get clear, crisp documents every time.",
  },
  {
    title: "Laptop Repair",
    description:
      " Is your laptop slow, crashing, or frozen? We handle both hardware and software issues to get you back to work.",
  },
  {
    title: "Monitor Repair",
    description:
      "Fix flickering screens, strange lines, or a complete blackout. We can often save you money on a replacement.",
  },
  {
    title: "Motherboard Repair",
    description:
      "Our experts tackle complex motherboard problems, but understand the potential risks involved.",
  },
];

export default function Services() {
  return (
    <div id="" className="mb-8 mt-24 flex flex-col gap-4">
      <SectionTitle
        section="Services"
        title="What We Offer"
        showThe={false}
        titleColor="black"
        // className="text-right"
      />
      <p className="md:w-1/3">
        Don't let tech issues slow you down. We offer fast and efficient repairs
        and services to get your laptop and printer back up and running in no
        time.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
}
