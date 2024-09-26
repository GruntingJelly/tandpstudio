import React from "react";
import { IoEllipseSharp } from "react-icons/io5";

function Goals() {
  return (
    <div className="w-3/6 mx-auto container py-20 space-y-7 font-roboto">
      <h2 className="font-bold text-[42px] text-[#8f6f3f] text-center">
        Business Goals
      </h2>
      <ul className=" text-[#8f6f3f] list-disc text-xl space-y-3 ml-5">
        <li>
          <p className="text-justify">
            Attain a high level of client satisfaction to establish a solid
            reputation and promote referrals.
          </p>
        </li>
        <li>
          <p className="text-justify">
            Develop a professional growth program that encourages ongoing
            learning and certification opportunities for team members.
          </p>
        </li>
        <li>
          <p className="text-justify">
            Allocate resources to advanced technologies and tools, such as
            Building Information Modeling (BIM) and virtual reality, to boost
            our design capabilities and streamline project execution.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Goals;
