// pages/index.js

import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Staging | Paige Etheridge Realty</title>
        <meta
          name="description"
          content="Home staging services by Paige Etheridge Realty in West Michigan"
        />
      </Head>

      <div className="min-h-screen flex flex-col">

        {/* Navigation Bar */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="text-xl font-bold">Paige Etheridge Realty</div>
            <nav className="space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/neighborhood-guide" className="hover:underline">Neighborhood Guide</a>
              <a href="/property-search" className="hover:underline">Property Search</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>

        {/* Condensed Top Banner */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
            <img
              src="https://paigeetheridgerealty.com/wp-content/uploads/2024/03/paige-headshot.jpg"
              alt="Paige Etheridge"
              className="w-40 h-40 rounded-full mb-4 lg:mb-0 lg:mr-6"
            />
            <div>
              <h1 className="text-4xl font-extrabold mb-2">Paige Etheridge</h1>
              <h2 className="text-xl text-gray-600 mb-4">Realtor</h2>
              <p className="mb-4 italic">
                “When you’re ready for the next chapter in your life…”
              </p>
              <a
                href="/schedule-consultation"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Secondary CTA Section */}
        <section className="bg-white py-6">
          <div className="container mx-auto flex flex-wrap justify-center space-x-4 px-6">
            <a
              href="/property-search"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200"
            >
              Property Search
            </a>
            <a
              href="/downloads/buyers-packet.pdf"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200"
            >
              Buyer Guide
            </a>
            <a
              href="/downloads/sellers-packet.pdf"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200"
            >
              Seller Guide
            </a>
            <a
              href="/neighborhood-guide"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200"
            >
              Neighborhood Spotlight
            </a>
          </div>
        </section>

        {/* (Keep the rest of your existing content below unchanged) */}

      </div>
    </>
  )
}

