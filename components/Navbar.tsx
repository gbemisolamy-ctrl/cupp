import React from "react";
import Link from "next/link";
import CuppyLogo from "./CuppyLogo";

const Navbar = () => {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-[9px] uppercase tracking-[0.3em] py-2.5 text-center font-bold">
        Worldwide Sourcing • Curated Quality • Complimentary Shipping on $150+
      </div>

      <nav className="glass-nav flex flex-col px-6 lg:px-16 border-b border-outline-variant/10">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-12">
            <Link href="/">
              <CuppyLogo />
            </Link>
            <div className="hidden lg:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
              <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
              <Link href="/atelier" className="hover:text-primary transition-colors">The Atelier</Link>
              <Link href="/bespoke" className="hover:text-primary transition-colors">Bespoke</Link>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <button className="hidden md:flex items-center text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mr-2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search
            </button>
            <div className="flex items-center space-x-6">
              <button className="text-secondary hover:text-primary transition-colors">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              <button className="relative bg-primary-container text-white p-2.5 rounded-full hover:scale-105 transition-transform shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-white text-primary text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-primary-container">2</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
