import React, { useState } from 'react';
import { Client } from '@notionhq/client';

function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  async function addItem(email) {
    try {
      const response = await fetch('/api/notion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(false);
      }
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  }

  return (
    <div className="mt-6">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex bg-white rounded-lg p-1 sm:max-w-md"
      >
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="text-gray-600 w-full p-2 outline-none"
        />
        <button
          onClick={() => addItem(email)}
          className="p-2 px-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
        >
          Subscribe
        </button>
      </form>
      {submitted ? (
        <p className="text-center mt-3 max-w-lg text-xl text-blue-400 sm:mx-auto">
          We&apos;ll email you when we launch. Thank You !!
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Waitlist;
