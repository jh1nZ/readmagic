import React from "react";

function Hero() {
  return (
    <div className="h-96 m-20 mb-5 pt-10 bg-hero-pattern bg-cover font-nerko">
      <div className="m-5 p-10 pt-5 mx-auto ">
        <h2 class="text-5xl font-extrabold text-white">The lonely fox</h2>
        <p class="my-4 text-2xl text-white">
        A Lonely Fox's Quest for Friendship in the Woods, Inspiring a Forest of Companionship and Joy.
        </p>
        <a
          href="#"
          class="inline-flex items-center text-lg text-white  hover:underline"
        >
          Read More
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Hero;