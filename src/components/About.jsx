/* eslint-disable @next/next/no-img-element */
import React from 'react';

function About() {
  return (
    <section className="bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-white">
          What is Grinler About
        </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="grid grid-cols-1 lg:w-1/2 gap-8 xl:gap-16">
            <div className="space-y-3">
              <div className="flex flex-col items-center w-2xl mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path
                      fill="currentColor"
                      d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                    ></path>
                  </svg>
                  <p className="px-6 py-1 lg:text-3xl text-lg italic text-white">
                    Grinler addresses the issues of limited expression and
                    lengthy meme creation processes by providing a user-friendly
                    platform for easy and efficient meme collaboration. It also
                    centralizes meme creation, allowing users to easily share
                    their creations across different apps. Grinler also aims to
                    bring new opportunities for revenue through premium features
                    and merchandise, as well as advertising. Overall, it aims to
                    empower users to express themselves creatively and
                    humorously, and to bring new energy to the global meme
                    industry.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                  >
                    <path
                      fill="currentColor"
                      d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                    ></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem]"
              src="https://media.tenor.com/YecgCBvBkKEAAAAj/cool-yeah-cute.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
