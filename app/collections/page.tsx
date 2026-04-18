import Image from "next/image";

export default function Collections() {
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
    {
      id: 5,
      name: "Deep Wave Russian Unit",
      category: "Wigs • Natural Black",
      price: "210.00",
      image: "/product-1.png",
      tag: "Atelier Exclusive",
    },
    {
      id: 6,
      name: "Burmese Curly Bundle",
      category: "Bundles • Raw Curly",
      price: "145.00",
      image: "/product-3.png",
      tag: "New Arrival",
    },
  ];

  return (
    <div className="bg-surface">
      {/* Editorial Header */}
      <section className="px-6 py-24 lg:px-16 lg:py-32 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary mb-8 block">Full Collection / Edition 01</span>
            <h1 className="font-serif text-6xl lg:text-9xl text-foreground leading-[0.9] tracking-tighter">
              The <span className="italic block mt-2 text-primary">Curation</span>
            </h1>
          </div>
          <div className="lg:pb-4">
            <p className="text-secondary font-medium text-sm lg:text-base leading-relaxed uppercase tracking-widest max-w-md">
              A meticulously sourced selection of natural masterpieces. Explore our signature silhouettes, textures, and bespoke units.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar (Placeholder Style) */}
      <section className="sticky top-[100px] z-40 bg-surface/80 backdrop-blur-md px-6 py-6 lg:px-16 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar whitespace-nowrap space-x-12">
          <div className="flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
             <button className="text-primary border-b border-primary pb-1">All Pieces</button>
             <button className="hover:text-primary transition-colors">Wigs & Units</button>
             <button className="hover:text-primary transition-colors">Bundles</button>
             <button className="hover:text-primary transition-colors">Origins</button>
             <button className="hover:text-primary transition-colors">Textures</button>
          </div>
          <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
             <button className="flex items-center">
               <span>Sort By</span>
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                 <path d="m6 9 6 6 6-6" />
               </svg>
             </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 py-24 lg:px-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 lg:gap-x-12">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-[4/5] bg-surface-lowest overflow-hidden transition-all duration-700 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="pt-10 flex flex-col items-start">
                  <div className="flex w-full justify-between items-baseline mb-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">{product.tag}</span>
                    <span className="font-serif italic text-base text-primary">${product.price}</span>
                  </div>
                  <h4 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-secondary font-bold uppercase tracking-[0.3em] mb-10">{product.category}</p>
                  
                  <div className="w-full h-px bg-outline-variant/20 mb-10" />
                  
                  <button className="text-[9px] font-black uppercase tracking-[0.5em] text-foreground hover:text-primary transition-all duration-300">
                    Acquire Piece —&gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
