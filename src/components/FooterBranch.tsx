export const Branch = ({
  name,
  fbLink,
  messengerLink,
}: {
  name: string;
  fbLink: string;
  messengerLink: string;
}) => (
  <div>
    <h1 className="text-xl md:text-2xl font-sansSecondary mb-2 opacity-80">
      {name}
    </h1>
    <div className="grid grid-cols-2 gap-2 md:gap-4 w-full">
      <a
        className="py-2 md:py-3 border hover:cursor-pointer hover:border-transparent hover:bg-red hover:text-white transition-all duration-300 ease-in-out border-white rounded-full text-center"
        href={fbLink}
      >
        Facebook
      </a>
      <a
        className="py-2 md:py-3 border hover:cursor-pointer hover:border-transparent hover:bg-red hover:text-white transition-all duration-300 ease-in-out border-white rounded-full text-center"
        href={messengerLink}
      >
        Messenger
      </a>
    </div>
  </div>
);
