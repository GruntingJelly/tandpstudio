import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-[#deddd8] py-[20px] ">
      <div className="w-3/6 mx-auto container text-[#8f6f3f] ">
        <div className="flex justify-between h-full items-center">
          <Link href="/">
            <Image src="/logo.png" width={130} height={45.41} />
          </Link>
          <div className="flex space-x-2 ">
            <Link href="/">
              <FaFacebook size={25} className="hover:text-[#8f6f3f]/90" />
            </Link>
            <Link href="/">
              <FaYoutube size={25} className="hover:text-[#8f6f3f]/90" />
            </Link>
            <Link href="/">
              <FaInstagram size={25} className="hover:text-[#8f6f3f]/90" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
