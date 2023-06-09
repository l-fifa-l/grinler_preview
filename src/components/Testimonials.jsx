/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Testimonials() {
  return (
    <section className="flex items-center justify-center py-20 bg-white min-w-screen tails-selected-element">
      <div className="px-16 bg-white">
        <div className="container flex flex-col items-start mx-auto lg:items-center">
          <p
            className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center"
            data-primary="purple-500"
          >
            Don't just take our word for it
          </p>

          <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            See what others are saying
          </h2>
          <div
            className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"
            data-primary="purple-600"
          ></div>

          <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
            <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQEcOYO0i55Xug/profile-displayphoto-shrink_100_100/0/1683920700253?e=1691625600&v=beta&t=Q-K4vmphVM1EKoJ81AucXw7JlSq1fKrE4LHXqZ9tr-0"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800">
                    Ved Prakash Panday
                  </h4>
                  <p className="text-gray-600">PM @ Mindtickle</p>
                </div>
              </div>
              <blockquote className="mt-8 text-lg text-gray-500">
                I had a lot of fun using the Remix feature on Grinler! It's
                great to see how my memes can inspire others to create their own
                funny versions. I love the sense of community that Grinler
                provides for meme creators.
              </blockquote>
            </div>
            <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <img
                    src="https://media.licdn.com/dms/image/C5103AQFswY3f_YpyHA/profile-displayphoto-shrink_400_400/0/1558371062184?e=1691625600&v=beta&t=7ChKZJIDI72KV70HdfDRVXBc82qRZg1Z6X4mA-eZcss"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800">Mahaveer Muttha</h4>
                  <p className="text-gray-600">
                    Director Of IT @ Birdvision Consulting
                  </p>
                </div>
              </div>
              <blockquote className="mt-8 text-lg text-gray-500">
                The Remix feature on Grinler is a game-changer for meme
                creation. It makes it so easy to collaborate with others and see
                how your ideas can inspire new content. I can't wait to see what
                other features Grinler has in store!
              </blockquote>
            </div>
            <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQHOTi0-geKYHg/profile-displayphoto-shrink_400_400/0/1680840790426?e=1691625600&v=beta&t=YRXhoD-FK49mMdXsP4K5Tb01cNDHNA5Oq37Z89P0MwU"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800">Anubhav Singh</h4>
                  <p className="text-gray-600">Co-founder - Dynopii</p>
                </div>
              </div>
              <blockquote className="mt-8 text-lg text-gray-500">
                I was impressed with how user-friendly the Remix feature on
                Grinler was. It only took me a few minutes to create my own
                version of a meme and share it with my friends. I can definitely
                see myself using Grinler for all my meme creation needs.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
