import React from "react";
import CuppyLogo from "./CuppyLogo";

const Footer = () => {
  return (
    <footer className="bg-surface px-6 py-24 lg:px-16 border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
        <div className="lg:col-span-1">
          <CuppyLogo />
          <p className="mt-10 text-[10px] font-bold text-secondary uppercase leading-[2.5] tracking-widest">
            Retailing Premium Human Hair Worldwide. <br />
            Sourced with Integrity. <br />
            Delivered with Care.
          </p>
        </div>

        <div>
          <h5 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-primary">Discover</h5>
          <ul className="space-y-4 text-[10px] font-bold text-secondary uppercase tracking-widest">
            <li><a href="#" className="hover:text-primary transition-colors">Collections</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">The Atelier</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Bespoke units</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-primary">Assistance</h5>
          <ul className="space-y-4 text-[10px] font-bold text-secondary uppercase tracking-widest">
            <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Exchanges</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Wholesale</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-primary">Atelier Notes</h5>
          <p className="text-[10px] font-bold text-secondary mb-8 uppercase tracking-widest">Receive curated drops and atelier insights.</p>
          <div className="flex border-b border-primary pb-3">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent border-none text-[10px] tracking-widest w-full focus:outline-none placeholder:text-secondary/40 h-8 font-sans"
            />
            <button className="text-[10px] font-black text-primary font-sans">JOIN</button>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-10 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center text-[8px] font-black text-secondary uppercase tracking-[0.4em]">
        <div>© 2024 CUPPY HAIR GLOBAL • LONDON • DUBAI • NEW YORK</div>
        <div className="flex space-x-12 mt-8 md:mt-0">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Atelier Status: Online</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
