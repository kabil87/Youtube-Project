import React from "react";
import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal } from "lucide-react";

const ChannelProfile = ({ id }) => {
  if (!id) return null; // prevent error if data not ready

  const { snippet } = id;

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-5 rounded-2xl">
      {/* Channel info */}
      <div className="flex items-center gap-3">
        <img
          className="rounded-full w-10 h-10"
          src={snippet?.thumbnails?.medium?.url}
          alt="logo"
        />
        <h2 className="text-white font-bold">{snippet?.title}</h2>
      </div>

      {/* Actions row */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        {/* Subscribe */}
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-200 text-sm md:text-base">
          Subscribe
        </button>

        {/* Like / Dislike */}
        <div className="flex items-center bg-neutral-800 rounded-full px-3 py-1 text-white">
          <div className="flex items-center gap-1 pr-3 border-r border-gray-600">
            <ThumbsUp size={18} />
            <span className="text-sm">9.3K</span>
          </div>
          <button className="pl-3">
            <ThumbsDown size={18} />
          </button>
        </div>

        {/* Share */}
        <button className="flex items-center gap-1 bg-neutral-800 text-white px-3 py-1 rounded-full hover:bg-neutral-700 text-sm md:text-base">
          <Share2 size={18} />
          <span>Share</span>
        </button>

        {/* More */}
        <button className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 text-white">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChannelProfile;

