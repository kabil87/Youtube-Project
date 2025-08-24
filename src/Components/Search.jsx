import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { YOUTUBE_KEY } from "../Utilities/Constants";
import { Link } from "react-router-dom";
import SearchVideCard from "./SearcVideCard";
import Shimmer from "../Utilities/Shimmer";

const Search = () => {
  const [movie, setMovie] = useState();
  const inputdata = useSelector((state) => state?.searchResults?.searchItem)

  const searchResults = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputdata}&key=${YOUTUBE_KEY}`
    );
    const json = await data.json();
    setMovie(json.items);
  };

  useEffect(() => {
    searchResults();
  }, []);

  if (!movie) return <Shimmer />;

  return (
    <div className="bg-[#0F0F0F] min-h-screen px-2 sm:px-4 md:px-10 pt-3 md:pt-6">
      <div className="flex flex-col gap-3 md:gap-5">
        {movie?.map((videos) => (
          <Link key={videos?.id?.videoId} to={"/watch?v=" + videos?.id?.videoId}>
            <SearchVideCard video={videos} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;

