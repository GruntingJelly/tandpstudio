import React from "react";

function MarketingStrat() {
  return (
    <div className="w-3/6 mx-auto container py-20 space-y-7 font-roboto">
      <h2 className="font-bold text-[42px] text-[#8f6f3f] text-center">
        Why Choose Us
      </h2>
      {/* <table className="table-auto text-[#8f6f3f] w-full">
        <tbody>
          <tr>
            <td className="uppercase font-semibold mr-5">Specific</td>
            <td className="py-3 px-4 capitalize">
              set the tone. The firm will guarantee responsibility, convey
              priorities, and outline its goals.
            </td>
          </tr>
          <tr>
            <td className="uppercase font-semibold">Measurable</td>
            <td className="py-3 px-4 capitalize">
              Key performance indicators will be used to illustrate achieved
              success.
            </td>
          </tr>
          <tr>
            <td className="uppercase font-semibold">Attainable</td>
            <td className="py-3 px-4">
              The firm will set marketing goals determining whether it can
              actually accomplish what have been and to be set.
            </td>
          </tr>
          <tr>
            <td className="uppercase font-semibold">Realistic</td>
            <td className="py-3 px-4">
              This will provide an opportunity to chat with the team about
              whether the goals are realistic and/or up for challenges if it can
              be done. Realistic
            </td>
          </tr>
          <tr>
            <td className="uppercase font-semibold">Time-bound </td>
            <td className="py-3 px-4">
              Determine whether there are any immediate short-term gains that
              can be made right away. These little triumphs will be our top
              priorities while striving towards longer-term objectives.
            </td>
          </tr>
        </tbody>
      </table> */}

      <div className="grid grid-cols-4 gap-5">
        <div className="flex flex-col items-center text-[#8f6f3f] space-y-5">
          <h4 className="font-semibold text-2xl w-1/2 text-center">
            Innovative Design
          </h4>
          <p className="text-justify font-light">
            We utilize innovative design techniques to develop spaces that are
            both practical and visually appealing.
          </p>
        </div>
        <div className="flex flex-col items-center text-[#8f6f3f] space-y-5">
          <h4 className="font-semibold text-2xl w-1/2 text-center">
            Sustainability Focus
          </h4>
          <p className="text-justify font-light">
            Our dedication to sustainable design reduces environmental impact
            and enhances energy efficiency.
          </p>
        </div>
        <div className="flex flex-col items-center text-[#8f6f3f] space-y-5">
          <h4 className="font-semibold text-2xl text-center">
            Client-Centered Approach
          </h4>
          <p className="text-justify font-light">
            We emphasize teamwork to keep your vision central to every project.
          </p>
        </div>
        <div className="flex flex-col items-center text-[#8f6f3f] space-y-5">
          <h4 className="font-semibold text-2xl w-1/2 text-center">
            Licensed & Insured
          </h4>
          <p className="text-justify font-light">
            We ensure your project is secure and professionally managed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarketingStrat;
