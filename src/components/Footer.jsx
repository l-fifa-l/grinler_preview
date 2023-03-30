/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Footer() {
  return (
    <>
      <footer className="bg-white w-full">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <a
            href="#"
            className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-500"
          >
            Grinler
          </a>

          <p className="text-sm text-gray-600">
            © Copyright 2023. All Rights Reserved.
          </p>

          <div className="flex -mx-2">
            <a
              href="https://twitter.com/Grinlerapp"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Twitter"
            >
              <img
                className="w-8"
                src="/images/socials/twitter.svg"
                alt="Twitter Account"
              />
            </a>

            {/* <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <img
                className="w-8"
                src="/images/socials/instagram.svg"
                alt="Instagram Account"
              />
            </a> */}

            <a
              href="https://discord.gg/UE6vw2UpGn"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Discord"
            >
              <img
                className="w-8"
                src="/images/socials/discord.svg"
                alt="Discord account"
              />
            </a>

            <a
              href="www.linkedin.com/in/grinler"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <img
                className="w-8"
                src="/images/socials/linkedin.svg"
                alt="linkedin account"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
