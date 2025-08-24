import React from 'react'
import Buttons from './Buttons'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen 
                    ml-0 md:ml-32 px-2 md:px-6">

      {/* Buttons Section */}
      <div className="mt-4 md:w-full md:mt-6">
        <Buttons />
      </div>

      {/* Videos Section */}
      <div className="mt-2 md:mt-4">
        <VideoContainer />
      </div>
    </div>
  )
}

export default MainContainer
