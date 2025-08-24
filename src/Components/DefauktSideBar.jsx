import { Download, Home, User, PlaySquare, Clapperboard } from "lucide-react";

const DefaultSideBar = () => {
  return (
    <div className="shadow-2xl w-24 fixed bg-[#0F0F0F] h-full flex-col items-center py-6 hidden md:flex">
      {/* Home */}
      <div className="flex flex-col items-center cursor-pointer hover:bg-neutral-800 p-3 rounded-xl w-full">
        <Home color="white" />
        <span className="text-xs text-white mt-1">Home</span>
      </div>

      {/* Shorts */}
      <div className="flex flex-col items-center cursor-pointer hover:bg-neutral-800 p-3 rounded-xl w-full mt-6">
        <Clapperboard color="white" />
        <span className="text-xs text-white mt-1">Shorts</span>
      </div>

      {/* Subscriptions */}
      <div className="flex flex-col items-center cursor-pointer hover:bg-neutral-800 p-3 rounded-xl w-full mt-6">
        <PlaySquare color="white" />
        <span className="text-xs text-white mt-1">Subscriptions</span>
      </div>

      {/* You */}
      <div className="flex flex-col items-center cursor-pointer hover:bg-neutral-800 p-3 rounded-xl w-full mt-6">
        <User color="white" />
        <span className="text-xs text-white mt-1">You</span>
      </div>

      {/* Downloads */}
      <div className="flex flex-col items-center cursor-pointer hover:bg-neutral-800 p-3 rounded-xl w-full mt-6">
        <Download color="white" />
        <span className="text-xs text-white mt-1">Downloads</span>
      </div>
    </div>
  );
};

export default DefaultSideBar;

