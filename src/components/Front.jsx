/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Front() {
  return (
    <section className="w-full">
      {/* <div className="w-full px-10 py-4 mx-auto" contentEditable="true">
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
      </div> */}
      {/* <div className="bg-fixed h-screen w-full bg-[url('/images/background/background.png')]"></div> */}
      <section
        className="bg-fixed bg-no-repeat h-screen
       bg-cover w-full bg-[url('/images/background/background.png')]"
      >
        <div className="mx-auto px-4 py-10 md:py-28 gap-12 text-gray-800 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <a
              href="javascript:void(0)"
              className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
            >
              <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
                Update
              </span>
              <p className="flex items-center">
                Working on Grinler App
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </a>
            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
              Platform designed for meme lovers to create, share, and connect.
            </h1>
            {/* <p>
              Welcome to Grinler, the social media platform built for meme
              lovers like you! With Grinler, you can easily create, share, and
              edit memes, all while engaging with a community of like-minded
              individuals. Join Grinler today and unleash your creativity!
            </p> */}

            <div className="flex items-center gap-x-3 sm:text-sm">
              <a
                href="https://meemit.online/"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                Open Web-App
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <h1 className="text-2xl text-gray-800 font-extrabold sm:text-5xl">
              App Coming Soon on
            </h1>
            <div className="flex space-x-3 py-4">
              <img
                className="h-14"
                src="\images\socials\App Store.svg"
                alt=""
              />
              <img
                className="h-14"
                src="\images\socials\Play Store.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Front;
