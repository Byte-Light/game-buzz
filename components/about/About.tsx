import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">About GameBuzz</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At GameBuzz,our mission is to bring gamers together by providing comprehensive information about the latest and greatest games across platforms. Whether you're into PC, smartphone, or console gaming, we aim to be your go-to source for game reviews, updates, and recommendations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            GameBuzz is made up of a passionate team of gamers, writers, and tech enthusiasts who share a love for all things gaming. Our team works hard to keep you updated with engaging content, in-depth reviews, and community-focused events.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900">Alex Johnson</h3>
              <p className="text-sm text-gray-600">Founder & CEO</p>
              <p className="mt-4 text-gray-700">A lifelong gamer and entrepreneur, Alex founded GameBuzz to create a space where gamers can find reliable information and connect with others.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900">Jamie Lee</h3>
              <p className="text-sm text-gray-600">Content Strategist</p>
              <p className="mt-4 text-gray-700">Jamie leads our content strategy, ensuring our articles and reviews are engaging and valuable to our audience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900">Taylor Smith</h3>
              <p className="text-sm text-gray-600">Lead Developer</p>
              <p className="mt-4 text-gray-700">Taylor brings the technical expertise needed to keep GameBuzz running smoothly and looking great across devices.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
