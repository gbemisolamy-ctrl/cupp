import Image from "next/image";

export default function Bespoke() {
  return (
    <div className="bg-surface">
      {/* Editorial Hero */}
      <section className="px-6 py-24 lg:px-16 lg:py-40 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 space-y-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary mb-8 block">Exclusive Services / Edition 01</span>
            <h1 className="font-serif text-6xl lg:text-9xl text-foreground leading-[0.9] tracking-tighter">
              Your <span className="italic block mt-2 text-primary">Identity</span> Refined
            </h1>
            <p className="text-secondary font-medium text-sm lg:text-base leading-relaxed uppercase tracking-widest max-w-sm">
              Tailored precisely to your aesthetic. Our bespoke service is the pinnacle of the Digital Atelier experience.
            </p>
          </div>
          <div className="flex-1 relative w-full aspect-[4/5] lg:aspect-[3/4]">
             <div className="absolute inset-0 bg-primary-container/10 -m-8 z-0" />
             <Image 
               src="/product-4.png" 
               alt="Bespoke Craft" 
               fill 
               className="object-cover relative z-10 shadow-3xl"
             />
          </div>
        </div>
      </section>

      {/* The Bespoke Process */}
      <section className="px-6 py-32 lg:px-16 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col lg:flex-row justify-between items-baseline gap-8">
            <h2 className="font-serif text-4xl lg:text-6xl text-foreground italic">The Architecture of Creation</h2>
            <div className="h-px bg-primary w-24 hidden lg:block" />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">A Journey in Three Movements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            <div className="space-y-10 group">
               <div className="text-5xl font-serif text-primary-container italic transition-all duration-500 group-hover:scale-110 origin-left">01.</div>
               <h3 className="font-serif text-3xl text-foreground">Consultation</h3>
               <p className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] leading-loose">
                 Deep alignment on your desired silhouette, texture, and origin. Our concierge team listens to the nuances of your vision.
               </p>
            </div>
            <div className="space-y-10 group mt-12 lg:mt-24">
               <div className="text-5xl font-serif text-primary-container italic transition-all duration-500 group-hover:scale-110 origin-left">02.</div>
               <h3 className="font-serif text-3xl text-foreground">Global Curation</h3>
               <p className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] leading-loose">
                 Once the vision is set, we activate our worldwide sourcing network to find the absolute perfect match for your requirements.
               </p>
            </div>
            <div className="space-y-10 group mt-12 lg:mt-48">
               <div className="text-5xl font-serif text-primary-container italic transition-all duration-500 group-hover:scale-110 origin-left">03.</div>
               <h3 className="font-serif text-3xl text-foreground">Master Craft</h3>
               <p className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] leading-loose">
                 Our atelier artisans hand-construct the unit with meticulous precision, ensuring the lace and closure meet couture standards.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Inquiry Section */}
      <section className="px-6 py-40 lg:px-16 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
           <div className="text-center mb-24">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">Direct Connect</span>
              <h2 className="font-serif text-5xl lg:text-7xl text-foreground italic mb-10">Start the Inquiry</h2>
              <div className="h-px w-24 bg-primary mx-auto opacity-30" />
           </div>

           <form className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-widest text-primary">CLIENT NAME</label>
                    <input type="text" className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors py-4 text-xs tracking-widest outline-none font-sans" placeholder="Full Name" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-widest text-primary">EMAIL ADDRESS</label>
                    <input type="email" className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors py-4 text-xs tracking-widest outline-none font-sans" placeholder="Email" />
                  </div>
              </div>
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-widest text-primary">DESIRED SERVICE</label>
                <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors py-4 text-xs tracking-widest outline-none font-sans appearance-none">
                   <option>Custom Wig Construction</option>
                   <option>Global Sourcing Search</option>
                   <option>Personal Styling Concierge</option>
                   <option>Other / Multiple</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-widest text-primary">INITIAL VISION NOTES</label>
                <textarea className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors py-4 text-xs tracking-widest outline-none font-sans min-h-[100px]" placeholder="Tell us about the piece you desire..." />
              </div>
              <div className="flex justify-center pt-12">
                 <button type="submit" className="px-16 py-6 bg-primary text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-primary-container transition-all shadow-2xl">
                    Connect Now
                 </button>
              </div>
           </form>
        </div>
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
           <svg width="800" height="800" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="45" strokeWidth="0.1" />
              <path d="M50 5 L50 95 M5 50 L95 50" strokeWidth="0.05" />
           </svg>
        </div>
      </section>
    </div>
  );
}
