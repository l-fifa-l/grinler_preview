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
import Support from './Support';

function Contents() {
  return (
    <>
      <div id="home">
        <Front />
        <Support />
        <Building />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="details">
        <About />
        <Expriences />
        <Testimonials />
      </div>
      <div id="aboutus">
        <Team />
      </div>
      <div id="download">
        <NotifyMe />
      </div>
    </>
  );
}

export default Contents;
