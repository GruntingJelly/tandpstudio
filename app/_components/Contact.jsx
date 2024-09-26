import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";
function Contact() {
  return (
    <section className="bg-[#545454] py-[60px]">
      <div className="w-3/6 mx-auto container text-white">
        <div className="grid grid-cols-2 font-roboto items-center">
          <p className="font-bold text-3xl">T and P Design Studio</p>
          <p className="text-center whitespace-normal">
            Want to discuss your new project?...{" "}
            <Link
              href="mailto: tpdesignstudio@gmail.com"
              className="font-extrabold inline-flex items-center"
            >
              Contact us now <FaPlus className="ml-2" size={12} />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
