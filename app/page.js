import Image from "next/image";
import Contact from "@components/Contact";
import About from "@components/About";
import Summary from "@components/Summary";
import VissMiss from "./_components/VissMiss";
import Goals from "@components/Goals";
import Sdescription from "@components/Sdescription";
import MarketingStrat from "@components/MarketingStrat";

export default function Home() {
  return (
    <>
      <Contact />
      <About />
      <VissMiss />
      <Summary />
      <Goals />
      <div className="w-4/6 mx-auto container h-1 rounded-full bg-[#8f6f3f]"></div>
      <Sdescription />
      <div className="w-4/6 mx-auto container h-1 rounded-full bg-[#8f6f3f]"></div>
      <MarketingStrat />
    </>
  );
}
