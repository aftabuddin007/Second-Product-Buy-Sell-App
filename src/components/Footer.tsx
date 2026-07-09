import Link from "next/link";
import {
  
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                S
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Sanu Store
                </h2>
                <p className="text-sm text-gray-400">
                  Modern Shopping Experience
                </p>
              </div>
            </div>

            <p className="leading-7 text-gray-400">
              Discover premium products with fast delivery and
              exceptional customer support. We make shopping
              simple, secure, and enjoyable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@sanustore.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+880 1234-567890</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>
                  Dhaka, Bangladesh
                </span>
              </div>

            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Newsletter
            </h3>

            <p className="mb-4 text-gray-400">
              Subscribe to receive the latest offers and updates.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <button
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            {/* <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Facebook size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <Instagram size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-sky-500"
              >
                <Twitter size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-500"
              >
                <Linkedin size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-gray-700"
              >
                <Github size={18} />
              </Link>
            </div> */}
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-slate-800 pt-6">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sanu Store. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>

              <Link href="/cookies" className="hover:text-white">
                Cookies
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}