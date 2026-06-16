import React from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">

          {/* Left Section */}
          <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">
              Welcome
            </h1>

            <p className="text-lg text-blue-100 mb-6">
              Start your journey with us. Build amazing projects,
              learn new skills, and connect with opportunities.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span>✓</span>
                <span>Easy to use platform</span>
              </div>

              <div className="flex items-center gap-3">
                <span>✓</span>
                <span>Secure and reliable</span>
              </div>

              <div className="flex items-center gap-3">
                <span>✓</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-10 flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get Started
            </h2>

            <p className="text-gray-500 mb-8">
              Create an account or sign in to continue.
            </p>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Link to="/login">
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                  Sign Up
                </button>
              </Link>

              <Link to="/login">
                <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition">
                  Login
                </button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Join thousands of users already using our platform.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}