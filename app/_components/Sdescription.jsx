import React from "react";

function Sdescription() {
  return (
    <div className="w-3/6 mx-auto container py-20 space-y-7 font-roboto">
      <h2 className="font-bold text-[42px] text-[#8f6f3f] text-center">
        Service Description
      </h2>
      <div className="grid grid-cols-2 gap-x-9 text-[#8f6f3f]">
        <div className="space-y-4">
          <h3 className="font-bold uppercase text-center">
            professional architectural services
          </h3>
          <div className="grid grid-cols-2 place-items-center text-sm">
            <ul className="list-disc space-y-2">
              <li className="uppercase">design services</li>
              <li className="uppercase">Documentation</li>
              <li className="uppercase">Project Management</li>
              <li className="uppercase">Consultation Services</li>
            </ul>
            <ul className="list-disc space-y-2">
              <li className="uppercase">sustainability services</li>
              <li className="uppercase">interior design</li>
              <li className="uppercase">landscape architecture</li>
              <li className="uppercase">post-construction services</li>
              <li className="uppercase">specialized services</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold uppercase text-center">
            t&p design studio specializes on building with the following use and
            occupancies
          </h3>
          <div className="grid grid-cols-2 place-items-center text-sm">
            <ul className="list-disc space-y-2">
              <li className="uppercase">residential</li>
              <li className="uppercase">commercial</li>
            </ul>
            <ul className="list-disc space-y-2">
              <li className="uppercase">hospital facilities</li>
              <li className="uppercase">corporate offices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sdescription;
