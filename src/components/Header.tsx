interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <p className="w-fit rounded-full border border-black px-4 py-2 text-center text-xs font-bold uppercase md:text-sm">
        {subtitle}
      </p>
      <h1 className="my-6 w-3/4 text-center font-sansSecondary text-5xl font-black md:text-7xl">
        {title}
      </h1>
    </div>
  );
}
