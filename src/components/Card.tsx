import { ArrowUpRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export default function Card({
  title,
  description,
  image = "https://placehold.co/600x400",
}: CardProps) {
  const base =
    "h-[40vh] p-4 md:p-8 grid gap-4 rounded-3xl transition-all duration-300 linear";

  const card = {
    default: `${base} border border-red`,
    hover: `${base} group hover:bg-red hover:text-white hover:cursor-pointer hover:rounded-t-3xl hover:rounded-bl-[13rem] hover:rounded-br-3xl hover:rounded-tr-3xl`,
  };

  return (
    <>
      <div
        className={`${card.default} ${card.hover} padding-[2em] relative row-span-3 grid-rows-subgrid`}
      >
        <h1 className="border border-transparent border-b-red pb-4 text-3xl group-hover:border-b-white md:text-5xl">
          {title}
        </h1>
        <p className="text-sm md:text-base">{description}</p>
        <img
          className="w-full rounded-2xl object-cover transition-all duration-300 ease-in-out group-hover:rounded-t-2xl group-hover:rounded-bl-[12rem] group-hover:rounded-br-2xl"
          src={image}
          alt="Card Image"
        />
        <ArrowUpRight
          size={48 * 2.5}
          color="red"
          strokeWidth={1}
          className="absolute bottom-6 left-2 z-50 -translate-x-24 translate-y-24 transform rounded-full border-2 border-red bg-white p-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </div>
    </>
  );
}
