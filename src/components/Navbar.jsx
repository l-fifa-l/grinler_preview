// /* eslint-disable @next/next/no-img-element */
// import React from 'react';

// function Navbar() {
//   return (
//     <>
//       <nav className="sticky top-0 z-50 flex justify-around w-full bg-slate-900">
// <img className="w-16 h-16" src="/images/logos/logo.svg" alt="" />

// <h1 className=" hidden md:block my-auto justify-self-center max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-100 md:text-5xl lg:text-6xl lg:max-w-7xl">
//   Grinler
// </h1>

// <div className="my-auto hidden md:block ">
//   <a
//     href="#_"
//     class="hidden md:block relative items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#F02E65]transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
//   >
//     <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#F02E65] group-hover:h-full"></span>
//     <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
//       <svg
//         class="w-5 h-5 text-green-400"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M14 5l7 7m0 0l-7 7m7-7H3"
//         ></path>
//       </svg>
//     </span>
//     <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
//       <svg
//         class="w-5 h-5 text-green-400"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M14 5l7 7m0 0l-7 7m7-7H3"
//         ></path>
//       </svg>
//     </span>
//     <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
//       GET APP
//     </span>
//   </a>
// </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Pacifico } from '@next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const [navbarSize, setNavbarSize] = useState('h-20');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [height, setHeight] = useState(4);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg('bg-orange-400');
        setNavbarSize('h-16');
        setHeight(2);
      } else {
        setNavbarBg('bg-transparent');
        setNavbarSize('h-24');
        setHeight(4);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarBg} ${navbarSize}`}
    >
      <div
        className={`px-4 py-${height} mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8`}
      >
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Grinler"
            title="Grinler"
            className="inline-flex items-center"
          >
            <img className="w-12 h-12" src="/images/logos/logo.svg" alt="" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase pacifico.className">
              Grinler
            </span>
          </Link>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Details
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Download
              </Link>
            </li>
            <img
              className="w-6 h-6 fill-indigo-600"
              src="/images/logos/apple.svg"
              alt=""
            />
            <img
              className="w-6 h-6 text-indigo-600"
              src="/images/logos/android.svg"
              alt=""
            />
            {/* <li>
              <Link
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Download
              </Link>
            </li> */}
            <span className="block lg:ml-3.5">
              <a className="no-underline" href="#your-link">
                <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
              </a>
              <a className="no-underline" href="#your-link">
                <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
              </a>
            </span>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
