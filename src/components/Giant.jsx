import React from 'react'
import { Carousel } from "flowbite-react";
function Giant() {
  return (
    <div className="h-screen">
    <div className='h-5/6 m-20 mb-5 pt-10'>
    <Carousel slide={false} className='bg-gray-400 rounded-lg'>
      <img src="/src/assets/giant/1.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/giant/2.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/giant/3.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/giant/4.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/giant/5.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/giant/6.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/giant/7.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/giant/8.png" alt="..." className='object-contain h-5/6'/>
    </Carousel>
    </div>
</div>
  )
}

export default Giant