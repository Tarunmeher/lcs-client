import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error('Password and Confirm Password must be the same');
            return;
        }

        console.log('Signing up with:', formData);
        toast.success('Signup successful!');

        // Clear the form after successful signup
        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f0f1b] relative overflow-hidden">
            <Toaster position="top-center" reverseOrder={false} />

            {/* Background gradient circles */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-blue-500 to-blue-800 rounded-full blur-2xl opacity-70 z-0" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-2xl opacity-70 z-0" />

            {/* Sign Up Card */}
            <div className="z-10 w-full max-w-md max-h-[90vh] overflow-y-auto p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-md border border-white/10 text-white">
                <h2 className="text-2xl font-semibold mb-4 text-center">Create Account</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            className="w-full mt-1 p-3 rounded bg-white/10 text-white placeholder-white/60 outline-none"
                            placeholder="Your Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full mt-1 p-3 rounded bg-white/10 text-white placeholder-white/60 outline-none"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full mt-1 p-3 rounded bg-white/10 text-white placeholder-white/60 outline-none"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="w-full mt-1 p-3 rounded bg-white/10 text-white placeholder-white/60 outline-none"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 bg-white text-black font-bold py-2 rounded hover:bg-gray-200 transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Social Buttons */}
                <div className="flex justify-between gap-4 mt-5">
                    <button className="flex-1 bg-gray-800 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-700">
                        <FcGoogle className="w-5 h-5" />
                        Google
                    </button>
                    <button className="flex-1 bg-gray-800 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-700">
                        <FaFacebook className="w-5 h-5 text-blue-500" />
                        Facebook
                    </button>
                </div>

                {/* Login Link */}
                <div className="mt-5 text-center text-sm">
                    Already have an account?{' '}
                    <Link to='/admin/login'>
                        <a href="#" className="text-blue-400 hover:underline">
                            Log In
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
