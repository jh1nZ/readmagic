import React from "react";

export default function ShowBook() {
  return (
    <div class="flex items-center justify-center mx-20 font-sand">
      <div class="container mx-auto  p-4">
        <h1 className="text-3xl m-5 font-semibold">Just Added</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {/* <!-- Replace this with your grid items --> */}
          {/* Number 1 */}
          <div class="bg-white rounded-lg border p-4 hover:shadow-xl">
            <a href="#">
              {" "}
              <img
                src="/src/assets/number1.png"
                alt="A Stingy Man"
                class="w-full h-48 rounded-md object-cover"
              />
              <div class="px-1 py-4">
                <div class="font-bold text-xl mb-2">A Stingy Man</div>
                <p class="text-gray-700 text-lg">
                  Selfish Mr. Grimes learns the value of sharing when villagers
                  shower him with kindness, teaching him a lesson.
                </p>
              </div>
            </a>
          </div>

          {/* Number 2 */}
          <div class="bg-white rounded-lg border p-4 hover:shadow-xl">
            <a href="#">
              {" "}
              <img
                src="/src/assets/number2.png"
                alt="A Wonder Girl"
                class="w-full h-48 rounded-md object-cover"
              />
              <div class="px-1 py-4">
                <div class="font-bold text-xl mb-2">A Wonder Girl</div>
                <p class="text-gray-700 text-lg">
                  A witty girl in a village. Challenging gender norms through
                  intelligent competition Become a respected leader
                </p>
              </div>
            </a>
          </div>

          {/* Number 3 */}
          <div class="bg-white rounded-lg border p-4 hover:shadow-xl">
            <a href="#">
              {" "}
              <img
                src="/src/assets/number3.png"
                alt="Princess and Prince"
                class="w-full h-48 rounded-md object-cover"
              />
              <div class="px-1 py-4">
                <div class="font-bold text-xl mb-2">Princess and Prince</div>
                <p class="text-gray-700 text-lg">
                  Princess Lily and Sun Prince Tawan share a magical love,
                  transcending day and night, bringing warmth to the flower
                  field and hearts.
                </p>
              </div>
            </a>
          </div>

          {/* Number 4 */}
          <div class="bg-white rounded-lg border p-4 hover:shadow-xl">
            <a href="#">
              {" "}
              <img
                src="/src/assets/number4.png"
                alt="The Fairy"
                class="w-full h-48 rounded-md object-cover"
              />
              <div class="px-1 py-4">
                <div class="font-bold text-xl mb-2">The Fairy</div>
                <p class="text-gray-700 text-lg">
                  Rebecca's Compassionate Quest to Transform Zephyr from a
                  Mischievous Angel to a Guardian of Prosperity and Joy.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
