import Image from "next/image";
import CuppyLogo from "../components/CuppyLogo";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Vietnam Super Double Drawn",
      category: "Straight • Natural Black",
      price: "120.00",
      image: "/product-1.png",
      tag: "The Signature",
    },
    {
      id: 2,
      name: "Chestnut Brown Wig",
      category: "Wigs • 18\" Frontal",
      price: "185.00",
      image: "/product-2.png",
      tag: "Limited Release",
    },
    {
      id: 3,
      name: "Chinese Raw Silk Straight",
      category: "Straight • 22\" Raven",
      price: "95.00",
      image: "/product-3.png",
      tag: "Editor's Pick",
    },
    {
      id: 4,
      name: "Glueless HD Lace Bundle",
      category: "Bundles • 20\" Silky",
      price: "160.00",
      image: "/product-4.png",
      tag: "Pure Luxury",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-surface text-foreground selection:bg-primary-container/30 selection:text-primary">
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-[9px] uppercase tracking-[0.3em] py-2.5 text-center font-bold">
        Worldwide Sourcing • Curated Quality • Complimentary Shipping on $150+
      </div>

      {/* Main Header */}
      <nav className="glass-nav flex flex-col px-6 lg:px-16 border-b border-outline-variant/10">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-12">
            <CuppyLogo />
            <div className="hidden lg:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
              <a href="#" className="hover:text-primary transition-colors">Collections</a>
              <a href="#" className="hover:text-primary transition-colors">The Atelier</a>
              <a href="#" className="hover:text-primary transition-colors">Bespoke</a>
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

      <main className="flex-1">
        {/* Hero Section: The Editorial Spread */}
        <section className="relative px-6 py-12 lg:px-16 bg-surface grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[85vh]">
          {/* Hero Image Group (Asymmetric) */}
          <div className="lg:col-span-7 relative h-[60vh] lg:h-[75vh]">
            <div className="absolute top-0 right-0 w-[85%] h-full z-0 overflow-hidden shadow-2xl">
              <Image
                src="/hero-luxury.png"
                alt="The Digital Atelier Hero"
                fill
                className="object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-105"
                priority
              />
            </div>
            {/* Secondary Accent Image or Block */}
            <div className="absolute bottom-12 left-0 w-[40%] h-[50%] bg-primary-container z-10 shadow-2xl flex items-center justify-center p-8">
               <p className="text-white font-serif italic text-2xl lg:text-3xl leading-tight">
                "The ultimate luxury is the space to be yourself."
               </p>
            </div>
          </div>

          {/* Hero Text */}
          <div className="lg:col-span-5 flex flex-col items-start z-20 mt-12 lg:mt-0">
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary mb-6">Edition 01 / Sourced Global</span>
            <h1 className="font-serif text-6xl lg:text-8xl text-foreground leading-[1] mb-8 tracking-tighter">
              The <span className="italic block mt-2 text-primary">Cuppy</span> Atelier
            </h1>
            <p className="text-sm lg:text-base text-secondary font-medium leading-relaxed max-w-sm mb-12 uppercase tracking-wide">
              Curating the world's most exquisite human hair collections. No grids, just pure editorial curation.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button className="px-12 py-5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary-container transition-all shadow-xl">
                Explore Collection
              </button>
              <button className="px-12 py-5 border border-outline text-foreground text-[10px] font-black uppercase tracking-[0.3em] hover:bg-surface-lowest transition-all">
                The Brand Story
              </button>
            </div>
          </div>
        </section>

        {/* Section Philosophy Area (No Line Philosophy) */}
        <section className="bg-surface-low px-6 py-24 lg:px-16 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground italic">"Simplicity is the keynote of all true elegance."</h2>
            <div className="h-px w-24 bg-primary mx-auto opacity-30" />
            <p className="text-[12px] font-bold uppercase tracking-[0.4em] text-secondary max-w-2xl mx-auto leading-loose">
              Our philosophy transcends typical retail. We focus on the texture, the origin, and the soul of the hair we source. Each piece is a masterpiece of natural beauty.
            </p>
          </div>
        </section>

        {/* Product Collection: Digital Flagship Style */}
        <section className="px-6 py-24 lg:px-16 bg-white">
          <div className="flex items-baseline justify-between mb-20">
            <h3 className="font-serif text-4xl lg:text-6xl text-foreground tracking-tighter">New Arrivals</h3>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-primary border-b border-primary pb-1">View Archive</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-[4/5] bg-surface-lowest overflow-hidden transition-all duration-700 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Digital Atelier Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="pt-8 flex flex-col items-center text-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-3">{product.tag}</span>
                  <h4 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-6">{product.category}</p>
                  <p className="font-serif italic text-lg text-primary">${product.price}</p>
                  
                  <button className="mt-8 text-[9px] font-black uppercase tracking-[0.3em] text-foreground border border-outline px-6 py-3 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                    Acquire Piece
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Concierge Section */}
        <section className="bg-primary text-white grid grid-cols-1 lg:grid-cols-2">
          <div className="px-12 py-24 lg:px-24 flex flex-col justify-center border-r border-white/5">
            <h2 className="font-serif text-4xl lg:text-6xl mb-8 leading-tight italic">Global Concierge</h2>
            <p className="text-xs lg:text-sm font-light uppercase tracking-[0.2em] leading-relaxed mb-12 opacity-80">
              Personal styling, worldwide sourcing, and dedicated support. Our boutique service is designed to curate the perfect match for your identity.
            </p>
            <div className="flex">
              <button className="text-[10px] font-black uppercase tracking-[0.4em] border-b-2 border-primary-container pb-2">Connect Now</button>
            </div>
          </div>
          <div className="relative min-h-[400px]">
            <Image 
              src="/product-2.png" 
              alt="Concierge" 
              fill 
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
               <div className="border border-white/30 p-12 backdrop-blur-sm">
                  <span className="font-serif text-2xl italic tracking-widest">Est. 2024</span>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer: The Final Note */}
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
                className="bg-transparent border-none text-[10px] tracking-widest w-full focus:outline-none placeholder:text-secondary/40 h-8"
              />
              <button className="text-[10px] font-black text-primary">JOIN</button>
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
    </div>
  );
}
