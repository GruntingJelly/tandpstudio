import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-[#deddd8] py-[20px] ">
      <div className="w-3/6 mx-auto container text-[#8f6f3f] ">
        <div className="flex justify-between h-full items-center">
          <Link href="/">
            <Image src="/logo.png" width={130} height={45.41} />
          </Link>
          <div className="flex  ">
            <div className="flex  space-x-1 px-3 border-l-2  border-[#8f6f3f]">
              <p className="flex items-center font-semibold">
                <FaLocationDot className="mr-1" /> Location:
              </p>
              <p className="italic">Balanga City, Bataan</p>
            </div>
            <div className="flex items-center space-x-1 px-3 border-l-2  border-[#8f6f3f]">
              <p className="flex items-center font-semibold">
                <MdEmail className="mr-1" /> Email:
              </p>
              <p className="italic">tpdesignstudio@gmail.com</p>
            </div>
            <div className="flex items-center space-x-1 px-3 border-l-2  border-[#8f6f3f]">
              <p className="flex items-center font-semibold">
                <FaPhoneFlip className="mr-1" /> Phone:
              </p>
              <p className="italic">+63 927 6352 100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
