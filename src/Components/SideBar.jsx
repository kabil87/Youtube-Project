import { Settings } from "lucide-react";
import { useSelector } from "react-redux"
import DefauktSideBar from "./DefauktSideBar";


const SideBar = () => {

  const {isMenuOpen} = useSelector((state) => state.app);

  // Early Rendering...
  if(!isMenuOpen) return null;


  return (

    <div className=' shadow-2xl w-36 fixed bg-white'>

      <div className='ml-3 border-b-1'>

        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
          <li>Sports</li>
          <li>Games</li>
          <li>News</li>
          <li>Movies</li>
        </ul>

      </div>

      <div className='mt-3 ml-3 border-b-1'>

        <h1 className='font-bold'>Explore</h1>
        <ul>
          <li>Music</li>
          <li>Shopping</li>
          <li>Live</li>
          <li>Courses</li>
        </ul>

      </div>

      <div className='mt-3 ml-3 border-b-1'>

        <div className="flex">
          <Settings width={20} />
          <h1 className='font-bold pl-2'>Settings</h1>
        </div>
        <ul>
          <li>Repor & History</li>
          <li>Help</li>
          <li>FeedBack</li>
          
        </ul>

      </div>

      <div className='mt-3 ml-3'>

        <p>About</p>
        <p>Contact</p>
        <p>Copyright</p>
        <p>Terms</p>
        <p>Privacy</p>

      </div>
      
    </div>

  )
}

export default SideBar
