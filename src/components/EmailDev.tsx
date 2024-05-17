import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { SocialLink } from "./SocialLinks";

export const DevTeam = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = form.current?.user_email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Invalid Email Address",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    const message = `The person with email ${email} wants to connect to create something.`;
    if (form.current) {
      form.current.message.value = message;
    }

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          },
        )
        .then(
          () => {
            toast({
              title: "Your Message is On Its Way!",
              description: "Expect a response from the developer soon.",
            });
            setIsSubmitting(false);
          },
          (error) => {
            toast({
              variant: "destructive",
              title: "Uh-oh! We couldn't send your message.",
              description: `${error}`,
            });
            setIsSubmitting(false);
          },
        );
    }
  };

  return (
    <div>
      <h1 className="opacity-60 text-xl md:text-2xl mb-4">
        Say Hi to the Dev Team!
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="relative">
          <Input
            type="email"
            name="user_email"
            required
            placeholder="Enter Your Email"
            disabled={isSubmitting}
          />
          <input type="hidden" name="message" />
          <button
            type="submit"
            className="absolute right-4 top-2"
            disabled={isSubmitting}
          >
            <ArrowUpRight strokeWidth={1} />
          </button>
        </div>
      </form>
      <div className="flex gap-2 mt-4 justify-end">
        <SocialLink
          href="https://portfolio-chi-beryl-23.vercel.app/"
          imgSrc="https://img.icons8.com/fluency-systems-filled/48/triangle.png"
          imgAlt="triangle"
          hoverText="Visit the developer's portfolio to see more projects."
        />
        <SocialLink
          href="https://m.me/FabulousEggPie"
          imgSrc="https://img.icons8.com/ios/50/facebook-messenger--v1.png"
          imgAlt="facebook-messenger--v1"
          hoverText="Message the developer on Facebook Messenger."
        />
        <SocialLink
          href="https://github.com/finnsatoshi03"
          imgSrc="https://img.icons8.com/ios-glyphs/30/github.png"
          imgAlt="github"
          hoverText="Check out the developer's GitHub profile."
        />
      </div>
    </div>
  );
};
