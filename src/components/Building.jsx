/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Building() {
  return (
    <section className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
          Creating Most Enjoyable Social Networking App
        </h1>
        <p className="mt-6 text-gray-700">
          Grinler, From India for the World With Love
        </p>
        <div className="flex space-x-3 px-5 py-2 mt-6 text-sm font-medium justify-center text-white capitalize rounded-lg focus:outline-none">
          <img
            className="w-12"
            src="https://media.tenor.com/RO4xfVyooqQAAAAi/cute.gif"
            alt=""
          />
          <img
            className="w-12"
            src="https://media.tenor.com/RO4xfVyooqQAAAAi/cute.gif"
            alt=""
          />
          <img
            className="w-12"
            src="https://media.tenor.com/RO4xfVyooqQAAAAi/cute.gif"
            alt=""
          />
          <img
            className="w-12"
            src="https://media.tenor.com/RO4xfVyooqQAAAAi/cute.gif"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <img
          className="object-cover w-full h-96 rounded-xl lg:w-4/5"
          src="https://c4.wallpaperflare.com/wallpaper/93/1011/624/humor-parody-artwork-wanna-fight-wallpaper-preview.jpg"
        />
      </div>
    </section>
  );
}

export default Building;
