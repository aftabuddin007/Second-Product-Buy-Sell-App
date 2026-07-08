"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
const pathname = usePathname();

 const navLinkClass = (path) =>
    pathname === path
      ? 'text-[#f5bf42] underline font-bold'
      : 'hover:text-[#f5bf42] hover:underline';
  return (
   <>

   <div className="bg-base-100">
   <div className="navbar  shadow-sm max-w-7xl mx-auto px-4">
    {/* nav first */}
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
{/* center nav */}
      <ul
  tabIndex={-1}
  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
              <Link href="/" className={navLinkClass('/')}>Home</Link>
            </li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Buy & Sell</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li>
              <Link href="/" className={navLinkClass('/')}>Home</Link>
            </li>
     
    </ul>
  </div>
  {/* nav end */}
  <div className="navbar-end">
    <a href={"/login"} className="btn btn-primary">Login</a>
  </div>
</div>

   </div>
   </>)
}