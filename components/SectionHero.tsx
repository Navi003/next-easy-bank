import Image from "next/image";
import { FC } from "react";
import React from "react";
import Button from "./ui/Button";

interface PropTypes {}
const SectionHero: FC<PropTypes> = (): JSX.Element => {
  return (
    <section className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2 lg:place-items-center">
      <article className="max-w-xl px-5 py-20 mx-auto text-center lg:text-left">
        <h1 className="mb-6 text-3xl text-slate-800 lg:text-5xl">
          Next generation digital banking
        </h1>

        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button>Request Invite</Button>
      </article>

      <article className="relative">
        <picture>
          <source media="(min-width: 768px)" srcSet="/bg-intro-desktop.svg" />
          <Image
            width={1200}
            height={1200}
            src="/bg-intro-mobile.svg"
            alt=""
            className="w-full"
          />
        </picture>

        <img
          src="/image-mockups.png"
          alt=""
          className="absolute -top-32 lg:-right-20"
        />
      </article>
    </section>
  );
};
export default SectionHero;
