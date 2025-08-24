import React from 'react'

const WatcVideCrad = ({video}) => {

    if(!video) return null;

    const {snippet, statistics} = video;

    const {thumbnails, title, channelTitle} = snippet;


  return (
    <div className="flex items-start w-full max-w-2xl p-2">

  <div className="w-40 flex-shrink-0">
    <img
      className="rounded-2xl w-full"
      alt="video"
      src={thumbnails?.medium?.url}
    />
  </div>

  <div className="ml-5">
    <h2 className="text-xs text-white">{channelTitle}</h2>
    <h2 className="text-xs text-white line-clamp-2">{title}</h2>
    <h4 className="text-white">
      {statistics ? statistics.viewCount : null} Views
    </h4>
  </div>
</div>

  )
}

export default WatcVideCrad
