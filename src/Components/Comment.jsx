import React from 'react'

const Comment = ({ comment }) => {
  return (
    <div className="flex space-x-4 p-2">
   
      {/* Avatar */}
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt="logo"
      />

      {/* Comment body */}
      <div>
        <h5 className="text-white font-semibold">
          {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </h5>
        <p className="text-sm text-white">
          {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
        </p>
        <span className="text-gray-400 text-xs">
          👍 {comment?.snippet?.topLevelComment?.snippet?.likeCount}
        </span>
      </div>
    </div>
  )
}

export default Comment
 