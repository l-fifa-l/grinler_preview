/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Footer() {
  return (
    <>
      <footer class="bg-white">
        <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <a
            href="#"
            class="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-500"
          >
            Grinler
          </a>

          <p class="text-sm text-gray-600">
            © Copyright 2023. All Rights Reserved.
          </p>

          <div class="flex -mx-2">
            <a
              href="#"
              class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              <img
                className="w-8"
                src="/images/socials/twitter.svg"
                alt="Twitter Account"
              />
            </a>

            <a
              href="#"
              class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <img
                className="w-8"
                src="/images/socials/instagram.svg"
                alt="Instagram Account"
              />
            </a>

            <a
              href="#"
              class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Github"
            >
              <img
                className="w-8"
                src="/images/socials/Discord.svg"
                alt="Discord account"
              />
            </a>

            <a
              href="#"
              class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Github"
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
