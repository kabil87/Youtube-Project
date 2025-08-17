
import { Menu, Mic, Plus, Search,  Bell, User2Icon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utilities/appSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Header = () => {

  const [inputValue, setInputValue] = useState("");
  const [suggestion, setSuggestion] = useState("");
  console.log(suggestion);
  
  const dispatch = useDispatch();

  const sideBar = () => {
    dispatch(toggleMenu()) 
  }

  const getSuggestions = async () => {
    const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+inputValue)
    const json = await data.json();
    setSuggestion(json[1])
    
  }

  useEffect(()=>{

    const timer = setTimeout(() => getSuggestions(),200);

    return () => {
      clearTimeout(timer);
    }

  },[inputValue])

  return (

    <div className=' flex justify-between my  -2 items-center h-14 shadow  sticky top-0 bg-white'>

        <div className='flex gap-4 items-center '>
            <div className='cursor-pointer' onClick={sideBar}>
                <Menu />
            </div>

            <div>
               <Link to={"/"}> <img className='w-32' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="Logo" /></Link>
            </div>
        </div>

    
        <div className='flex'>

        <div className='border-1 rounded-l-2xl flex w-[34rem]'>

          <div className='ml-2 pt-2'>
            <Search size={20} />
          </div>

          <div className=''>

            <div className='  w-98'>
              <input onChange={(e) => setInputValue(e.target.value)} className='ml-2 mt-1 outline-none w-[30rem]' placeholder='Search'></input>
            </div>
            
            <div className='bg-black w-[32rem] fixed mt-4 rounded-lg '>
              {suggestion && suggestion.map((v) =>

              <div className=' rounded-lg mr-6 cursor-default  hover:bg-gray-600 my-1 ml-5 flex items-center gap-5'> 

              <div className=' mb-2 mt-2.5 ml-4'>{<Search size={20} color='white' />} </div> 

              <li className='text-white pt-1.5 list-none pl- 5 mb-2'>{v}</li> 
              
              </div> ) }

            </div>

          </div>

          

        </div>

        <div className='w-10 border-1 rounded-r-2xl    '>
            <div className='ml-1 pt-2'>
              <Search size={20} />
            </div>
        </div>

        <div className='border-1 rounded-full bg-gray-200 ml-3 items-center'>
          <div className='p-2'>
            <Mic size={20} />
          </div>
        </div>

        </div>

   

        <div className='flex gap-3 mr-3 items-center'>

          <div className='border-1 rounded-2xl flex p-1 px-2 items-center bg-gray-100 mr-4'>
            <Plus width={20} />
            <div className='ml-2'>Crerate</div>
          </div>

          <div className='mr-3'>
           <Bell />
          </div>

          <div>
            <User2Icon />
          </div>

        </div>



      
    </div>
  )
}

export default Header
