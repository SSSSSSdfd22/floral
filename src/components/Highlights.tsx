import { products } from "../data/products";
import type { Product } from "../data/products";
import { ArrowRight } from "lucide-react";

interface HighlightsProps {
  onAddToCart: (product: Product) => void;
}

const sections = [
  {
    id: "best-sellers",
    label: "Best Sellers",
    heading: "Our Most-Loved Arrangements",
    desc: "Tried, tested, and adored by our customers — start here if you're not sure what to choose.",
    emoji: "🏆",
    bg: "bg-amber-50",
    accentBg: "bg-amber-500",
    accentText: "text-amber-700",
    filterKey: "best-sellers",
  },
  {
    id: "love-romance",
    label: "Love & Romance",
    heading: "Romance in Full Bloom",
    desc: "Make them feel truly special with our handcrafted romantic flower arrangements.",
    emoji: "❤️",
    bg: "bg-rose-50",
    accentBg: "bg-rose-500",
    accentText: "text-rose-700",
    filterKey: "love-romance",
  },
  {
    id: "luxury",
    label: "Luxury Collection",
    heading: "Indulge in Something Extraordinary",
    desc: "For the moments that deserve more — our luxury arrangements make a lasting impression.",
    emoji: "✨",
    bg: "bg-purple-50",
    accentBg: "bg-purple-600",
    accentText: "text-purple-700",
    filterKey: "luxury",
  },
  {
    id: "sympathy",
    label: "Sympathy Flowers",
    heading: "Express Your Compassion",
    desc: "Thoughtfully designed sympathy flowers to offer comfort, hope, and heartfelt condolences.",
    emoji: "🕊️",
    bg: "bg-slate-50",
    accentBg: "bg-slate-600",
    accentText: "text-slate-700",
    filterKey: "sympathy",
  },
  {
    id: "plants",
    label: "Plants & Gardens",
    heading: "Living Gifts That Last",
    desc: "Green plants, blooming plants, and dish gardens — gifts that grow and bring joy every day.",
    emoji: "🌿",
    bg: "bg-emerald-50",
    accentBg: "bg-emerald-600",
    accentText: "text-emerald-700",
    filterKey: "plants",
  },
  {
    id: "gift-baskets",
    label: "Gift Baskets",
    heading: "The Perfect Add-On Gift",
    desc: "Complement your flowers with gourmet snack baskets, fruit baskets, chocolates, and more.",
    emoji: "🧺",
    bg: "bg-orange-50",
    accentBg: "bg-orange-500",
    accentText: "text-orange-700",
    filterKey: "gift-baskets",
  },
];

export default function Highlights({ onAddToCart }: HighlightsProps) {
  return (
    <div>
      {sections.map((section) => {
        const sectionProducts = products
          .filter((p) => p.category.includes(section.filterKey))
          .slice(0, 3);

        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-16 ${section.bg}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                <div>
                  <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${section.accentText}`}>
                    {section.emoji} {section.label}
                  </p>
                  <h2 className="text-3xl font-extrabold text-gray-800 leading-tight">
                    {section.heading}
                  </h2>
                  <p className="text-gray-500 mt-2 max-w-lg text-sm leading-relaxed">
                    {section.desc}
                  </p>
                </div>
                <a
                  href="#shop"
                  className={`flex items-center gap-2 ${section.accentText} font-semibold text-sm hover:underline shrink-0`}
                >
                  View All
                  <ArrowRight size={15} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectionProducts.map((product) => (
                  <ProductHighlightCard
                    key={product.id}
                    product={product}
                    accentBg={section.accentBg}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function ProductHighlightCard({
  product,
  accentBg,
  onAddToCart,
}: {
  product: Product;
  accentBg: string;
  onAddToCart: (p: Product) => void;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-white/80">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-800 uppercase tracking-wide text-sm">
          {product.name}
        </h3>
        {product.subtitle && (
          <p className="text-xs text-gray-400 italic mt-0.5">{product.subtitle}</p>
        )}
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-gray-700">
            {product.price !== null
              ? `$${product.price.toFixed(2)}`
              : product.priceLabel ?? "Call for pricing"}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className={`${accentBg} text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity shadow-sm`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
