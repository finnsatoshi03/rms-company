import { Star } from "lucide-react";

const URL =
  "https://web.facebook.com/doguiles/posts/pfbid0bN7bLqzpT9HvM9sWzEFVEG6pahFByyT9Y62bsvKGiCjwiCNJJsUaTSWcrnnBi4Del";

export default function Review() {
  return (
    <div>
      <div className="flex flex-col items-end text-right">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={24} fill="yellow" color="yellow" />
          ))}
        </div>
        <p className="my-6 text-sm md:text-base">
          "Quick solution and service. Team <br />
          has a CAN DO attitude.
          <br />5 Stars!"
        </p>
        {/* profile */}
        <div
          className="flex items-center gap-2"
          onClick={() => {
            window.location.href = URL;
          }}
        >
          <div>
            <p className="font-extrabold leading-3">Lemuel Doguiles</p>
            <a className="text-sm opacity-60" href={URL}>
              FB Review
            </a>
          </div>
          <img
            className="size-10 rounded-full"
            src="/reviewer.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
