import React, { useEffect, useState } from 'react'
import { YOUTUBE_URL } from '../Utilities/Constants'
import VideoCard from './VideCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, SetVideos] = useState([]);

  

  const getVideos = async () => {
    
    const data = await fetch(YOUTUBE_URL)
    const json = await data.json();
    
    SetVideos(json.items);
    
  }

  useEffect (()=>{
    getVideos();
  },[])


  return (
    <div className=' mx-4 grid grid-cols-3 gap-5 '>

      {videos.map( videos => <Link to={"/watch?v="+videos.id}> <VideoCard video={videos} /></Link> )}

    </div>
  )
}

export default VideoContainer
    