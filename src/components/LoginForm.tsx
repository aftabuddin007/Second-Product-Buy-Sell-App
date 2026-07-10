"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-950 flex items-center justify-center p-6">

      {/* Main Card */}
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] grid md:grid-cols-2">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative hidden md:block min-h-[700px]">

          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
            alt="Login"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-12 left-10 right-10 text-white">

            <h2 className="text-5xl font-bold leading-tight">
              Welcome Back
            </h2>

            <p className="mt-5 text-gray-300 text-lg leading-8">
              Sign in to continue exploring your dashboard, manage your
              projects, and stay connected with everything you love.
            </p>

          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="flex items-center justify-center px-8 py-16 bg-black/30">

          <div className="w-full max-w-md">

            <h1 className="text-4xl font-bold text-white">
              Login
            </h1>

            <p className="mt-3 text-gray-400">
              Enter your credentials to access your account.
            </p>

            <form className="mt-10 space-y-6">

              {/* Email */}
              <div>

                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />

              </div>

              {/* Password */}
              <div>

                <label className="mb-2 block text-sm text-gray-300">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900/70 px-5 py-3 pr-14 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  >
                    {showPassword ? (
                      <HiEyeOff size={22} />
                    ) : (
                      <HiEye size={22} />
                    )}
                  </button>

                </div>

              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">

                <Link
                  href="/forgot-password"
                  className="text-sm text-indigo-400 hover:text-indigo-300"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/30"
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">

                <div className="h-px flex-1 bg-zinc-700"></div>

                <span className="text-sm text-zinc-500">
                  OR
                </span>

                <div className="h-px flex-1 bg-zinc-700"></div>

              </div>

              {/* Google */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 py-3 font-medium text-white transition hover:bg-zinc-800 hover:border-zinc-500"
              >
                <FcGoogle size={24} />
                Continue with Google
              </button>

            </form>

            {/* Register */}
            <p className="mt-8 text-center text-gray-400">
              Don`&apos;`t have an account?
              <Link
                href="/register"
                className="ml-2 font-medium text-indigo-400 hover:text-indigo-300"
              >
                Register
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}