import { useState } from "react";
import { ShoppingCart, Phone, Menu, X, ChevronDown, Flower2 } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "Roses", href: "#roses" },
  {
    label: "Occasions",
    children: [
      { label: "Birthday Flowers", href: "#birthday" },
      { label: "Anniversary Flowers", href: "#love-romance" },
      { label: "Just Because", href: "#occasions" },
      { label: "Get Well Flowers", href: "#occasions" },
      { label: "New Baby Flowers", href: "#occasions" },
      { label: "Graduation Flowers", href: "#occasions" },
      { label: "Wedding Bouquets", href: "#wedding" },
      { label: "Prom Flowers", href: "#occasions" },
    ],
  },
  {
    label: "Sympathy",
    children: [
      { label: "Funeral Flowers", href: "#sympathy" },
      { label: "Cremation & Memorial", href: "#sympathy" },
      { label: "Casket Flowers", href: "#sympathy" },
      { label: "Standing Sprays & Wreaths", href: "#sympathy" },
      { label: "Sympathy Arrangements", href: "#sympathy" },
    ],
  },
  {
    label: "Holidays",
    children: [
      { label: "Mother's Day", href: "#holidays" },
      { label: "Father's Day", href: "#holidays" },
      { label: "Valentine's Day", href: "#love-romance" },
      { label: "Christmas", href: "#holidays" },
      { label: "Easter", href: "#seasonal" },
      { label: "Thanksgiving", href: "#seasonal" },
      { label: "Halloween", href: "#holidays" },
    ],
  },
  {
    label: "More",
    children: [
      { label: "Love & Romance", href: "#love-romance" },
      { label: "Luxury", href: "#luxury" },
      { label: "Plants", href: "#plants" },
      { label: "Gift Baskets", href: "#gift-baskets" },
      { label: "Gift Items", href: "#gift-items" },
      { label: "Modern & Tropical", href: "#modern-tropical" },
      { label: "Seasonal", href: "#seasonal" },
      { label: "Custom Orders", href: "#custom-orders" },
    ],
  },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-rose-700 text-white text-sm py-2 px-4 flex justify-between items-center">
        <span className="hidden sm:block">🌸 Airdrie's Favourite Local Florist – Same-Day Delivery Available</span>
        <a href="tel:+15874499428" className="flex items-center gap-1.5 hover:text-rose-200 transition-colors font-medium">
          <Phone size={14} />
          (587) 449-9428
        </a>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-rose-300 transition-shadow">
                <Flower2 size={22} className="text-white" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800 leading-tight tracking-tight">Flower Whispers</p>
                <p className="text-xs text-rose-500 font-medium tracking-widest uppercase">Airdrie Florist</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors">
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onCartClick}
                className="relative flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
              >
                <ShoppingCart size={16} />
                <span className="hidden sm:inline">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[75vh] overflow-y-auto">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-gray-50">
                  <button
                    className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    onClick={() => setOpenMobileItem(openMobileItem === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform ${openMobileItem === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openMobileItem === item.label && (
                    <div className="bg-rose-50/50 pl-4">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-gray-600 hover:text-rose-600 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-5 py-3.5 text-sm font-semibold text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors border-b border-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        )}
      </header>
    </>
  );
}
