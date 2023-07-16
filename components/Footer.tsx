import Image from "next/image";
import { FC } from "react";
import React from "react";
import NavListItem from "./ui/NavListItem";
import Button from "./ui/Button";
import Container from "./Container";
interface PropTypes {}
const Footer: FC<PropTypes> = (): JSX.Element => {
  return (
    <footer className="bg-[#2d314e] mt-14 pb-20">
      <Container>
        <div className="flex flex-col items-center justify-center gap-10 pt-10 xl:justify-between xl:flex-row">
          <div className="flex flex-col items-center gap-4 gap-5">
            <Image
              className="w-[15rem]"
              src="logoFooter.svg"
              width={150}
              height={50}
              alt="logo"
            />
            <div className="flex gap-2 xl:gap-6">
              <Image
                src="icon-facebook.svg"
                width={35}
                height={35}
                alt="facebook-icon"
                className="text-white"
              />
              <Image
                src="icon-youtube.svg"
                width={35}
                height={35}
                alt="youtube-icon"
              />
              <Image
                src="icon-twitter.svg"
                width={35}
                height={35}
                alt="twitter-icon"
              />
              <Image
                src="icon-pinterest.svg"
                width={35}
                height={35}
                alt="icon-pinterest"
              />
              <Image
                src="icon-instagram.svg"
                width={35}
                height={35}
                alt="icon-instagram"
              />
            </div>
          </div>
          <ul className="text-center xl:grid xl:grid-cols-2 xl:gap-x-10 xl:gap-y-4 ">
            <NavListItem href="about-us">About Us</NavListItem>
            <NavListItem href="contact">Contact</NavListItem>
            <NavListItem href="Blog">Blog</NavListItem>
            <NavListItem href="careeers">Careers</NavListItem>
            <NavListItem href="Support">Support</NavListItem>
            <NavListItem href="privary-policy">Privacy Policy</NavListItem>
          </ul>
          <div className="flex flex-col gap-6">
            <Button>Request Invite</Button>
            <span className="text-gray-500">
              &#169; Easybank. All rights reserved.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
