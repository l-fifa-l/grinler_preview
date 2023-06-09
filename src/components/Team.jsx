/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function Team() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our <span className="text-blue-500">Founding Team</span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Enthusiastic team passionate about building digital products,
          passionate about memes, and dedicated to making a positive impact on
          the world.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <Link
            className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
            href={'https://viv1.vercel.app/'}
            target="_blank"
          >
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="https://avatars.githubusercontent.com/u/41392917"
                alt="Vivek Kumar Photo"
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                  Vivek Kumar
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Lead Developer
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              A visionary and creative thinker with a passion for memes. On a
              mission to build a social platform where people can express
              themselves using humor, connecting with others who share their
              sense of wit and satire. Get ready to join Vivek Kumar on their
              quest to revolutionize the world of social media with the power of
              memes!
            </p>
          </Link>

          <Link
            href={'https://gdg.community.dev/u/mjd9x3/'}
            target="_blank"
            className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
          >
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="https://i.ibb.co/hW9x1Lk/Whats-App-Image-2023-03-30-at-10-14-42-PM.jpg"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                  Ankit Verma
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Head of sales
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              A passionate community builder. He&apos;s spreading the idea of
              memes as a powerful tool for building connections and community,
              helping businesses drive engagement and connect with audiences
              through humor.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Team;
