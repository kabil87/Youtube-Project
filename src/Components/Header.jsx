import { Menu, Mic, Plus, Search, Bell } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utilities/appSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addCache } from '../Utilities/cacheSlice';
import { addSearch } from '../Utilities/searchSlice';

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const inputStore = useSelector((state) => state?.search);
  const dispatch = useDispatch();

  const sideBar = () => {
    dispatch(toggleMenu())
  };

  const getSuggestions = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + inputValue
    );
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(addCache({ [inputValue]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputStore[inputValue]) {
        setSuggestion(inputStore[inputValue]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(addSearch(inputValue));
      setInputValue("");
      setSuggestion("");
    }
  };

  return (
    <div className="flex justify-between items-center md:w-[screen]   h-16 md:h-20 shadow sticky top-0 bg-black px-3 md:px-8 z-50">

      {/* Left: Menu + Logo */}
      <div className="flex gap-3 items-center">
        <div className="cursor-pointer" onClick={sideBar}>
          <Menu color="white" />
        </div>
        {/* Logo only on desktop */}
        <Link to={"/"} className="hidden md:block">
          <img 
            className="w-20 md:w-32 h-10 md:h-16 object-contain" 
            src="https://static.vecteezy.com/system/resources/previews/016/629/896/original/youtube-logo-on-black-background-free-vector.jpg" 
            alt="Logo" 
          />
        </Link>
      </div>

      {/* Middle: Search */}
      <div className="flex flex-1 justify-center mx-2">
        <div className="flex w-full max-w-[12rem] sm:max-w-sm md:max-w-lg lg:max-w-2xl 
                        border border-gray-800 rounded-2xl bg-[#111111] items-center">
          <Search size={18} color="white" className="ml-2" />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="ml-2 py-1 w-full bg-transparent outline-none text-white text-sm md:text-base"
            placeholder="Search"
          />
          {/* Search button only desktop */}
          <div className="hidden md:flex w-12 h-10 items-center justify-center border-l border-gray-700 bg-[#222222] rounded-r-2xl">
            <Search size={20} color="white" />
          </div>
          {/* Mic only desktop */}
          <div className="hidden md:flex ml-2 items-center justify-center">
            <Mic size={20} color="white" />
          </div>
        </div>

        {/* Suggestions dropdown */}
        {suggestion && suggestion.length > 0 && (
          <div className="absolute top-16 md:top-20 left-0 right-0 md:left-auto md:right-auto md:w-[34rem] mx-2 md:mx-0 bg-black rounded-lg z-50">
            {suggestion.map((v) => (
              <Link to={"/search"} key={v}>
                <div
                  onClick={() => {
                    dispatch(addSearch(v));
                    setInputValue("");
                    setSuggestion("");
                  }}
                  className="rounded-lg cursor-pointer hover:bg-gray-600 px-4 py-2 flex items-center gap-3"
                >
                  <Search size={18} color="white" />
                  <span className="text-white text-sm md:text-base">{v}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Right: Create + Bell + Profile */}
      <div className="flex gap-3 items-center">
        {/* Create hidden on mobile */}
        <div className="hidden md:flex border rounded-2xl px-2 py-1 items-center bg-gray-900">
          <Plus width={20} color="white" />
          <span className="ml-2 text-white">Create</span>
        </div>
        {/* Bell only on desktop */}
        <div className="hidden md:block">
          <Bell color="white" />
        </div>
        {/* Profile always visible */}
        <img 
          className="w-8 h-8 rounded-full" 
          src="https://lh3.googleusercontent.com/a/ACg8ocLAHIbS3nF2OnWcO9QntOuOH8kfLZZX4l_1J4JcP9kazPRKNVBc=s346-c-no" 
          alt="profile" 
        />
      </div>
    </div>
  );
};

export default Header;


