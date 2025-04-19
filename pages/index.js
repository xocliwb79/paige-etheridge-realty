import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Nav */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-xl font-bold">Paige Etheridge Realty</div>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/property-search" className="hover:underline">Property Search</a>
            <a href="/wilco-construction" className="hover:underline">WilCo Construction</a>
            <a href="/neighborhood-guide" className="hover:underline">Neighborhood Guide</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <a href="tel:+1234567890" className="px-3 py-1 border rounded hover:bg-gray-100">Call</a>
            <a href="sms:+1234567890" className="px-3 py-1 border rounded hover:bg-gray-100">Text</a>
            <a href="mailto:info@paigeetheridgerealty.com" className="px-3 py-1 border rounded hover:bg-gray-100">Email</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
          <img
            src="/images/paige-headshot.jpg"
            alt="Paige Etheridge"
            className="w-48 h-48 rounded-full mb-6 lg:mb-0 lg:mr-8"
          />
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold mb-4">Schedule a Free Consultation</h1>
            <p className="mb-6">
              Whether you’re buying, selling, or renovating, Paige Etheridge Realty offers personalized strategies tailored to you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Paige Etheridge</h2>
          <p className="max-w-2xl mx-auto">
            With years of experience in Austin’s real estate market and a strategic partnership with WilCo Builders,
            Paige delivers seamless transactions from listing to closing.
          </p>
        </div>
      </section>
    </div>
  );
}
