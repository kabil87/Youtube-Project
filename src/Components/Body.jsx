import MainContainer from "./MainContainer";
import DefauktSideBar from "./DefauktSideBar";

import { YOUTUBE_URL } from "../Utilities/Constants";

const Body = () => {
  return (
    <div className="bg-[#0F0F0F]  min-h-screen">
      <div className="flex flex-col md:flex-row">
        
        {/* Sidebar */}
        <div className="hidden md:block w-60">
          <DefauktSideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-2 md:w-full md:p-4">
          <MainContainer />
        </div>
      </div>
    </div>
  );
};

export default Body;

