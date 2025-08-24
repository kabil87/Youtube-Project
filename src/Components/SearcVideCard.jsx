
const SearchVideCard = ({ video }) => {
  if (!video) return null;

  const { snippet } = video;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="flex flex-col sm:flex-row items-start w-full max-w-5xl p-2">
      {/* Thumbnail */}
      <div className="w-full sm:w-72 flex-shrink-0">
        <img
          className="rounded-2xl w-full object-cover"
          alt="video"
          src={thumbnails?.high?.url}
        />
      </div>

      {/* Details */}
      <div className="mt-3 sm:mt-0 sm:ml-6 flex-1">
        <h2 className="text-white font-bold pb-2 text-sm sm:text-base md:text-lg">
          {channelTitle}
        </h2>
        <h2 className="text-white line-clamp-2 text-sm sm:text-base md:text-lg">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SearchVideCard;
