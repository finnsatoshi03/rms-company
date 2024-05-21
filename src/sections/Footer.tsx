import { Branch } from "@/components/FooterBranch";
import { DevTeam } from "@/components/EmailDev";

export default function Footer() {
  return (
    <div id="footer" className="">
      <img
        className="w-[10rem] md:w-[15rem]"
        src="/assets/RMS-Logo.png"
        alt="RMS Brand Logo"
      />
      <p className="mt-4 text-lg leading-5 opacity-80">
        Contact us today for expert printer and laptop repair in Manila.
      </p>
      <div className="my-16 grid gap-8 md:grid-cols-2 md:gap-4">
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
      <div className="grid gap-5 md:grid-cols-[1fr_0.6fr] md:gap-6">
        <div>
          <h1 className="mb-4 text-xl opacity-60 md:text-2xl">Page List</h1>
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
      <div className="mt-8 text-center text-xs opacity-40">
        &copy; {new Date().getFullYear()} RMS Avisha Enterprises. All rights
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
