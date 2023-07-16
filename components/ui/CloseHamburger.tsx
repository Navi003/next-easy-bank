import Image from "next/image";
import { FC } from "react";
import React from "react";
interface PropTypes {
  onClick: () => void;
}
const CloseHamburger: FC<PropTypes> = ({ onClick }): JSX.Element => {
  return (
    <div className="w-8 h-5">
      <Image
        onClick={onClick}
        alt="nav-mobile icon"
        src="icon-close.svg"
        width={20}
        height={20}
      />
    </div>
  );
};
export default CloseHamburger;
