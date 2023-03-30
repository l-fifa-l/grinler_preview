/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Expriences() {
  return (
    <section
      className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32 tails-selected-element"
      contenteditable="true"
    >
      <div className="relative max-w-3xl text-center text-white auto lg:px-0">
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex justify-between">
            <h1 className="relative m-auto flex flex-col text-6xl font-extrabold text-left text-black">
              Crafting
              <span>Powerful</span>
              <span>Experiences</span>
            </h1>
          </div>

          <div className=" flex justify-items-center relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
            <img
              src="https://cdn.devdojo.com/images/december2020/designs3d.png"
              className="object-cover mt-3 mr-5 h-80 lg:h-96"
            />
          </div>
        </div>

        <div className="my-16 border-b border-gray-300 lg:my-24"></div>

        <h2 className="text-left p-4 text-gray-700 xl:text-xl">
          {`Grinler provides a user-friendly platform for efficient meme creation and collaboration, centralizing the process. Empowering creative and humorous expression.`}
        </h2>
      </div>
    </section>
  );
}

export default Expriences;
