import { Download, Home, User2Icon } from 'lucide-react';

const DefauktSideBar = () => {

  return (
    <div className="shadow-2xl w-42 fixed bg-white h-full items-center">

        <div className='ml-10 mt-5'>

        <div className='ml-2'>
            <Home />
            <h6 className='-ml-2'>Home</h6>
        </div>
        

        <div className='w-10 mt-8'>
           <img src="https://i.pinimg.com/736x/a6/e9/32/a6e932111d00d40b9fb129154bdbc616.jpg" />
           <p className='text-xs font-bold'>Shorts</p>
        </div>

        <div className='w-10 mt-8'>
            <img src="https://images.icon-icons.com/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png" />
            <h4 className='-ml-6'>SubsCriptions</h4>
        </div>

        <div className='mt-8 ml-2'>
            <User2Icon />
            <h4>You</h4>
        </div>

        <div className='mt-8 ml-2'>
            <Download />  
            <h4 className='-ml-5'>Dwonload</h4>  
        </div>

        </div>
     
    </div>
  )
}

export default DefauktSideBar
