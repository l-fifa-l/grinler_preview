/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Front from './Front';
import Building from './Building';
import About from './About';
import Features from './Features';
import Testimonials from './Testimonials';
import Team from './Team';
import NotifyMe from './NotifyMe';
import Expriences from './Expriences';

function Contents() {
  return (
    <>
      <main className=" min-w-full grid grid-cols-1 justify-items-center">
        <Front />
        <Building />
        <About />
        {/* <Expriences /> */}
        <Features />
        <Testimonials />
        {/* <Team /> */}
        <NotifyMe />
      </main>
    </>
  );
}

export default Contents;
