"use client"
import { postUser } from "@/actions/server/auth";
import { authClient } from "@/app/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
// import { authClient } from "@/lib/auth-client";
export default function RegisterPage() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
});
const router = useRouter()
const [loading, setLoading] = useState(false);
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const handleRegister = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.password
  ) {
    toast.error("Please fill all fields");
    return;
  }

  setLoading(true);

  try {



    const { data, error } = await authClient.signUp.email({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      callbackURL: "/login", // optional
      
    });
    router.push("/login")

    if (error) {
      toast.error(error.message || "Something went wrong");
      return;
    }

    console.log(data);

    toast.success("Registration successful!");
router.push("/login")
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};
const handleGoogleSignIn = async () => {
  try {
    // NextAuth Example
    // await signIn("google");

    console.log("Google Sign In");
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

        {/* Left Side */}
        <div className="flex items-center justify-center px-8 py-14">
          <div className="w-full max-w-md">

            <h1 className="text-4xl font-bold text-white mb-2">
              Create Account
            </h1>

            <p className="text-zinc-400 mb-8">
              Join us and start your journey today.
            </p>

            <form onSubmit={handleRegister} className="space-y-5">

              {/* Name */}
              <div>
                <label className="text-sm text-gray-300 block mb-2">
                  Full Name
                </label>

                <input
                    type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-white transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-300 block mb-2">
                  Email
                </label>

                <input
                 type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-white transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-gray-300 block mb-2">
                  Phone Number
                </label>

                <input
                 type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-white transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-gray-300 block mb-2">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-white transition"
                />
              </div>

              {/* Register Button */}
              <button
                type="submit"
  disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/30"
              >
                
                {loading ? "Creating Account..." : "Register"}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-zinc-700"></div>

                <span className="text-zinc-500 text-sm">
                  OR
                </span>

                <div className="flex-1 h-px bg-zinc-700"></div>
              </div>

              {/* Google */}
              <button
                type="button"
               onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 bg-zinc-800 border border-zinc-700 text-white py-3 rounded-xl hover:bg-zinc-700 transition"
              >
                <FcGoogle size={24} />
                Continue with Google
              </button>

            </form>

            <p className="text-center text-zinc-500 mt-8">
              Already have an account?
              <Link href={"/login"} className="text-white ml-2 cursor-pointer hover:underline">
                Login
              </Link>
            </p>

          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:block relative">

          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
            alt="Register"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <div className="text-center px-10">

              <h2 className="text-5xl font-bold text-white mb-5">
                Welcome
              </h2>

              <p className="text-lg text-gray-200 leading-8">
                Create your account and experience our modern platform with
                secure authentication and beautiful design.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}