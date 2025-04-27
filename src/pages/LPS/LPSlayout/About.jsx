import React from 'react';

const LpsAbout = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">

      {/* Left Side (Text Content) */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-semibold text-blue-900">Discover our School</h2>

        <p className="text-gray-700 leading-relaxed">
          Hoodie deep v hammock kale chips cliche pok pok tumblr literally knausgaard, actually chambray.
          Salvia af post-ironic food truck health goth paleo. Cardigan keffiyeh aesthetic pour-over, retro live-edge copper mug hoodie paleo semiotics photo booth affogato 90’s.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Tilde 90’s cliche four loko literally messenger bag listicle crucifix disrupt yr heirloom art party.
          3 wolf moon irony pickled pug viral. Poke copper mug semiotics celiac kale chips photo booth.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
          <div>
            <h3 className="text-xl text-blue-900">Dusmant meher</h3>
            <p className="text-sm text-gray-500">Principal</p>
          </div>
          <img
            src="/path-to-your/h.png"
            alt="Principal's Signature"
            className="h-20 object-contain"
          />
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://smartyschool.stylemixthemes.com/school-two/wp-content/uploads/2019/09/img1.jpg"
          alt="Classroom"
          className="rounded-lg shadow-lg max-h-[450px] object-cover"
        />
      </div>

    </section>
  );
};

export default LpsAbout;
