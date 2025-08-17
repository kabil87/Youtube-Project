import React from 'react'
import Button from './Button'


const Buttons = () => {

  let buttons = ["All","Mixes","Musics","Live","Podcasts","Programming","Java","AI","React","Hiking","Games","News",""]


  return (

    <div className='flex gap-8  mt-1 mb-2 ml-4 items-center'>

      {buttons.map((v) => <Button key={v} value={v} />)}
      
    </div>
  )
}

export default Buttons
