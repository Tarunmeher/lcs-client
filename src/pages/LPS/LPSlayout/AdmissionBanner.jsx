import React from "react";

const AdmissionBanner = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#1b7343] flex items-center justify-between rounded-md">
      {/* Left side content */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#fff] mb-2">Apply for Admission</h1>
        <p className="text-lg text-white">
          Middle School is a supportive community that champions respect.
        </p>
      </div>

      {/* Right side 3D button */}
      <div className="ml-8">
        <button className="px-8 py-3 bg-transparent text-white font-semibold text-lg rounded-lg 
                          shadow-lg  hover:shadow-xl  active:shadow-md border-2 hover:bg-white hover:text-black
                          transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200">
          Apply Now &gt;
        </button>
      </div>
    </div>
  );
};

export default AdmissionBanner;