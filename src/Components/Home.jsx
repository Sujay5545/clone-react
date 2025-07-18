import React from 'react';
import { Link } from 'react-router-dom';
import BG from './BG.jpg';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
      <aside className="relative overflow-hidden text-white rounded-3xl bg-gradient-to-br from-orange-500 to-orange-700 shadow-xl mt-12">
        <div className="relative z-10 px-4 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Empower Your Coding Journey
            <span className="block text-xl sm:text-2xl font-medium mt-2">
              Explore Codeforces profiles instantly
            </span>
          </h1>
          <Link
            className="inline-flex items-center px-8 py-3 font-semibold bg-white text-orange-700 rounded-full shadow-md hover:bg-gray-100 transition"
            to="/"
          >
            <svg
              fill="currentColor"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            Get Started
          </Link>
        </div>

        <div className="absolute inset-0 flex justify-center items-center gap-8 opacity-30">
          <img className="w-72 sm:w-96 rounded-xl shadow-lg" src={BG} alt="background" />
          <img className="w-40 sm:w-56 rounded-xl shadow-lg" src={BG} alt="background2" />
        </div>
      </aside>

      <div className="grid place-items-center mt-24">
        <img className="sm:w-96 w-52 rounded-xl shadow-lg" src={BG} alt="main-display" />
      </div>

      <h2 className="text-center text-3xl sm:text-5xl font-bold py-12">
        Discover, Explore & Grow
      </h2>
    </div>
  );
}
