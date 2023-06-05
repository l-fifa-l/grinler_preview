/* eslint-disable @next/next/no-img-element */

import React from 'react';

function Front() {
  return (
    <div className="flex flex-col justify-evenly ju max-w-screen px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen bg-gradient-to-b from-orange-400 via-orange-200 to-white">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg">
        <div className="max-w-xl mb-3 space-y-8">
          <div>
            <div className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white">
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
            </div>
          </div>

          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Platform designed for <br className="hidden md:block" />
            meme lovers.{' '}
            <span className="inline-block text-deep-purple-accent-400">
              Show your funny side
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Powering humor and creativity through meme collaboration laugh
            ,create, share, and connect.
          </p>
          <h1 className="text-5xl font-extrabold lg:text-7xl 2xl:text-5xl">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              Coming
            </span>

            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Soon
            </span>
          </h1>
          <div className="flex items-center">
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
      </div>
      <div className="pt-7">
        <img
          src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
          className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
          alt=""
        />
      </div>
    </div>
  );
}

export default Front;
