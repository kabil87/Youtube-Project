import React, { useEffect, useState } from 'react'
import { YOUTUBE_URL } from '../Utilities/Constants'
import VideoCard from './VideCard';
import { Link } from 'react-router-dom';
import Shimmer from '../Utilities/Shimmer';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_URL)
    const json = await data.json();
    setVideos(json.items);
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="bg-[#0F0F0F] mx-2 md:mx-4 mt-4 md:mt-8 
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 
                    gap-4 md:gap-6">
      
      {videos.length === 0 ? (
        <Shimmer />
      ) : (
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard video={video} />
          </Link>
        ))
      )}
    </div>
  )
}

export default VideoContainer
