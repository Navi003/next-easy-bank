import { FC } from "react";
import React from "react";
interface PropTypes {
  children: React.ReactNode;
}
const Container: FC<PropTypes> = ({ children }): JSX.Element => {
  return (
    <div className="px-6 xl:px-0 py-20 xl:w-[1200px] lg:mx-auto">
      {children}
    </div>
  );
};
export default Container;
