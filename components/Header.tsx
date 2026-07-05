"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
            S
          </div>

          <span className="hidden text-xl font-bold md:block">
            Sanu Store
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">

          {/* Cart */}
          <button className="relative rounded-full p-2 transition hover:bg-gray-100">
            <ShoppingCart size={22} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              2
            </span>
          </button>

          {/* Profile */}
          <Image
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            width={42}
            height={42}
            className="rounded-full border object-cover"
          />
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col px-5 py-4">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}

            <hr className="my-4" />

            <div className="flex items-center justify-between">

              <button className="relative rounded-lg bg-blue-600 p-3 text-white">
                <ShoppingCart size={22} />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">
                  2
                </span>
              </button>

              <Image
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                width={45}
                height={45}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}