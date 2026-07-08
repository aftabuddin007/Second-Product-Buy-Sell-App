"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Mouse,
  ShieldCheck,
  BadgeCheck,
  Recycle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="mb-6 inline-flex rounded-full border border-green-400/20 bg-green-500/10 px-5 py-2 text-green-400">
              ♻ Sustainable Shopping
            </div>

            <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
              Buy & Sell
              <span className="block text-green-400">
                Second-Hand
              </span>

              Products
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Give pre-loved products a second life. Buy quality
              items at better prices or sell things you no longer use.
              Smart shopping starts here.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/products"
                className="flex items-center gap-2 rounded-xl bg-green-500 px-7 py-4 font-semibold text-black transition hover:bg-green-400"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/add-product"
                className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white hover:text-black"
              >
                Sell an Item
              </Link>

            </div>

            {/* Features */}

            <div className="mt-14 flex flex-wrap gap-8">

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-green-400" />
                <span>Secure Deals</span>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="text-green-400" />
                <span>Verified Sellers</span>
              </div>

              <div className="flex items-center gap-3">
                <Recycle className="text-green-400" />
                <span>Eco Friendly</span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >

            {/* Left Card */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-0 top-16 hidden w-52 rotate-[-12deg] overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:block"
            >
              <Image
                src="https://i.ibb.co.com/4RSKXLCg/saurav-kundu-H8-Qtty-Fgro-Y-unsplash.jpg"
                alt="Camera"
                width={400}
                height={600}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Center */}

            <motion.div
              animate={{
                y: [10, -15, 10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="z-10 w-72 overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:w-96"
            >
              <Image
                src="https://i.ibb.co.com/B2s1C095/raymond-petrik-5-CJl-Oh-MCOMY-unsplash.jpg"
                alt="Chair"
                width={500}
                height={700}
                className="object-cover"
              />
            </motion.div>

            {/* Right */}

            <motion.div
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-10 right-0 hidden w-52 rotate-[12deg] overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:block"
            >
              <Image
                src="https://i.ibb.co.com/mChP13p3/suchit-poojari-lj-Ri-Zl00n18-unsplash.jpg"
                alt="Watch"
                width={400}
                height={600}
                className="object-cover"
              />
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-300">

          <span className="text-sm tracking-widest">
            SCROLL
          </span>

          <Mouse className="text-green-400" size={28} />

        </div>
      </motion.div>

    </section>
  );
}
