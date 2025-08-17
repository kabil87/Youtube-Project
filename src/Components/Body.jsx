import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux';
import DefauktSideBar from './DefauktSideBar';

const Body = () => {
  // {isMenuOpen ? <SideBar /> : <DefauktSideBar />}
  
  const {isMenuOpen} = useSelector((state) => state.app);

  return (
    <div className='flex w-full'>

      {isMenuOpen ? <SideBar /> : <DefauktSideBar />}
      <MainContainer />

    </div>
  )
}

export default Body
