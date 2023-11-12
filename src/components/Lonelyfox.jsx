import React from "react";
import { Carousel } from "flowbite-react";
function Lonelyfox() {
  return (
    <div className="h-screen">
      <div className="h-5/6 m-20 mb-5 pt-10">
        <Carousel slide={false} className="bg-gray-400 rounded-lg">
          <img
            src="/src/assets/lonelyfox/1.jpg"
            alt="..."
            className="object-contain h-5/6"
          />
          <img
            src="/src/assets/lonelyfox/2.jpg"
            alt="..."
            className="object-contain h-5/6"
          />
          <img
            src="/src/assets/lonelyfox/3.jpg"
            alt="..."
            className="object-contain h-5/6"
          />
          <img
            src="/src/assets/lonelyfox/4.jpg"
            alt="..."
            className="object-contain h-5/6"
          />
          <img
            src="/src/assets/lonelyfox/5.jpg"
            alt="..."
            className="object-contain h-5/6"
          />
          <img
            src="/src/assets/lonelyfox/6.jpg"
            alt="..."
            className="object-contain h-5/6"
          />
          <img
            src="/src/assets/lonelyfox/7.jpg"
            alt="..."
            className="object-contain h-5/6"
          />
          <img
            src="/src/assets/lonelyfox/8.jpg"
            alt="..."
            className="object-contain h-5/6"
          />
          <img
            src="/src/assets/lonelyfox/9.jpg"
            alt="..."
            className="object-contain h-5/6"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Lonelyfox;
