import React from 'react'
import { Carousel } from "flowbite-react";
function Foxwgrapes() {
  return (
    <div className="h-screen">
    <div className='h-5/6 m-20 mb-5 pt-10'>
    <Carousel slide={false} className='bg-gray-400 rounded-lg'>
      <img src="/src/assets/grapes/1.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/grapes/2.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/grapes/3.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/grapes/4.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/grapes/5.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/grapes/6.png" alt="..." className='object-contain h-5/6'/>

    </Carousel>
    </div>
</div>
  )
}

export default Foxwgrapes