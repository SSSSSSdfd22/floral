import { ChevronDown, Truck, Clock, Star, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-rose-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star size={14} className="fill-yellow-300 text-yellow-300" />
            Airdrie's Favourite Local Florist
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            Fresh Flowers,
            <br />
            <span className="text-rose-300">Handcrafted</span>
            <br />
            with Love
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
            Beautifully designed and affordably priced floral arrangements
            delivered fresh in Airdrie, AB & surrounding areas. Same-day delivery available!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#shop"
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-xl hover:shadow-rose-600/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Shop Flowers
            </a>
            <a
              href="tel:+15874499428"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/40 text-white px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Call Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {[
              { icon: <Truck size={18} />, text: "Same-Day Delivery" },
              { icon: <Clock size={18} />, text: "Order by 2 PM" },
              { icon: <Star size={18} />, text: "5-Star Rated" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span className="text-rose-300">{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#shop"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Browse</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>

      {/* Delivery banner strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-rose-700/90 backdrop-blur-sm text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm font-medium">
          <span>📍 502-3 Stonegate Drive NW, Airdrie, AB T4B 0N2</span>
          <span className="hidden sm:block text-rose-300">|</span>
          <span>🚚 Delivering in Airdrie & Surrounding Areas</span>
          <span className="hidden sm:block text-rose-300">|</span>
          <a href="tel:+15874499428" className="underline hover:text-rose-200">(587) 449-9428</a>
        </div>
      </div>
    </section>
  );
}
