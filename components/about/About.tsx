import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-indigo-800 mb-10">About GameBuzz</h1>

        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At GameBuzz, our mission is to unite gamers by providing comprehensive insights about the latest games across all platforms. Whether you're into PC, smartphone, or console gaming, we strive to be your go-to source for game reviews, updates, and recommendations.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            GameBuzz is composed of a passionate group of gamers, writers, and tech enthusiasts who share a love for everything gaming. Our team is committed to providing engaging content, in-depth reviews, and fostering a community of like-minded players.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-900">Alex Johnson</h3>
              <p className="text-sm text-indigo-600 mt-1">Founder & CEO</p>
              <p className="mt-4 text-gray-700">
                A lifelong gamer and entrepreneur, Alex founded GameBuzz to create a space where gamers can find reliable information and connect with others.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-900">Jamie Lee</h3>
              <p className="text-sm text-indigo-600 mt-1">Content Strategist</p>
              <p className="mt-4 text-gray-700">
                Jamie leads our content strategy, ensuring our articles and reviews are engaging, valuable, and resonate with our audience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-900">Taylor Smith</h3>
              <p className="text-sm text-indigo-600 mt-1">Lead Developer</p>
              <p className="mt-4 text-gray-700">
                Taylor brings the technical expertise needed to ensure GameBuzz runs smoothly and provides a seamless experience across devices.
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
