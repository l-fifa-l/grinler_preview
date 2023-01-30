/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Front() {
  return (
    <section className="w-full">
      <div className="w-full px-10 py-4 mx-auto">
        <div className="w-full mx-auto text-left md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
            <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
              Powering Humor And Creativity
            </span>
          </h1>
          <img
            className="flex mx-auto py-4"
            src=" https://media1.giphy.com/media/977YesTjNfQC7vQiph/giphy.gif"
            alt=""
          />
          <h1 className="mb-6 text-4xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
            <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
              Through Meme Collaboration
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Front;
