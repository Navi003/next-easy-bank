"use client";
import Image from "next/image";
import { FC } from "react";
import React from "react";
import Hamburger from "./ui/Hamburger";
import { useState } from "react";
import CloseHamburger from "./ui/CloseHamburger";
import Container from "./Container";
interface PropTypes {
  handleShowModal: () => void;
  showModal: boolean;
}
const NavBar: FC<PropTypes> = ({ handleShowModal, showModal }): JSX.Element => {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full shadow-sm p-7 bg-slate-100">
      <div className="flex items-center justify-between">
        <Image src="logo.svg" width={150} height={50} alt="logo" />
        {!showModal && <Hamburger onClick={handleShowModal} />}
        {showModal && <CloseHamburger onClick={handleShowModal} />}
      </div>
    </nav>
  );
};
export default NavBar;
