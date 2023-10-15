import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="relative bg-white shadow">
      <div className="container px-6 py-3 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#">
                <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
              </a>

              <div className="hidden mx-10 md:block">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>

                  <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative top-0 flex p-0 mt-0 bg-white">
            <div className="flex items-center gap-3">
              <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline" href="#">Discover</a>
              <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline" href="#">Startups</a>
              <Link href="/contribute" className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline">Contribute</Link>
              <button className="p-2 my-2 text-sm leading-5 text-white transition-colors duration-300 transform rounded-md bg-main">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar