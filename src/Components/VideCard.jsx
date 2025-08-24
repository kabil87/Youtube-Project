

const VideoCard = ({video}) => {

    if(!video) return null;

    const {snippet, statistics} = video;

    const {thumbnails, title, channelTitle} = snippet;


    

 return (  
    <div className="">
     
     <div>
       <img className="rounded-2xl" alt="video" src={thumbnails?.medium?.url} />
     </div>

     <div className="w-83">

      <h2 className="text-white">{channelTitle}</h2>
      <h2 className=" break-words text-white">{title}</h2>
     
      <h4 className=" break-words text-white">{statistics ? statistics.viewCount : null}Views</h4>

     </div>

      

    </div>
  )
}

export default VideoCard
