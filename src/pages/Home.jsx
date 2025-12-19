// import { LocateIcon, MapPin } from "lucide-react";
import React from "react";
import HomeTemplate from "../components/HomeTemplate";
import FlipClock from "../components/ui/FlipClock";

const Home = () => {
  // const targetDate = "2026-01-01T00:00:00";
  return (
    <>
      <div className="scroll-smooth relative h-[86vh] home flex flex-col md:flex-row py-12 scroll-x-hidden w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950 bg-opacity-30 z-0"></div>

        {/* Content */}
        <div className="relative z-2 flex flex-col items-start px-1 md:px-8 mt-4 justify-center h-full text-white text-2xl md:text-3xl font-bold">
          <div className="flex flex-row items-end gap-4">
            <h1 className="text-one text-shadow-blue-950 font-bold text-5xl md:text-6xl">
              Oct
            </h1>
            <div className="flex flex-col justify-center items-start leading-tight">
              <p className="text-base md:text-lg font-bold">
                22 - 23 | 2026
              </p>
              <p className="text-base md:text-lg font-bold">Singapore | Singapore City </p>
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl my-4 w-full md:w-[90vw]">
          Advanced Pharmaceutical Sciences Forum
          </h1>
          <p className="text-2xl md:text-5xl text-slate-200">
            PHARMATECH-2026
          </p>
          {/* <p className="text-sm md:text-lg font-normal my-4 w-full md:w-1/2">
            There are many variations of passing available but the majority have
            suffered alteration in some from by injected humour.
          </p> */}

          <div className="float-end mt-4">
            <FlipClock />
          </div>
        </div>
        <div className="fixed bottom-6 right-6 space-y-3 z-50">
          {/* Add floating action buttons if needed */}
        </div>
      </div>

      {/* Sections */}
      {/* <AboutUs /> */}
      {/* <PanelMembers /> */}
      {/* <Tracks /> */}
      {/* <Orators /> */}
      {/* <EventSchedule /> */}
      {/* <Venue /> */}
      <HomeTemplate />
      {/* <Partners /> */}
      {/* <FlipClock /> */}
    </>
  );
};

export default Home;
