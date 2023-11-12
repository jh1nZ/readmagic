import React from 'react'
import { Carousel } from "flowbite-react";
function Fairy() {
  return (
    <div className="h-screen">
    <div className='h-5/6 m-20 mb-5 pt-10'>
    <Carousel slide={false} className='bg-gray-400 rounded-lg'>
      <img src="/src/assets/fairy/1.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/2.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/3.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/4.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/5.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/6.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/7.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/8.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/9.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/10.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/11.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/12.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/fairy/13.png" alt="..." className='object-contain h-5/6'/>
    </Carousel>
    </div>
</div>
  )
}

export default Fairy