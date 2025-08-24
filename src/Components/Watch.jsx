import { Link, useSearchParams } from "react-router-dom";
import CommendsContainer from "./CommendsContainer";
import { useEffect, useState } from "react";
import { YOUTUBE_KEY, YOUTUBE_URL } from "../Utilities/Constants";
import WatcVideCrad from "./WatcVideCrad";
import ChannelProfile from "./ChannelProfile";
import Shimmer from "../Utilities/Shimmer";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [channelId, setChannelId] = useState(null);
  const [videos, setVideos] = useState([]);
  const [url, setUrl] = useState(null);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_URL);
    const json = await data.json();
    setVideos(json?.items || []);
  };

  const getId = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get(
        "v"
      )}&key=${YOUTUBE_KEY}`
    );
    const json = await data.json();
    setChannelId(json?.items?.[0]?.snippet?.channelId || null);
  };

  const getProfile = async (id) => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${YOUTUBE_KEY}`
    );
    const json = await data.json();
    setUrl(json?.items?.[0] || null);
  };

  useEffect(() => {
    getVideos();
    getId();
  }, [searchParams]);

  useEffect(() => {
    if (channelId) {
      getProfile(channelId);
    }
  }, [channelId]);

  if (!url) return <Shimmer />;

  return (
    <div className="flex flex-col lg:flex-row  bg-black min-h-screen">
      {/* Left side: Video + Profile + Comments */}
      <div className="flex-1 px-2 sm:px-4 lg:px-8">
        <div className="w-full flex justify-center mt-4">
          <iframe
            className="rounded-2xl w-full sm:w-[600px] h-[200px] sm:h-[345px] lg:h-[400px]"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Channel Profile */}
        <div className="mt-4">
          {url && <ChannelProfile id={url} />}
        </div>

        {/* Comments */}
        <div className="mt-6">
          <CommendsContainer id={searchParams.get("v")} />
        </div>
      </div>

      {/* Right side: Suggested videos */}
      <div className="w-full lg:w-[28rem] px-2 sm:px-4 pt-4 lg:pt-8">
        {videos.map((video, i) => (
          <Link key={i} to={"/watch?v=" + video.id}>
            <WatcVideCrad video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Watch;
