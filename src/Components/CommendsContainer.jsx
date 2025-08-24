import { useEffect, useState } from "react";
import Comment from "./Comment";
import { YOUTUBE_KEY } from "../Utilities/Constants";


const CommendsContainer = ({id}) => {

      const [comments, setComments] = useState("");

    
      const getComments = async ()=> {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&maxResults=100&key=`+YOUTUBE_KEY);
        const json = await data.json();
       // console.log(json.items[0].snippet.topLevelComment.snippet.textOriginal);
        setComments(json.items)
        
      }

 useEffect(()=>{
      
          getComments();
      
        },[])


  return (

    <div>
      <h1 className="text-white text-2xl font-bold ml-4 pb-5">Comments</h1>
        {comments && comments?.map((c,i) =>   <Comment key={i} comment={c} />)}

    </div>
  )
}

export default CommendsContainer;



