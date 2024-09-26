import React from "react";

function MarketingStrat() {
  return (
    <div className="w-3/6 mx-auto container py-20 space-y-7 font-roboto">
      <h2 className="font-bold text-[42px] text-[#8f6f3f] text-center">
        S.M.A.R.T MARKETING STRATEGY
      </h2>
      <table className="table-auto text-[#8f6f3f] w-full">
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
      </table>
    </div>
  );
}

export default MarketingStrat;
