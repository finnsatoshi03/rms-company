import SectionTitle from "@/components/SectionTitle";
import { Headset, Mail, MapPin, Phone } from "lucide-react";

export default function Map() {
  return (
    <div id="map" className="mt-16">
      <SectionTitle
        section="Locations"
        title="Visit Us Today!"
        titleColor="black"
        showThe={false}
      />
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-6">
        <div className="flex flex-col gap-2 md:gap-4">
          <iframe
            className="w-full h-[50vh] rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4321.384683504193!2d121.12773957280383!3d14.567920971035866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c70b520d73d9%3A0x3601b0a089cc26ef!2sRMS%20Avisha%20Enterprises!5e0!3m2!1sen!2sph!4v1715937679879!5m2!1sen!2sph"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <MapDescription
            branch="Taytay Branch"
            location="1st Floor Everlasting Commercial Building, 172 JP Rizal Avenue, San Juan Lumang Palengke Taytay Rizal"
            tel="(02) 8245 - 4828"
            contact="09436064129"
            email="info.rmsavisha@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <iframe
            className="w-full h-[50vh] rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.0068999272917!2d121.09572018702703!3d14.589697568692598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7f41836621d%3A0x25522adacc4fca64!2sACM%20Building!5e0!3m2!1sen!2sph!4v1715938051864!5m2!1sen!2sph"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <MapDescription
            branch="Pasig Branch"
            location="1st floor ACM Building Brgy. Sta. Lucia De Castro Pasig City"
            tel="(02) 8983 - 3684"
            contact="09948808918"
            email="rmsavisha.pasig@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

function MapDescription({
  branch,
  location,
  email,
  tel,
  contact,
}: {
  branch: string;
  location: string;
  email: string;
  tel: string;
  contact: string;
}) {
  return (
    <div className="w-full">
      <h1 className="pb-2 md:pb-4 border border-transparent border-b-black text-lg md:text-xl font-extrabold">
        {branch}
      </h1>
      <div className="grid grid-rows-[auto_auto] grid-cols-2 md:mt-4 mt-2 gap-2 md:gap-4">
        <div className="grid grid-cols-[auto_1fr] md:gap-4 gap-2">
          <span>
            <MapPin color="red" size={16} />
          </span>
          <p className="leading-5">{location}</p>
        </div>
        <div className="flex items-center self-start md:gap-4 gap-2 justify-self-end">
          <span>
            <Phone color="red" size={16} />
          </span>
          <p className="leading-5">{tel}</p>
        </div>
        <div className="flex items-center self-start md:gap-4 gap-2">
          <span>
            <Mail color="red" size={16} />
          </span>
          <p className="break-all">{email}</p>
        </div>
        <div className="flex items-center self-start md:gap-4 gap-2 justify-self-end">
          <span>
            <Headset color="red" size={16} />
          </span>
          <p>{contact}</p>
        </div>
      </div>
    </div>
  );
}
