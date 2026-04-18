import Image from "next/image";

export default function Atelier() {
  return (
    <div className="bg-surface">
      {/* Editorial Hero */}
      <section className="relative px-6 py-24 lg:px-16 lg:py-40 bg-surface min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image Layer (Asymmetric) */}
        <div className="absolute top-20 right-0 w-[55%] h-[70vh] z-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
          <Image
            src="/hero-luxury.png"
            alt="Atelier Essence"
            fill
            className="object-cover object-bottom"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary mb-10 block">The Foundation / Digital Atelier</span>
          <h1 className="font-serif text-7xl lg:text-[10rem] text-foreground leading-[0.8] tracking-tighter mb-16">
            The <span className="italic block mt-4 text-primary">Scent</span> of Luxury
          </h1>
          <div className="w-24 h-px bg-primary mb-16 opacity-30" />
          <p className="text-secondary font-medium text-base lg:text-xl leading-relaxed uppercase tracking-widest max-w-2xl">
            We are not just a marketplace. We are a digital flagship—a curation of natural masterpieces sourced from the earth’s most exquisite origins.
          </p>
        </div>
      </section>

      {/* Philosophy Section (Asymmetric Grid) */}
      <section className="px-6 py-32 lg:px-16 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-1" />
          <div className="lg:col-span-5 relative">
             <div className="aspect-[3/4] bg-surface relative overflow-hidden shadow-2xl">
               <Image 
                 src="/product-1.png" 
                 alt="Craftsmanship" 
                 fill 
                 className="object-cover"
               />
             </div>
             {/* Overlapping Text Element */}
             <div className="absolute -bottom-10 -right-10 bg-primary p-12 text-white shadow-2xl hidden lg:block">
                <span className="font-serif italic text-3xl">Est. 2024</span>
             </div>
          </div>
          <div className="lg:col-span-5 space-y-12">
            <h2 className="font-serif text-4xl lg:text-6xl text-foreground leading-tight italic">Beyond the Grid</h2>
            <div className="space-y-8">
              <p className="text-sm lg:text-base text-secondary leading-loose uppercase tracking-[0.15em] font-medium">
                In a world of mass-market consumption, Cuppy Hair stands as a beacon of artisanal purity. We believe that hair is not a commodity, but an identity.
              </p>
              <p className="text-sm lg:text-base text-secondary leading-loose uppercase tracking-[0.15em] font-medium">
                Our "Digital Atelier" philosophy dictates every pixel. We reject the standard retail grid in favor of an editorial spread that honors the textures and stories behind every bundle.
              </p>
            </div>
            <div className="pt-8">
               <button className="text-[10px] font-black uppercase tracking-[0.4em] text-primary border-b-2 border-primary-container pb-2">Read our Manifesto</button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Sourcing Section */}
      <section className="px-6 py-32 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">Worldwide Origins</span>
            <h3 className="font-serif text-5xl lg:text-7xl text-foreground italic">The Global Pursuit</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
            <div className="space-y-8 group">
              <div className="h-px w-full bg-outline-variant/30 group-hover:bg-primary transition-colors duration-500" />
              <h4 className="font-serif text-3xl text-foreground">Vietnam</h4>
              <p className="text-[11px] font-bold text-secondary uppercase tracking-widest leading-loose">
                Known for unrivaled silkiness and natural sheen. Sourced directly from rural communities where hair care is a generational tradition.
              </p>
            </div>
            <div className="space-y-8 group">
              <div className="h-px w-full bg-outline-variant/30 group-hover:bg-primary transition-colors duration-500" />
              <h4 className="font-serif text-3xl text-foreground">China</h4>
              <p className="text-[11px] font-bold text-secondary uppercase tracking-widest leading-loose">
                The pinnacle of strength and versatility. Our raw silk straight collections originate from high-altitude regions ensuring pure, untreated quality.
              </p>
            </div>
            <div className="space-y-8 group">
              <div className="h-px w-full bg-outline-variant/30 group-hover:bg-primary transition-colors duration-500" />
              <h4 className="font-serif text-3xl text-foreground">Burma</h4>
              <p className="text-[11px] font-bold text-secondary uppercase tracking-widest leading-loose">
                Celebrated for its authentic deep curl patterns. Each strand is ethically acquired through voluntary donation rituals within sacred traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Craft (Middle CTA Section) */}
      <section className="relative px-6 py-40 lg:px-16 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <h2 className="font-serif text-4xl lg:text-7xl italic leading-tight">"Where Sourcing Meets Sophistication"</h2>
          <div className="h-px w-24 bg-primary-container mx-auto" />
          <p className="text-xs lg:text-sm font-light uppercase tracking-[0.3em] leading-relaxed max-w-2xl mx-auto py-8">
            Every unit at Cuppy is hand-inspected under high-fidelity lighting at our flagship studio. We ensure that the closure, the lace, and the bundles exceed global luxury standards.
          </p>
          <div className="flex justify-center">
             <button className="px-12 py-5 bg-white text-primary text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary-container hover:text-white transition-all">Explore the Archive</button>
          </div>
        </div>
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center overflow-hidden">
           <span className="font-serif text-[30rem] lg:text-[50rem] select-none">C</span>
        </div>
      </section>
    </div>
  );
}
