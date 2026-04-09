import React from "react";
import Logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#001931] py-10">
      <div className="max-w-360 mx-auto text-white">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img className="max-w-10" src={Logo} alt="" />
            <h2 className="font-bold">HERO.IO</h2>
          </div>

          <div className="space-y-4">
            <p className="font-medium text-xl">Social Links</p>

            <div className="flex gap-2 text-3xl">
              <FaSquareXTwitter className="rounded-full"></FaSquareXTwitter>
              <BsLinkedin className="rounded-full"></BsLinkedin>
              <FaFacebook></FaFacebook>
            </div>
          </div>
        </div>

        <p className=" pt-8 border-t border-[#E5E7EB50]">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
