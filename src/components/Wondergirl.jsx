import React from 'react'
import { Carousel } from "flowbite-react";
function Wondergirl() {
  return (
    <div className="h-screen">
    <div className='h-5/6 m-20 mb-5 pt-10'>
    <Carousel slide={false} className='bg-gray-400 rounded-lg'>
      <img src="/src/assets/wondergirl/1.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/wondergirl/2.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/wondergirl/3.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/wondergirl/4.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/wondergirl/5.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/wondergirl/6.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/wondergirl/7.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/wondergirl/8.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/wondergirl/9.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/wondergirl/10.png" alt="..." className='object-contain h-5/6'/>
    </Carousel>
    </div>
</div>
  )
}

export default Wondergirl