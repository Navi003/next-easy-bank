import Image from "next/image";
import { FC } from "react";
import React from "react";
interface PropTypes {
  headingText: string;
  description: string;
  image: string;
}
const FeatureBox: FC<PropTypes> = ({
  headingText,
  description,
  image,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-12 xl:justify-start xl:items-start sm:p-1">
      <Image src={image} alt={image} height={50} width={50} />
      <h2 className="text-xl">{headingText}</h2>
      <p className="text-sm font-medium text-center text-gray-400 xl:text-start">
        {description}
      </p>
    </div>
  );
};
export default FeatureBox;
