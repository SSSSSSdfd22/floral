import { Flower2, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center">
                <Flower2 size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-none">Flower Whispers</p>
                <p className="text-xs text-rose-400 tracking-widest uppercase mt-0.5">Airdrie Florist</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              We are the place where flowers are uniquely designed and affordably priced.
              Proudly serving Airdrie, AB and surrounding communities.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-gray-800 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors text-sm font-bold"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-gray-800 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors text-sm font-bold"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Best Sellers", "#best-sellers"],
                ["Roses", "#roses"],
                ["Love & Romance", "#love-romance"],
                ["Birthday Flowers", "#birthday"],
                ["Sympathy Flowers", "#sympathy"],
                ["Wedding Bouquets", "#wedding"],
                ["Plants", "#plants"],
                ["Gift Baskets", "#gift-baskets"],
                ["Luxury Collection", "#luxury"],
                ["Modern & Tropical", "#modern-tropical"],
                ["Seasonal Flowers", "#seasonal"],
                ["Custom Orders", "#custom-orders"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-rose-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Occasions */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Occasions</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Just Because", "#occasions"],
                ["Anniversary", "#love-romance"],
                ["Get Well", "#occasions"],
                ["New Baby", "#occasions"],
                ["Graduation", "#occasions"],
                ["Prom Flowers", "#occasions"],
                ["Admin Professionals Day", "#occasions"],
                ["Mother's Day", "#holidays"],
                ["Father's Day", "#holidays"],
                ["Valentine's Day", "#love-romance"],
                ["Christmas", "#holidays"],
                ["Thanksgiving", "#seasonal"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-rose-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-rose-400 shrink-0 mt-0.5" />
                <span>502-3 Stonegate Drive NW<br />Airdrie, AB T4B 0N2</span>
              </li>
              <li>
                <a href="tel:+15874499428" className="flex gap-3 hover:text-rose-400 transition-colors">
                  <Phone size={16} className="text-rose-400 shrink-0 mt-0.5" />
                  (587) 449-9428
                </a>
              </li>
              <li>
                <a href="mailto:info@airdrieflowers.ca" className="flex gap-3 hover:text-rose-400 transition-colors">
                  <Mail size={16} className="text-rose-400 shrink-0 mt-0.5" />
                  info@airdrieflowers.ca
                </a>
              </li>
            </ul>

            <div className="mt-6 bg-gray-800 rounded-xl p-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">Store Hours</p>
              <div className="text-xs space-y-1 text-gray-400">
                <div className="flex justify-between"><span>Mon – Fri</span><span>9:00 AM – 5:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span>9:00 AM – 3:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-gray-500">Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Flower Whispers. All rights reserved. | Airdrie, AB, Canada</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-rose-400 transition-colors">Pricing & Substitution Policy</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
