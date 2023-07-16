import { FC } from "react";
import React from "react";
import Link from "next/link";

interface PropTypes {
  href: string;
  children: React.ReactNode;
}
const NavListItem: FC<PropTypes> = ({ href, children }): JSX.Element => {
  return (
    <li className="mt-2 font-medium text-[#e1e4ed]">
      <Link href={`/${href}`}>{children}</Link>
    </li>
  );
};
export default NavListItem;
