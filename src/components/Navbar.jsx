/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="grid grid-cols-3 px-8 py-8">
        <img className="w-16 h-16" src="/images/logos/logo.svg" alt="" />

        <h1 className="my-auto justify-self-center max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-800 md:text-5xl lg:text-6xl lg:max-w-7xl">
          Grinler
        </h1>
      </nav>
    </>
  );
}

export default Navbar;
