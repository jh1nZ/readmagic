import React from 'react'
import { Carousel } from "flowbite-react";
function Magickingdom() {
  return (
    <div className="h-screen">
    <div className='h-5/6 m-20 mb-5 pt-10'>
    <Carousel slide={false} className='bg-gray-400 rounded-lg'>
      <img src="/src/assets/kingdom/1.jpg" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/kingdom/2.jpg" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/kingdom/3.jpg" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/kingdom/4.jpg" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/kingdom/5.jpg" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/kingdom/6.jpg" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/kingdom/7.jpg" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/kingdom/8.jpg" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/kingdom/9.jpg" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/kingdom/10.jpg" alt="..." className='object-contain h-5/6'/>
    </Carousel>
    </div>
</div>
  )
}

export default Magickingdom