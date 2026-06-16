import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>

            <p className="text-gray-500 mt-2">
              {isLogin
                ? "Login to continue"
                : "Join us and start your journey"}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-2 rounded-lg font-medium transition ${
                isLogin
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-2 rounded-lg font-medium transition ${
                !isLogin
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            {isLogin && (
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Google
            </button>

            <button
              type="button"
              className="py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              GitHub
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-blue-600 font-medium hover:text-blue-700"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}