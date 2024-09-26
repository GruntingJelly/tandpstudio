import React from "react";

function VissMiss() {
  return (
    <div className="bg-gray-700/10 my-10">
      <div className="w-5/6 mx-auto container py-[60px] grid grid-cols-2 place-items-center font-roboto gap-x-20 text-[#8f6f3f]">
        <div className="">
          <h5 className="uppercase text-center text-3xl mb-5 font-medium ">
            mission
          </h5>
          <p className="text-justify">
            To provide innovative architectural solutions that prioritize our
            clients’ needs, promote sustainability, and enrich the communities
            we work in. We strive to design spaces that embody our clients’
            aspirations while being mindful of environmental considerations and
            the well-being of the community.
          </p>
        </div>
        <div className="">
          <h5 className="uppercase text-center text-3xl mb-5 font-medium text-[#8f6f3f]">
            Vision
          </h5>
          <p className="text-justify">
            To be a leading architectural firm recognized for our innovative
            designs that harmonize client aspirations with sustainable
            practices, creating vibrant, resilient communities where people
            thrive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VissMiss;
