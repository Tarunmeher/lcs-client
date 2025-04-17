import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // If you're using React Router

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { username, password });
        alert('Login clicked!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f0f1b] relative overflow-hidden">
            {/* Background gradient circles */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-blue-500 to-blue-800 rounded-full blur-2xl opacity-70 z-0" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-2xl opacity-70 z-0" />

            {/* Glass Card */}
            <div className="z-10 w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-md border border-white/10 text-white">
                <h2 className="text-2xl font-semibold mb-6 text-center">Login Here</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Username</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-3 rounded bg-white/10 text-white placeholder-white/60 outline-none"
                            placeholder="Email or Phone"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full mt-1 p-3 rounded bg-white/10 text-white placeholder-white/60 outline-none"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a href="#" className="text-sm text-blue-400 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 bg-white text-black font-bold py-2 rounded hover:bg-gray-200 transition"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
