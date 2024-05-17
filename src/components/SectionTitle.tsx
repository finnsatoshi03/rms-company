import { cn } from "../utils/cn.ts";

interface SectionTitleProps {
  section?: string;
  title: string;
  className?: string;
  showThe?: boolean;
  titleColor?: string;
  noSection?: boolean;
}

export default function SectionTitle({
  section,
  title,
  className,
  showThe = true,
  titleColor = "red",
  noSection = false,
}: SectionTitleProps) {
  return (
    <div className={cn(className)}>
      {!noSection && (
        <p className="text-sm uppercase md:text-base">{section}</p>
      )}
      <h1
        className={`font-sansSecondary text-5xl font-black leading-10 text-${titleColor} md:text-7xl md:leading-[4rem]`}
      >
        {showThe && (
          <>
            The
            <br />
          </>
        )}
        {title}
      </h1>
    </div>
  );
}
