import { useSearchParams } from "react-router-dom";


const Watch = () => {

    const [searchParams] = useSearchParams();

    console.log(searchParams.get("v"));
    


  return (
    <div className="mt-10 ml-20">

        <iframe width="650" height="315" src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
      
    </div>
  )
}

export default Watch
