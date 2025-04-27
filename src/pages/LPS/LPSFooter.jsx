import React from 'react';

const LPSFooter = () => {
    return (
        <footer className="bg-teal-800 text-white pt-10 pb-5 relative">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and description */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <img src="/path-to-your-logo.png" alt="Kids Cool Theme" className="w-32 mb-4" />
                    <p className="text-2xl font-bold">Lamodar Public School</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                {/* Pages links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Pages</h3>
                    <ul className="space-y-2">
                        <li><a href="#">About Ninos</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">News Feed</a></li>
                        <li><a href="#">Infrastructure</a></li>
                    </ul>
                </div>

                {/* Help links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Help</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Start a Return</a></li>
                        <li><a href="#">Shipping & Return Policy</a></li>
                        <li><a href="#">F.A.Q</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Gallery images */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Our Galleries</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <img src="https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_1280.jpg" alt="Gallery" className="rounded h-20 w-20" />
                        <img src="https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_1280.jpg" alt="Gallery" className="rounded h-20 w-20 " />
                        <img src="https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_1280.jpg" alt="Gallery" className="rounded h-20 w-20" />
                        <img src="https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360359_1280.jpg" alt="Gallery" className="rounded h-20 w-20" />
                    </div>
                </div>
            </div>

            {/* Divider squiggle */}
            <div className="flex justify-center my-8">
                <div className="w-32 h-1 border-b-4 border-white rounded-full"></div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-4  text-center text-sm">
                <p>Copyright © 2025 by Lamodar Public School . All Rights Reserved.</p>
            </div>

            {/* Policy Links */}
            <div className="mt-4 text-center text-xs">
                <a href="#" className="mr-2">Privacy Policy</a> |
                <a href="#" className="ml-2">Conditions</a>
            </div>
        </footer>
    );
};

export default LPSFooter;
