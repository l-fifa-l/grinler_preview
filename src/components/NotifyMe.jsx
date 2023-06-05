/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Donation from './Donation';
import { Client } from '@notionhq/client';

function NotifyMe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const notion = new Client({
    auth: 'secret_WHQIHJk0u9FdOBLOBjkErs5HqC3Qe9dYSODwwXKtvU5',
  });

  const databaseId = 'be05bc24853f41008ed8f8849da05e62';

  async function addItem(email) {
    try {
      const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          email: {
            title: [
              {
                text: {
                  content: email,
                },
              },
            ],
          },
        },
      });
      console.log(response);
      console.log('Success! Entry added.');
    } catch (error) {
      console.error(error.body);
    }
  }

  return (
    <>
      <section className="px-2 py-6 flex items-center flex-1">
        <div className="flex flex-col w-full ">
          <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              Coming
            </span>

            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Soon
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
              <img
                className="h-14"
                src="/images/socials/Play Store.svg"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            <input
              id="email"
              type="text"
              value={email}
              onChange={handleChange}
              className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2"
              placeholder="Email Address"
            />

            <button
              onClick={() => addItem(email)}
              className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
            >
              Notify Me
            </button>
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
