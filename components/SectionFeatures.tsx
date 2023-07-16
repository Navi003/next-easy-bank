import { FC } from "react";
import React from "react";
import FeatureBox from "./ui/FeatureBox";
import { data } from "@/data";
import Container from "./Container";
interface PropTypes {}
const SectionFeatures: FC<PropTypes> = (): JSX.Element => {
  return (
    <section className="bg-gray-200">
      <Container>
        <h2 className="mb-8 text-3xl text-center lg:text-left">
          Why choose Easybank
        </h2>
        <div className="">
          <div className="flex flex-col flex-wrap items-center justify-center sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:p-8 gap-7 ">
            {data.map((obj) => (
              <FeatureBox
                image={obj.image}
                description={obj.randomText}
                headingText={obj.headingText}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default SectionFeatures;
