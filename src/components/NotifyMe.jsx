/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Donation from './Donation';
import { Client } from '@notionhq/client';
import Waitlist from './Waitlist';
import Link from 'next/link';

function NotifyMe() {
  return (
    <>
      <section className="px-2 py-6 flex items-center flex-1">
        <div className="flex flex-col w-full ">
          <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              Available on{' '}
            </span>

            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Play store
            </span>
          </h1>

          <div className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 md:text-xl">
            App will Soon be Available on
            <div className="flex space-x-3 py-4">
              <img
                className="h-14"
                src="/images/socials/App Store.svg"
                alt=""
              />
              <Link href="https://play.google.com/store/apps/details?id=com.grinler.app">
                <img
                  className="h-14"
                  src="/images/socials/Play Store.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <Waitlist />
          </div>

          <p className="mt-8 text-center text-gray-700 text-md md:text-xl">
            Notify me when App is launched :)
          </p>
        </div>
      </section>
      <Donation />
    </>
  );
}

export default NotifyMe;
