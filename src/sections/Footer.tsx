import { Branch } from "@/components/FooterBranch";
import { DevTeam } from "@/components/EmailDev";

export default function Footer() {
  return (
    <div id="footer" className="">
      <img
        className="md:w-[15rem] w-[10rem] opacity-80"
        src="/assets/RMS-Logo.png"
        alt="RMS Brand Logo"
      />
      <p className="mt-4 text-lg leading-5 opacity-80">
        Contact us today for expert printer and laptop repair in Manila.
      </p>
      <div className="grid md:grid-cols-2 gap-8 md:gap-4 my-16">
        <Branch
          name="Taytay Branch"
          fbLink="https://www.facebook.com/RMSAvisha"
          messengerLink="https://m.me/633952786985022"
        />
        <Branch
          name="Pasig Branch"
          fbLink="https://www.facebook.com/PasigprinterRepairshop"
          messengerLink="https://m.me/633952786985022/112204278044653"
        />
      </div>
      <div className="grid md:grid-cols-[1fr_0.6fr] gap-5 md:gap-6">
        <div>
          <h1 className="opacity-60 text-xl md:text-2xl mb-4">Page List</h1>
          <div className="grid grid-cols-2">
            <PageList
              pages={[
                { name: "Home", href: "#landing" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
              ]}
            />
            <PageList
              pages={[
                { name: "Our Partners", href: "#partners" },
                { name: "Locations", href: "#map" },
              ]}
            />
          </div>
        </div>
        <DevTeam />
      </div>
      <div className="mt-8 text-center opacity-40 text-xs">
        &copy; {new Date().getFullYear()} RMS Printer Repair Shop. All rights
        reserved.
      </div>
    </div>
  );
}

const PageList = ({ pages }: { pages: { name: string; href: string }[] }) => (
  <ul className="flex flex-col gap-2 md:gap-3">
    {pages.map((page) => (
      <li key={page.href}>
        <a href={page.href}>{page.name}</a>
      </li>
    ))}
  </ul>
);
