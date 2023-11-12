import React from 'react'
import { Carousel } from "flowbite-react";
function Curiosmaan() {
  return (
    <div className="h-screen">
    <div className='h-5/6 m-20 mb-5 pt-10'>
    <Carousel slide={false} className='bg-gray-400 rounded-lg'>
      <img src="/src/assets/curios/1.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/curios/2.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/curios/3.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/curios/4.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/curios/5.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/curios/6.png" alt="..." className='object-contain h-5/6'/>
      <img src="/src/assets/curios/7.png" alt="..." className='object-contain h-5/6'/>
    </Carousel>
    </div>
</div>
  )
}

export default Curiosmaan