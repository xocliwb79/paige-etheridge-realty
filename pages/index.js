// pages/index.js

import Head from 'next/head'
import React from 'react'

export default function HomeStaging() {
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

        {/* Header/Nav */}
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

        {/* Hero Section (65vh height, bg image + color overlay) */}
        <section
          className="relative w-full"
          style={{
            height: '65vh',
            backgroundColor: '#BFD5E2',
            backgroundImage: `url('/images/hero-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20" />

          <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-center h-full px-6">
            <img
              src="/images/PAIGE-UPDATED-scaled.png"
              alt="Paige Etheridge"
              className="w-40 h-40 rounded-full mb-6 lg:mb-0 lg:mr-8 border-4 border-white"
            />
            <div className="text-center lg:text-left text-white">
              <h1 className="text-5xl font-extrabold">Paige Etheridge</h1>
              <h2 className="text-2xl mb-4">Realtor</h2>
              <p className="italic mb-6 text-lg">
                “When you’re ready for the next chapter in your life…”
              </p>
              <a
                href="/schedule-consultation"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg"
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

        {/* About Paige */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Meet Paige Etheridge</h2>
            <p className="mb-4">
              With 13 years of experience as a licensed Principal Broker and Realtor,
              Paige Etheridge is a trusted authority in West Michigan real estate.
              From intimate downtown condos to lakefront retreats, her deep market
              expertise and personalized service ensure outstanding results.
            </p>
            <p className="mb-4">
              As founder of PE Realty, Paige partners with WilCo Builders—providing
              clients turnkey advice on renovations, staging, and pre-listing upgrades
              to maximize value without unnecessary cost.
            </p>
          </div>
        </section>

        {/* Buyer vs Seller */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">For Sellers</h3>
              <p className="mb-4">
                Maximize your home’s value with strategic upgrades and expert staging.
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                <li>Strategic pre‑sale staging</li>
                <li>Targeted marketing campaigns</li>
                <li>Expert pricing strategies</li>
              </ul>
              <div className="flex space-x-4">
                <a
                  href="/schedule-valuation"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Schedule a Home Valuation
                </a>
                <a
                  href="/downloads/sellers-packet.pdf"
                  className="text-blue-600 hover:underline self-center"
                >
                  Download Seller Packet
                </a>
              </div>
            </div>
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">For Buyers</h3>
              <p className="mb-4">
                Find your dream home with exclusive insights and renovation potential.
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                <li>First‑time buyer guidance</li>
                <li>Access to off‑market listings</li>
                <li>Contractor partnership insights</li>
              </ul>
              <div className="flex space-x-4">
                <a
                  href="/property-search"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Start Your Search
                </a>
                <a
                  href="/downloads/buyers-packet.pdf"
                  className="text-blue-600 hover:underline self-center"
                >
                  Download Buyer’s Packet
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Property Search Embed */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Property Search</h2>
            <div
              className="w-full h-[600px] bg-gray-100"
              dangerouslySetInnerHTML={{ __html: '[showcaseidx_map]' }}
            />
          </div>
        </section>

        {/* Renovation CTA */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Home?</h2>
            <a
              href="/renovation-process"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              See Our Renovation Process
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 border-t py-8 mt-auto">
          <div className="container mx-auto px-6 text-center">
            <nav className="space-x-4 mb-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/property-search" className="hover:underline">Property Search</a>
              <a href="/neighborhood-guide" className="hover:underline">Neighborhood Guide</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Paige Etheridge Realty. All rights reserved.
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}
