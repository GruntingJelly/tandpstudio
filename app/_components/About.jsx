import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="w-3/6 mx-auto container pt-[120px] pb-[15px]">
      <div className="grid grid-cols-2 gap-x-4">
        <div className="grid grid-rows-2 place-items-center font-roboto font-semibold text-[#8f6f3f] gap-y-4">
          <div className="space-y-3 bg-[#deddd8] flex flex-col items-center w-full py-2 rounded-xl">
            <Image
              src="/photo_2024-09-26_15-00-42.jpg"
              className="rounded-full"
              width={180}
              height={180}
            />
            <p className="text-center uppercase">Julian Rose Tolentino</p>
          </div>
          <div className="space-y-3 bg-[#deddd8] flex flex-col items-center w-full py-2 rounded-xl">
            <Image
              src="/photo_2024-09-26_15-00-26.jpg"
              className="rounded-full"
              width={180}
              height={180}
            />
            <p className="text-center uppercase">Kathleen Paneda</p>
          </div>
        </div>
        <div className="flex flex-col justify-center font-roboto space-y-5 text-[#8f6f3f] px-9">
          <h2 className="font-bold text-[42px]">Business Structure </h2>
          <div className="w-[53.594px] h-[4px] bg-[#545454]"></div>
          <p>
            T&P Design Studio (Tolentino and Paneda) is an innovative
            architectural firm established by partners Julian Rose Tolentino and
            Kathleen Paneda. Driven by a mutual passion for design, we focus on
            turning concepts into sustainable and practical architectural
            solutions. Our methodology emphasizes collaboration with clients
            throughout the design journey, ensuring their visions are realized
            while also taking into account the environmental and community
            implications of our work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
