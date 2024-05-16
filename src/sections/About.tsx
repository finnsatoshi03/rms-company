import CoreValues from "@/components/CoreValues";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <div id="about" className="">
      <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-0">
        <SectionTitle section="About" title="Company" />
        <div className="flex flex-col gap-4 text-sm md:text-base">
          <p>
            RMS Avisha Enterprises opened its doors in 2018, founded by a
            technician with years of experience in computers and printers. This
            experience fuels our passion for helping people navigate tech
            troubles. We understand the frustration of malfunctioning equipment,
            so we offer expert support for printers, laptops, and computers at
            competitive rates.
          </p>
          <p>
            Our team is dedicated to getting your devices back to peak
            performance quickly and efficiently. Whether you need repairs,
            maintenance, or upgrades, we have the expertise to handle any
            challenge. Let RMS Avisha Enterprises be your trusted partner for
            all your printer and laptop needs.
          </p>
        </div>
      </div>
      <CoreValues />
    </div>
  );
}
