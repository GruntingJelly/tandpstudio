import Image from "next/image";
import React from "react";

function Summary() {
  return (
    <div className="grid grid-cols-2">
      <img
        src="/photo_2024-09-26_15-09-45.jpg"
        className="w-[951.500px] h-[712.500px] object-cover object-bottom rounded-r-xl"
      />
      <div className="pt-[100px]">
        <div className="flex flex-col justify-center font-roboto space-y-5 text-[#8f6f3f] px-[180px]">
          <h2 className="font-bold text-[42px]">Executive Summary </h2>
          <div className="w-[53.594px] h-[4px] bg-[#545454]"></div>
          <p className="">
            T&P Design Studio is dedicated to delivering innovative
            architectural solutions that focus on our clients’ needs while
            promoting sustainability. Our mission is to design spaces that not
            only embody our clients’ visions but also take into account
            environmental considerations and the well-being of the community.
          </p>
          <p>
            As a partnership, we provide a wide array of services, including
            pre-design, design, post-construction, interior design, and
            design-build, specializing in residential, commercial, and corporate
            office projects.
          </p>
          <p>
            Our objectives include ensuring high levels of client satisfaction
            to strengthen our reputation, supporting ongoing professional
            development for our team, and investing in cutting-edge technologies
            such as Building Information Modeling (BIM) and virtual reality.
            Through these efforts, T&P Design Studio aims to foster vibrant,
            resilient communities where individuals can thrive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
