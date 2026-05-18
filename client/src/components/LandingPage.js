import villa1 from '../images/villa1.png';
import villa2 from '../images/villa2.png';
import villa3 from '../images/villa3.png';
import villa4 from '../images/villa4.png';
import villa5 from '../images/villa5.png';

export default function VillaBnbLanding() {

  return (
    <div className="min-h-screen font-sans bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex flex-col">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={villa2}
            alt="Luxury villa with pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
        </div>

        {/* Hero content — global NavBar overlays this section */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-16 px-8 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
              Find Your Perfect Villa Escape
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-md">
              Discover stunning villas and luxury homes around the world. Your dream getaway is just one click away.
            </p>
            <div className="flex items-center gap-3">
              <button className="bg-[#FF385C] text-white font-semibold text-sm rounded-full px-8 py-3 hover:bg-[#E6005F] transition-colors shadow-lg">
                Start Exploring
              </button>
              <button className="w-12 h-12 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5">
                  <path d="M3 13L13 3M13 3H7M13 3V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Featured villa card — bottom right */}
          <div className="absolute bottom-16 right-8 md:right-12 bg-white rounded-2xl p-5 max-w-[260px] shadow-2xl">
            <img 
              src={villa1}
              alt="Featured villa"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Beachfront Villa, Malibu
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  5 bedrooms • Private pool
                </p>
                <p className="text-sm font-bold text-gray-900 mt-2">$580 <span className="text-xs font-normal text-gray-500">per night</span></p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FF385C]">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <p className="text-white/50 text-[10px] tracking-widest uppercase">Scroll to Explore</p>
            <div className="w-px h-5 bg-white/30 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Search/Filter Section */}
      <section className="py-16 px-8 md:px-16 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 -mt-12 relative z-20">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Location</label>
              <input type="text" placeholder="Where to?" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF385C]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Check In</label>
              <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF385C]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Check Out</label>
              <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF385C]" />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-[#FF385C] text-white font-semibold rounded-lg px-6 py-3 hover:bg-[#E6005F] transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#FF385C] text-sm font-semibold uppercase tracking-widest">About VillaBnB</span>
            <h2 className="text-gray-900 text-4xl font-bold mt-3 mb-6 leading-tight">
              Luxury Villa Stays Made Easy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              VillaBnB connects travelers with the world's most beautiful private villas and luxury homes. Whether you're looking for a beachfront paradise, mountain retreat, or urban penthouse, we have the perfect escape waiting for you.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Since 2015, we've hosted over 150,000 guests at our handpicked villa properties across 45 countries, offering unforgettable experiences and world-class hospitality.
            </p>
            <button className="bg-gray-900 text-white text-sm font-semibold rounded-full px-8 py-3 hover:bg-gray-700 transition-colors">
              Become a Host
            </button>
          </div>
          <div className="relative">
            <img
              src={villa3}
              alt="Luxury villa interior"
              className="rounded-3xl w-full h-96 object-cover shadow-lg"
            />
            <div className="absolute -bottom-8 -left-8 bg-[#FF385C] text-white rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">150K+</p>
              <p className="text-sm mt-2">Happy Guests Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-8 md:px-16 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#FF385C] text-sm font-semibold uppercase tracking-widest">Villa Types</span>
            <h2 className="text-gray-900 text-4xl font-bold mt-3">Browse Our Collections</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path d="M12 3L3 9v12h6v-6h6v6h6V9L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Beach Villas",
                desc: "Oceanfront properties with pristine beaches, private docks, and sunset views.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path d="M5 12h14M5 17h14M9 7h6M7 7h2M7 17h2M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Mountain Retreats",
                desc: "Alpine cabins and hillside estates with panoramic views and privacy.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Urban Penthouses",
                desc: "Sophisticated city-center properties in the world's most vibrant destinations.",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="w-14 h-14 bg-[#FF385C]/15 rounded-xl flex items-center justify-center mb-5 text-gray-800 group-hover:bg-[#FF385C] group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "150K+", label: "Guests Hosted" },
            { num: "5,000+", label: "Properties" },
            { num: "45", label: "Countries" },
            { num: "4.9/5", label: "Average Rating" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-[#FF385C] text-4xl font-bold">{s.num}</p>
              <p className="text-white/60 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Villas Section */}
      <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[#FF385C] text-sm font-semibold uppercase tracking-widest">Gallery</span>
            <h2 className="text-gray-900 text-4xl font-bold mt-3">Featured Properties</h2>
          </div>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4 transition-colors font-medium">
            View All
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: villa4, title: "Santorini Sunset Villa", loc: "Santorini, Greece", price: "$850/night" },
            { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", title: "Malibu Coast Estate", loc: "Malibu, USA", price: "$1,200/night" },
            { img: villa5, title: "Bali Paradise Villa", loc: "Bali, Indonesia", price: "$450/night" },
          ].map((p) => (
            <div key={p.title} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </button>
              </div>
              <h3 className="text-gray-900 font-semibold text-lg">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{p.loc}</p>
              <p className="text-[#FF385C] font-bold mt-2">{p.price}</p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FF385C] text-sm">★</span>
                ))}
                <span className="text-gray-500 text-sm ml-2">(248)</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-8 md:px-16 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#FF385C] text-sm font-semibold uppercase tracking-widest">Guests Love Us</span>
            <h2 className="text-gray-900 text-4xl font-bold mt-3">Traveler Reviews</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "The villa exceeded all our expectations. Stunning views, perfect amenities, and incredible hospitality. We're already planning our next stay!",
                author: "Sarah Mitchell",
                location: "London, UK"
              },
              {
                text: "VillaBnB made our dream vacation possible. The booking process was seamless and the villa was even more beautiful in person.",
                author: "Marco Rossi",
                location: "Milan, Italy"
              },
              {
                text: "From start to finish, everything was perfect. The owner was attentive, the property was immaculate, and the location was paradise.",
                author: "Emma Chen",
                location: "Singapore"
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#FF385C]">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{t.text}</p>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80"
          alt="Villa CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready for Your Villa Getaway?
          </h2>
          <p className="text-white/80 mb-10 leading-relaxed text-lg">
            Explore thousands of handpicked villas and luxury homes. Start your unforgettable journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#FF385C] text-white font-semibold text-sm rounded-full px-10 py-3 hover:bg-[#E6005F] transition-colors shadow-lg">
              Explore Villas Now
            </button>
            <button className="text-white border border-white/50 rounded-full px-10 py-3 text-sm hover:bg-white/10 transition-colors font-medium">
              Learn About Hosting
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8 pb-8 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#FF385C] flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 8c0 1.93-1.57 3.5-3.5 3.5S6.5 11.93 6.5 10 8.07 6.5 10 6.5s3.5 1.57 3.5 3.5z" fill="white" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">VillaBnB</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Discover</h4>
                <ul className="space-y-2">
                  {["Browse Villas", "Popular Destinations", "Trending Now"].map(l => (
                    <li key={l}><a href="#" className="text-white/50 text-xs hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Host</h4>
                <ul className="space-y-2">
                  {["Become a Host", "Host Guidelines", "Resources"].map(l => (
                    <li key={l}><a href="#" className="text-white/50 text-xs hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
                <ul className="space-y-2">
                  {["Help Center", "Safety Tips", "Contact Us"].map(l => (
                    <li key={l}><a href="#" className="text-white/50 text-xs hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm">© 2025 VillaBnB. All rights reserved.</p>
            <div className="flex gap-8">
              {["Privacy", "Terms", "Cookie Policy"].map((l) => (
                <a key={l} href="#" className="text-white/50 text-sm hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}