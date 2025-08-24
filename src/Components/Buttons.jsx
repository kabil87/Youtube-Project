import React, { useState } from 'react'
import Button from './Button'

const Buttons = () => {
  let buttons = [
    "All",
    "Mixes",
    "Music",
    "Live",
    "Podcasts",
    "Programming",
    "Java",
    "AI",
    "React",
    "Hiking",
    "Games",
    "News",
    "Travel"
  ];

  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible scrollbar-hide mt-2 mb-2 ml-2 sm:ml-4 items-center">

      {buttons.map((v) => (
        <button
          key={v}
          onClick={() => setActive(v)}
          className={`px-4 py-1 rounded-lg text-sm font-medium whitespace-nowrap
            ${
              active === v
                ? "bg-white text-black"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
        >
          {v}
        </button>
      ))}
    </div>
  )
}

export default Buttons
