import { FC } from "react";
import React from "react";
import Image from "next/image";
interface PropTypes {
  author?: string;
  heading: string;
  text: string;
  src: string;
}
const CardContainer: FC<PropTypes> = ({
  author,
  heading,
  text,
  src,
}): JSX.Element => {
  return (
    <div className="pb-6 overflow-hidden bg-gray-100 rounded-md shadow-sm">
      <div className="h-[50%]">
        <Image
          className="object-cover w-full h-full"
          src={src}
          height={400}
          width={400}
          alt="currency"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 px-10 mt-6 lg:px-5 xl:justify-start">
        <h6 className="text-xs text-gray-400 lg:text-sm">{author}</h6>
        <h4 className="text-xl lg:text-lg">{heading}</h4>
        <p className="text-sm font-medium text-gray-400 lg:text-base xl:">
          {text}
        </p>
      </div>
    </div>
  );
};
export default CardContainer;
