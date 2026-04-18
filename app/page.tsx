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
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Chestnut Brown Wig",
      category: "Wigs • Chestnut Brown",
      price: "185.00",
      image: "/product-2.png",
      tag: "Limited",
    },
    {
      id: 3,
      name: "Chinese Raw Silk Straight",
      category: "Straight • Raven Black",
      price: "95.00",
      image: "/product-3.png",
      tag: "Pure Silk",
    },
    {
      id: 4,
      name: "Glueless HD Lace Bundle",
      category: "Bundles • Natural Black",
      price: "160.00",
      image: "/product-4.png",
      tag: "HD Quality",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary-container selection:text-white">
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] py-2 text-center font-bold">
        FREE WORLDWIDE SHIPPING ON ORDERS OVER $150 • SHOP THE NEW ARRIVALS
      </div>

      {/* Main Header */}
      <nav className="glass-nav flex flex-col px-4 lg:px-12">
        <div className="flex items-center justify-between py-4 border-b border-outline/30">
          <div className="flex-1 flex items-center">
            <CuppyLogo />
          </div>
          
          <div className="hidden md:flex flex-[2] bg-surface-low rounded-full px-6 py-2 items-center mx-8">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary/50">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input 
              type="text" 
              placeholder="Search for human hair, wigs, accessories..." 
              className="bg-transparent border-none text-xs w-full focus:outline-none focus:ring-0 ml-3 placeholder:text-secondary/40 h-8"
            />
          </div>

          <div className="flex-1 flex items-center justify-end space-x-6">
            <button className="hidden lg:flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Account</span>
            </button>
            <button className="relative p-2 hover:opacity-70 transition-opacity">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-primary-container text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </button>
          </div>
        </div>

        {/* Category Nav */}
        <div className="flex items-center space-x-8 py-3 overflow-x-auto no-scrollbar whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-secondary/80">
          <a href="#" className="text-primary-container border-b-2 border-primary-container pb-1">Flash Sale</a>
          <a href="#" className="hover:text-primary transition-colors">New Drops</a>
          <a href="#" className="hover:text-primary transition-colors">Best Sellers</a>
          <a href="#" className="hover:text-primary transition-colors">Human Hair</a>
          <a href="#" className="hover:text-primary transition-colors">Wigs & Units</a>
          <a href="#" className="hover:text-primary transition-colors">Bundles</a>
          <a href="#" className="hover:text-primary transition-colors">Closures & Frontals</a>
          <a href="#" className="hover:text-primary transition-colors">Essentials</a>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full overflow-hidden bg-surface-low">
          <Image
            src="/hero.png"
            alt="Cuppy Hair Retail Promo"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="bg-white/90 backdrop-blur-sm px-8 py-10 md:px-16 md:py-16 max-w-3xl transform -rotate-1 shadow-2xl">
              <span className="text-accent-pink font-black text-sm md:text-xl uppercase tracking-[0.3em] mb-4 block">Limited Time Only</span>
              <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl text-primary tracking-tighter leading-[0.9] mb-6">
                GRAND OPENING<br/>
                <span className="text-primary-container">50% OFF</span>
              </h2>
              <p className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-secondary font-bold mb-10 max-w-md mx-auto">
                Premium Human Hair & Luxury Wigs. Sourced globally, delivered to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white text-[11px] uppercase tracking-widest font-black hover:bg-primary-container transition-all shadow-xl">
                  Shop Best Sellers
                </button>
                <button className="w-full sm:w-auto px-10 py-4 border-2 border-primary text-primary text-[11px] uppercase tracking-widest font-black hover:bg-primary hover:text-white transition-all">
                  View Lookbook
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3">
            <div className="w-8 h-1 bg-primary-container" />
            <div className="w-8 h-1 bg-white/50" />
            <div className="w-8 h-1 bg-white/50" />
          </div>
        </section>

        {/* Category Quick-Links */}
        <section className="px-4 py-12 lg:px-12 bg-white">
          <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar pb-4 md:justify-center">
            {[
              { name: "Straight", img: "/product-1.png" },
              { name: "Body Wave", img: "/product-2.png" },
              { name: "Deep Curly", img: "/product-3.png" },
              { name: "Lace Wigs", img: "/product-4.png" },
              { name: "Frontals", img: "/product-1.png" },
              { name: "Closures", img: "/product-2.png" },
            ].map((cat, i) => (
              <div key={i} className="flex flex-col items-center flex-shrink-0 group cursor-pointer">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-outline/30 group-hover:border-primary-container transition-all mb-3 relative">
                  <Image src={cat.img} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Collection */}
        <section className="px-6 py-16 lg:px-12 bg-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 border-b border-outline/30 pb-8">
            <div className="flex items-center space-x-4">
              <h3 className="font-sans font-black text-2xl md:text-4xl text-primary uppercase tracking-tighter">
                New Arrivals
              </h3>
              <span className="bg-accent-pink text-white text-[10px] font-bold px-2 py-1 rounded">HOT</span>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary">Featured</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-secondary/60 hover:text-primary transition-colors">Best Sellers</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-secondary/60 hover:text-primary transition-colors">Trending</a>
            </div>
          </div>

          <div className="retail-grid">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="product-card relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="badge badge-sale">-50% OFF</div>
                  <div className="badge badge-new">New</div>
                  <div className="absolute bottom-0 inset-x-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 py-3 text-center">
                    <button className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center justify-center w-full space-x-2">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                        <path d="M3 6h18" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex flex-col space-y-2 px-1">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="#FFC107" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span className="text-[9px] text-secondary/60">(4.9)</span>
                  </div>
                  <h4 className="text-sm font-bold text-primary group-hover:text-primary-container transition-colors truncate">
                    {product.name}
                  </h4>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-black text-accent-pink">${product.price}</span>
                    <span className="text-xs text-secondary/40 line-through">${(parseFloat(product.price) * 2).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1 py-0.5">Free Shipping</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* why shop with us */}
        <section className="bg-surface-low px-6 py-20 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter mb-16">
              Why Shop With <span className="text-primary-container">Cuppy</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Worldwide Shipping", desc: "Fast & tracked delivery to 150+ countries.", icon: "🌐" },
                { title: "Premium Quality", desc: "100% human hair, meticulously hand-selected.", icon: "💎" },
                { title: "7-Day Returns", desc: "Hassle-free exchange & return policy.", icon: "🔄" },
                { title: "Secure Payment", desc: "Safe encryption & various payment methods.", icon: "🛡️" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h5 className="font-sans font-black text-xs uppercase tracking-widest text-primary mb-3">{item.title}</h5>
                  <p className="text-[11px] font-bold text-secondary/70 leading-relaxed uppercase">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col space-y-8">
            <CuppyLogo light />
            <p className="text-xs leading-6 text-white/60 font-medium max-w-xs uppercase">
              RETAILING PREMIUM HUMAN HAIR SINCE 2024. GLOBAL SOURCING, UNCOMPROMISED QUALITY.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-[10px] font-bold">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-[10px] font-bold">TK</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-[10px] font-bold">FB</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-primary-container">Customer Care</h5>
            <ul className="space-y-4 text-[10px] font-bold text-white/70 uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-primary-container">The Business</h5>
            <ul className="space-y-4 text-[10px] font-bold text-white/70 uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale Inquiries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-primary-container">Newsletter</h5>
            <p className="text-[10px] font-bold text-white/60 mb-6 uppercase">Get $10 OFF your first order.</p>
            <div className="relative border-b-2 border-white/20 pb-3">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-transparent border-none text-[10px] tracking-widest w-full focus:outline-none focus:ring-0 placeholder:text-white/30 text-white"
              />
              <button className="absolute right-0 top-0 text-[10px] font-black text-primary-container">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[9px] font-bold text-white/40 uppercase tracking-widest">
          <div>© 2024 CUPPY HAIR GLOBAL. ALL RIGHTS RESERVED.</div>
          <div className="flex space-x-6 items-center">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
            <div className="w-px h-4 bg-white/10" />
            <span>Secure SSL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
