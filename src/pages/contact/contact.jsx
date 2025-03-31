import React from "react";

const Contact = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
                Lambodar Higher Secondary School Of Science
            </h1>
            <div className="w-20 h-1 bg-blue-500 mt-2 mb-6"></div>

            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Contact Details */}
                <div className="w-full md:w-1/2 p-6 bg-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800">Contact Details</h2>
                    <div className="mt-4 space-y-3 text-gray-700">
                        <div className="flex items-start">
                            <span className="text-blue-500 text-lg mr-2">📍</span>
                            <p>
                                Lambodar Higher Secondary College Of Science (LCS)<br />
                                Kalahandi University <br />
                                <a
                                    href="https://maps.google.com?q=Patia,Bhubaneswar,Odisha,India"
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Chichaiguda, Kalahandi, Odisha, India
                                </a>
                                <br />
                                Pin: 766014
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">📧</span>
                            <p>
                                <a
                                    href="mailto:kiit@kiit.ac.in"
                                    className="text-blue-500 hover:underline"
                                >
                                    LCS@LCS.ac.in
                                </a>
                                <br />
                                <a
                                    href="mailto:admission@kiit.ac.in"
                                    className="text-blue-500 hover:underline"
                                >
                                    admission@LCS.ac.in
                                </a>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">📞</span>
                            <p>+91 674 2725113</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">📞</span>
                            <p>
                                Admission Contact:
                                <a href="tel:8080785785" className="text-blue-500 hover:underline">
                                    8080 785 785
                                </a>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">🌐</span>
                            <a
                                href="https://kiit.ac.in"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LCS.ac.in
                            </a>
                        </div>
                    </div>
                </div>
                {/* Map Section */}
                <div className="w-full md:w-1/2">
                    <iframe
                        className="w-full h-80"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.682295679829!2d82.8783612733937!3d19.85339132711175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a24e1ad95c15dd7%3A0x8e1b657ca47f7ab3!2sLAMBODAR%20COLLEGE%20OF%20SCIENCE!5e0!3m2!1sen!2sin!4v1742709016222!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        title="Lambodar College Map"
                    ></iframe>
                </div>
            </div>
        </div>

    );
};

export default Contact;
