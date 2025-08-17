

const VideoCard = ({video}) => {

    if(!video) return null;

    const {snippet, statistics} = video;

    const {thumbnails, title, channelTitle} = snippet;


    

 return (  
    <div className="">
     
     <div>
       <img alt="video" src={thumbnails?.medium?.url} />
     </div>

      <h2>{channelTitle}</h2>
      <h2 className=" break-words">{title}</h2>
     
      <h4 className=" break-words">{statistics.viewCount}Views</h4>
    </div>
  )
}

export default VideoCard
