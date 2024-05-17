import { HoverCardContent, HoverCard, HoverCardTrigger } from "./ui/hover-card";

export const SocialLink = ({
  href,
  imgSrc,
  imgAlt,
  hoverText,
}: {
  href: string;
  imgSrc: string;
  imgAlt: string;
  hoverText: string;
}) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <a href={href} className="p-2 rounded-full hover:opacity-80 bg-red">
        <img width="24" height="24" src={imgSrc} alt={imgAlt} />
      </a>
    </HoverCardTrigger>
    <HoverCardContent>
      <p className="text-sm">{hoverText}</p>
    </HoverCardContent>
  </HoverCard>
);
