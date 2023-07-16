import { FC } from "react";
import React from "react";
import CardContainer from "./ui/CardContainer";
import { articles } from "@/data";
interface PropTypes {}
const SectionArtikles: FC<PropTypes> = (): JSX.Element => {
  return (
    <section className="px-6  xl:px-0 py-20 xl:w-[1200px] lg:mx-auto">
      <h2 className="mb-10 text-3xl text-center lg:text-left">
        Latest Articles
      </h2>
      <div className="card-container |  flex flex-col gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <CardContainer
            src={article.image}
            text={article.text}
            author={article.author}
            heading={article.heading}
            key={article.image}
          />
        ))}
      </div>
    </section>
  );
};
export default SectionArtikles;
