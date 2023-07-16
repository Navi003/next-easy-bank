import { FC } from "react";
import React from "react";
interface PropTypes {}
const Button: FC<PropTypes> = (): JSX.Element => {
  return (
    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-green to-primary-blau text-[#e1e4ed] shadow-sm">
      Request invite
    </button>
  );
};
export default Button;
