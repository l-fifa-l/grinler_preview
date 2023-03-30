/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-around w-full bg-slate-900">
        <img className="w-16 h-16" src="/images/logos/logo.svg" alt="" />

        <h1 className=" hidden md:block my-auto justify-self-center max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-100 md:text-5xl lg:text-6xl lg:max-w-7xl">
          Grinler
        </h1>

        <div className="my-auto hidden md:block ">
          <a
            href="#_"
            class="hidden md:block relative items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#F02E65]transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#F02E65] group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              GET APP
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
